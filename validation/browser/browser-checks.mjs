import { chromium } from 'playwright-core';
import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const require = createRequire(import.meta.url);
const axePath = require.resolve('axe-core/axe.min.js');
const artifacts = resolve(import.meta.dirname, '../screenshots');
const fixtures = process.env.HUMAN_TASTE_FIXTURES || resolve(import.meta.dirname, '../fixtures');
await mkdir(artifacts, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.BROWSER_EXECUTABLE || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const results = { browser: await browser.version(), sites: [], checks: [] };
const record = (name, detail) => { results.checks.push({ name, status: 'passed', detail }); console.log('PASS:', name, detail || ''); };
function contrastRatio(foreground, background) {
  const luminance = color => color.match(/[\d.]+/g).slice(0, 3).map(Number).map(value => { const s = value / 255; return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4; }).reduce((sum, value, index) => sum + value * [0.2126, 0.7152, 0.0722][index], 0);
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

async function inspectSite(name, url) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const errors = [];
  const failedResponses = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) failedResponses.push(`${response.status()} ${response.url()}`); });
  const response = await page.goto(url, { waitUntil: 'networkidle' });
  assert.equal(response.status(), 200);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: resolve(artifacts, `${name}-desktop-viewport.png`), fullPage: false });
  await page.screenshot({ path: resolve(artifacts, `${name}-desktop.png`), fullPage: true });
  const desktopTitle = await page.title();
  assert(desktopTitle && !/vite|react app|untitled/i.test(desktopTitle));
  assert.equal(await page.locator('main').count(), 1);
  assert.equal(await page.locator('h1').count(), 1);
  record(`${name}: page loads`, desktopTitle);

  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: width < 600 ? 844 : 1000 });
    const sizing = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth) }));
    assert(sizing.content <= sizing.viewport + 1, `${name} overflows at ${width}: ${JSON.stringify(sizing)}`);
    record(`${name}: no horizontal overflow at ${width}px`);
    if (width === 390) await page.screenshot({ path: resolve(artifacts, `${name}-mobile.png`), fullPage: true });
  }

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.addScriptTag({ path: axePath });
  const accessibility = await page.evaluate(async () => {
    const report = await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] } });
    return { violations: report.violations.map(item => ({ id: item.id, impact: item.impact, description: item.description, nodes: item.nodes.map(node => ({ target: node.target, summary: node.failureSummary })) })), incomplete: report.incomplete.map(item => ({ id: item.id, description: item.description, nodes: item.nodes.length })), passes: report.passes.length };
  });
  results.sites.push({ name, title: desktopTitle, url, accessibility });
  assert.equal(accessibility.violations.length, 0, `${name} accessibility violations: ${JSON.stringify(accessibility.violations)}`);
  record(`${name}: automated WCAG checks`, `${accessibility.passes} passing rules; ${accessibility.incomplete.length} rules require manual review`);

  await page.keyboard.press('Tab');
  const focus = await page.evaluate(() => ({ tag: document.activeElement.tagName, text: document.activeElement.textContent.trim().slice(0, 100), visible: document.activeElement.matches(':focus-visible'), outline: getComputedStyle(document.activeElement).outlineStyle, width: getComputedStyle(document.activeElement).outlineWidth }));
  assert(focus.visible && focus.tag !== 'BODY' && focus.outline !== 'none' && focus.width !== '0px', `${name}: no visible first keyboard focus ${JSON.stringify(focus)}`);
  record(`${name}: initial keyboard focus is visible`, focus.text);

  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches));
  assert(await page.locator('h1').isVisible());
  record(`${name}: reduced-motion preference keeps opening content visible`);
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  return { context, page, errors, failedResponses };
}

try {
  const baseline = JSON.parse(await readFile(resolve(import.meta.dirname, 'baseline-hashes.json'), 'utf8'));
  for (const [path, hash] of Object.entries(baseline)) {
    const actual = createHash('sha256').update(await readFile(resolve(fixtures, 'existing-site', path))).digest('hex');
    assert.equal(actual, hash, `Preserved existing file: ${path}`);
    record(`serein: preserved ${path}`, 'SHA-256 matches baseline');
  }
  const fieldwork = await inspectSite('fieldwork', 'http://127.0.0.1:8765');
  const serein = await inspectSite('serein', 'http://127.0.0.1:8766');
  const walkPage = fieldwork.page;
  // These surfaces were visually confirmed in the rendered SVG/footer. Axe leaves
  // the three SVG numbers and decorative arrow incomplete, so retain that result
  // and separately check the actual foreground/background pairs.
  const colors = await walkPage.evaluate(() => ({ markerText: getComputedStyle(document.querySelector('.sketch-number text')).fill, markerBackground: getComputedStyle(document.querySelector('.sketch-point circle')).fill, arrow: getComputedStyle(document.querySelector('.site-footer .text-link span[aria-hidden]')).color, paper: getComputedStyle(document.documentElement).backgroundColor }));
  const markerContrast = contrastRatio(colors.markerText, colors.markerBackground);
  const arrowContrast = contrastRatio(colors.arrow, colors.paper);
  assert(markerContrast >= 4.5);
  assert(arrowContrast >= 4.5);
  results.manualContrastFollowup = { ...colors, markerContrast, arrowContrast, note: 'Background associations confirmed by source and rendered visual inspection; axe incomplete results retained.' };
  record('fieldwork: SVG number contrast follow-up', `${markerContrast.toFixed(2)}:1`);
  record('fieldwork: decorative footer arrow contrast follow-up', `${arrowContrast.toFixed(2)}:1`);
  const visibleWalks = walkPage.locator('.walk-entry:not([hidden])');
  assert.equal(await visibleWalks.count(), 3);
  await walkPage.locator('label', { has: walkPage.locator('input[value="easy"]') }).click();
  assert.equal(await visibleWalks.count(), 2);
  assert.match(await walkPage.locator('#result-count').innerText(), /2 walks/);
  record('fieldwork: easy effort filter returns two routes and announces count');
  await walkPage.getByRole('radio', { name: 'Easy', exact: true }).press('ArrowRight');
  assert.equal(await walkPage.getByRole('radio', { name: 'Steep', exact: true }).isChecked(), true);
  assert.equal(await visibleWalks.count(), 1);
  assert.equal(await visibleWalks.first().getAttribute('id'), 'hillside-steps');
  record('fieldwork: native radio keyboard selection returns steep route');
  await walkPage.locator('label', { has: walkPage.locator('input[value="all"]') }).click();
  const firstSummary = walkPage.locator('#river-loop summary');
  await firstSummary.focus();
  await firstSummary.press('Enter');
  assert.equal(await walkPage.locator('#river-loop details').getAttribute('open'), '');
  await walkPage.locator('#market-morning summary').click();
  assert.equal(await walkPage.locator('details[open]').count(), 2);
  record('fieldwork: route disclosures work by keyboard and allow multiple open sheets');
  await walkPage.locator('#river-loop').scrollIntoViewIfNeeded();
  await walkPage.screenshot({ path: resolve(artifacts, 'fieldwork-route-details.png'), fullPage: false });
  await walkPage.setViewportSize({ width: 390, height: 844 });
  await walkPage.locator('label', { has: walkPage.locator('input[value="steep"]') }).click();
  assert.equal(await visibleWalks.count(), 1);
  await walkPage.locator('#hillside-steps summary').click();
  assert.equal(await walkPage.locator('#hillside-steps details').getAttribute('open'), '');
  record('fieldwork: filtering and native disclosures remain usable at mobile width');
  await walkPage.getByRole('link', { name: 'Return to top', exact: true }).click();
  assert.equal(new URL(walkPage.url()).hash, '#top');
  record('fieldwork: narrow footer label change preserves top-link destination');

  const noJsContext = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const noJs = await noJsContext.newPage();
  await noJs.goto('http://127.0.0.1:8765', { waitUntil: 'networkidle' });
  assert.equal(await noJs.locator('.walk-entry:not([hidden])').count(), 3);
  assert.equal(await noJs.locator('#effort-filter').isVisible(), false);
  await noJs.locator('#river-loop summary').click();
  assert.equal(await noJs.locator('#river-loop details').getAttribute('open'), '');
  record('fieldwork: without JavaScript all content and native route disclosures work');
  await noJsContext.close();

  const objectPage = serein.page;
  assert.equal(await objectPage.locator('#collection article').count(), 3);
  await objectPage.getByRole('button', { name: 'Vessels', exact: true }).click();
  assert.equal(await objectPage.locator('#collection article').count(), 2);
  await objectPage.getByRole('button', { name: 'Lighting', exact: true }).click();
  assert.equal(await objectPage.locator('#collection article').count(), 1);
  assert.equal(await objectPage.getByRole('heading', { name: 'Arc lamp', exact: true }).isVisible(), true);
  await objectPage.getByRole('button', { name: 'All objects', exact: true }).click();
  assert.equal(await objectPage.locator('#collection article').count(), 3);
  record('serein: retained collection filters return 3 / 2 / 1 objects');

  const trigger = objectPage.getByRole('button', { name: 'Ask about Drift vessel', exact: true });
  await trigger.click();
  assert.equal(await objectPage.getByRole('dialog').isVisible(), true);
  await objectPage.getByRole('button', { name: 'Prepare inquiry', exact: true }).click();
  assert(await objectPage.getByLabel('Your email', { exact: true }).evaluate(input => input.validity.valueMissing));
  await objectPage.getByLabel('Your email', { exact: true }).fill('not-an-email');
  await objectPage.getByRole('button', { name: 'Prepare inquiry', exact: true }).click();
  assert(await objectPage.getByLabel('Your email', { exact: true }).evaluate(input => input.validity.typeMismatch));
  record('serein: existing required email and email-format validation work');
  await objectPage.getByLabel('Your email', { exact: true }).fill('reviewer@example.test');
  await objectPage.getByRole('button', { name: 'Prepare inquiry', exact: true }).click();
  assert.equal(await objectPage.getByRole('status').innerText(), 'Demo inquiry prepared — no message sent.');
  record('serein: inquiry has honest browser-local success feedback');
  const dialogAxe = await objectPage.evaluate(async () => (await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a','wcag2aa','wcag21a','wcag21aa'] } })).violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.target) })));
  assert.deepEqual(dialogAxe, []);
  record('serein: open inquiry dialog passes automated WCAG rules');
  await objectPage.screenshot({ path: resolve(artifacts, 'serein-inquiry.png'), fullPage: false });
  await objectPage.keyboard.press('Escape');
  assert.equal(await objectPage.getByRole('dialog').isVisible(), false);
  assert.equal(await trigger.evaluate(element => element === document.activeElement), true);
  record('serein: Escape closes inquiry and restores trigger focus');
  await trigger.click();
  await objectPage.getByRole('status').waitFor({ state: 'hidden' });
  assert.equal(await objectPage.getByRole('status').count(), 0);
  await objectPage.getByRole('button', { name: 'Close inquiry', exact: true }).click();
  assert.equal(await objectPage.getByRole('dialog').isVisible(), false);
  record('serein: reopening resets success state and explicit close works');
  await objectPage.setViewportSize({ width: 390, height: 844 });
  await objectPage.getByRole('button', { name: 'Lighting', exact: true }).click();
  await objectPage.getByRole('button', { name: 'Ask about Arc lamp', exact: true }).click();
  assert.equal(await objectPage.getByRole('dialog').isVisible(), true);
  assert(await objectPage.getByRole('heading', { name: 'Ask about Arc lamp', exact: true }).isVisible());
  await objectPage.keyboard.press('Escape');
  record('serein: collection selection and inquiry work at mobile width');
  const careResponse = await objectPage.goto('http://127.0.0.1:8766/care.html', { waitUntil: 'networkidle' });
  assert.equal(careResponse.status(), 200);
  assert.equal(await objectPage.getByRole('heading', { name: 'Care for your ceramic objects', exact: true }).isVisible(), true);
  await objectPage.getByRole('link', { name: 'Return to collection', exact: true }).click();
  assert.equal(await objectPage.getByRole('heading', { name: 'Ceramic objects for everyday spaces', exact: true }).isVisible(), true);
  record('serein: existing care route and return navigation remain working');
  for (const [name, run] of [['fieldwork', fieldwork], ['serein', serein]]) {
    assert.deepEqual(run.errors, [], `${name} runtime errors`);
    assert.deepEqual(run.failedResponses, [], `${name} failed HTTP requests`);
    record(`${name}: no uncaught browser errors or failed HTTP responses`);
    await run.context.close();
  }
} catch (error) {
  results.error = { message: error.message, stack: error.stack };
  console.error(error);
  process.exitCode = 1;
} finally {
  await writeFile('browser-results.json', JSON.stringify(results, null, 2));
  await browser.close();
}
