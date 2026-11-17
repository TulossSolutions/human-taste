import { chromium } from 'playwright-core';
import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const require = createRequire(import.meta.url);
const phase = process.argv[2] || 'after';
assert(['before', 'after'].includes(phase));
const root = process.env.HUMAN_TASTE_REFINEMENT_ROOT || resolve(import.meta.dirname, '../refinement');
const url = process.env.HUMAN_TASTE_REFINEMENT_URL || `http://127.0.0.1:${phase === 'before' ? 8775 : 8776}`;
const screenshots = resolve(root, 'screenshots');
await mkdir(screenshots, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.BROWSER_EXECUTABLE || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const result = { phase, browser: await browser.version(), conditions: { url, deviceScaleFactor: 1, viewports: [{ width: 1440, height: 1000 }, { width: 390, height: 844 }], content: 'Same three supplied fictional products; all filter selected; inquiry closed; scroll at top.' }, checks: [], widths: [] };
const pass = (name, detail) => { result.checks.push({ name, detail, status: 'passed' }); console.log('PASS:', name, detail || ''); };
try {
  const baseline = JSON.parse(await readFile(resolve(root, 'baseline-hashes.json'), 'utf8'));
  for (const [path, hash] of Object.entries(baseline)) {
    if (path === 'src/styles.css') continue;
    const actual = createHash('sha256').update(await readFile(resolve(root, phase, path))).digest('hex');
    assert.equal(actual, hash, path);
    pass(`Preserved ${path}`, 'SHA-256 matches baseline');
  }
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  const errors = [];
  const failedResources = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('response', response => { if (response.status() >= 400) failedResources.push(`${response.status()} ${response.url()}`); });
  assert.equal((await page.goto(url, { waitUntil: 'networkidle' })).status(), 200);
  await page.evaluate(() => document.fonts.ready);
  result.metrics = await page.evaluate(() => {
    const header = document.querySelector('.site-header').getBoundingClientRect();
    const main = document.querySelector('main').getBoundingClientRect();
    const image = document.querySelector('.product-image').getBoundingClientRect();
    const caption = document.querySelector('.product-caption h3').getBoundingClientRect();
    return { gutter: header.left, alignmentDifference: Math.abs(header.left - main.left), headingSize: parseFloat(getComputedStyle(document.querySelector('h1')).fontSize), captionGap: caption.top - image.bottom, mainText: document.querySelector('main').innerText.replace(/\s+/g, ' ').trim() };
  });
  await page.screenshot({ path: resolve(screenshots, `${phase}-desktop.png`), fullPage: true });
  await page.screenshot({ path: resolve(screenshots, `${phase}-desktop-viewport.png`), fullPage: false });
  for (const width of [1440, 768, 390, 320]) {
    await page.setViewportSize({ width, height: width < 600 ? 844 : 1000 });
    const dimensions = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), gutter: document.querySelector('.site-header').getBoundingClientRect().left, alignmentDifference: Math.abs(document.querySelector('.site-header').getBoundingClientRect().left - document.querySelector('main').getBoundingClientRect().left) }));
    result.widths.push({ width, ...dimensions });
    if (phase === 'after') { assert(dimensions.content <= dimensions.viewport + 1, `Overflow at ${width}: ${JSON.stringify(dimensions)}`); pass(`No horizontal overflow at ${width}px`); }
    if (width === 390) {
      await page.screenshot({ path: resolve(screenshots, `${phase}-mobile.png`), fullPage: true });
      await page.screenshot({ path: resolve(screenshots, `${phase}-mobile-viewport.png`), fullPage: false });
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
  result.accessibility = await page.evaluate(async () => {
    const report = await axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a','wcag2aa','wcag21a','wcag21aa'] } });
    return { violations: report.violations.map(item => ({ id: item.id, nodes: item.nodes.map(node => node.target) })), incomplete: report.incomplete.map(item => item.id), passingRules: report.passes.length };
  });
  assert.equal(result.accessibility.violations.length, 0, JSON.stringify(result.accessibility.violations));
  pass('Automated WCAG checks have zero violations', `${result.accessibility.passingRules} passing rules; ${result.accessibility.incomplete.length} incomplete`);
  await page.keyboard.press('Tab');
  assert(await page.evaluate(() => document.activeElement.matches(':focus-visible') && getComputedStyle(document.activeElement).outlineStyle !== 'none'));
  pass('Initial keyboard focus is visible');
  await page.getByRole('button', { name: 'Vessels', exact: true }).click();
  assert.equal(await page.locator('#collection article').count(), 2);
  await page.getByRole('button', { name: 'Lighting', exact: true }).click();
  assert.equal(await page.locator('#collection article').count(), 1);
  await page.getByRole('button', { name: 'All objects', exact: true }).click();
  assert.equal(await page.locator('#collection article').count(), 3);
  pass('Collection filtering retains 3 / 2 / 1 results');
  const trigger = page.getByRole('button', { name: 'Ask about Drift vessel', exact: true });
  await trigger.click();
  assert(await page.getByRole('dialog').isVisible());
  await page.getByRole('button', { name: 'Prepare inquiry', exact: true }).click();
  assert(await page.getByLabel('Your email', { exact: true }).evaluate(input => input.validity.valueMissing));
  await page.getByLabel('Your email', { exact: true }).fill('not-an-email');
  await page.getByRole('button', { name: 'Prepare inquiry', exact: true }).click();
  assert(await page.getByLabel('Your email', { exact: true }).evaluate(input => input.validity.typeMismatch));
  await page.getByLabel('Your email', { exact: true }).fill('reviewer@example.test');
  await page.getByRole('button', { name: 'Prepare inquiry', exact: true }).click();
  await page.getByRole('status').waitFor({ state: 'visible' });
  assert.equal(await page.getByRole('status').innerText(), 'Demo inquiry prepared — no message sent.');
  pass('Inquiry validation and honest local success still work');
  await page.keyboard.press('Escape');
  assert.equal(await trigger.evaluate(element => document.activeElement === element), true);
  await trigger.click();
  await page.getByRole('status').waitFor({ state: 'hidden' });
  await page.getByRole('button', { name: 'Close inquiry', exact: true }).click();
  pass('Dialog Escape, focus return, reset and explicit close still work');
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole('button', { name: 'Lighting', exact: true }).click();
  await page.getByRole('button', { name: 'Ask about Arc lamp', exact: true }).click();
  assert(await page.getByRole('dialog').isVisible());
  await page.keyboard.press('Escape');
  pass('Inquiry remains operable at mobile viewport');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert(await page.locator('h1').isVisible());
  pass('Reduced-motion mode retains content');
  assert.equal((await page.goto(`${url}/care.html`, { waitUntil: 'networkidle' })).status(), 200);
  await page.getByRole('link', { name: 'Return to collection', exact: true }).click();
  assert(await page.getByRole('heading', { name: 'Ceramic objects for everyday spaces', exact: true }).isVisible());
  pass('Care route and return destination work');
  assert.deepEqual(errors, []);
  assert.deepEqual(failedResources, []);
  pass('No uncaught errors or failed application-resource responses tracked by Playwright');
  if (phase === 'before') {
    assert(result.widths.some(size => size.width < 430 && size.content > size.viewport));
    result.seededIssues = 'Baseline demonstrates narrow-screen overflow plus weak desktop heading hierarchy, narrow gutters and detached captions. Functional checks establish what refinement must preserve.';
  } else {
    const before = JSON.parse(await readFile(resolve(root, 'before-results.json'), 'utf8'));
    assert.equal(result.metrics.mainText, before.metrics.mainText);
    pass('Rendered main content is unchanged');
    assert(result.metrics.headingSize > before.metrics.headingSize);
    pass('Display hierarchy strengthened', `${before.metrics.headingSize}px → ${result.metrics.headingSize}px`);
    const beforeTablet = before.widths.find(size => size.width === 768);
    const afterTablet = result.widths.find(size => size.width === 768);
    assert(afterTablet.gutter >= beforeTablet.gutter + 4 && afterTablet.alignmentDifference <= 1);
    pass('Page spacing restored at 768px while shared edges stay aligned', `${beforeTablet.gutter}px → ${afterTablet.gutter}px`);
    assert(result.metrics.captionGap < before.metrics.captionGap);
    pass('Image/caption grouping tightened', `${before.metrics.captionGap}px → ${result.metrics.captionGap}px`);
  }
} catch (error) {
  result.error = { message: error.message, stack: error.stack };
  console.error(error);
  process.exitCode = 1;
} finally {
  await writeFile(resolve(root, `${phase}-results.json`), JSON.stringify(result, null, 2));
  await browser.close();
}
