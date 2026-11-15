# Fieldwork local demo

This is an explicitly fictional walking-club website built for a scripted Human Taste skill evaluation. It implements approved Brief F1. It is not real walking or navigational advice. No real routes, accounts, payments, bookings, analytics, remote assets, backend, or services are included.

## Files and hosting

- `index.html`: all content, supplied fixture metrics, native route disclosures, original inline SVG sketches.
- `styles.css`: warm-paper/forest/yellow notebook system and responsive layouts.
- `script.js`: progressive local effort filtering only.
- `EVALUATION.md`: scripted transcript, decisions, approval, guidance sources, and verification status.

No install or build step. Serve these three site files from ordinary static hosting. Relative paths also support a subdirectory. Edit route content directly in HTML. No storage, credentials, or network API is used.

## Evaluator preview

The implementing agent did not launch a server. From this directory, the evaluator can run:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. Stop the evaluator's server with Ctrl+C. Opening `index.html` directly should also work because it uses no modules or fetch requests.

Source syntax check:

```powershell
node --check script.js
```

## Remaining browser QA

- Inspect at 1440×1000 and 390×844, plus a narrow 320 px viewport. Check text reflow and horizontal overflow, including open route sheets.
- Verify initial All=3, Easy=2 (River Loop and Market Morning), Steep=1 (Hillside Steps), then All=3 again. The selected control must remain clear without color, and the result count should be announced politely.
- Open and close each `Read route` sheet. Confirm multiple sheets remain open, numbered highlights match their sketches, and open state survives effort filtering.
- Tab through skip link, navigation, filters, and route summaries. Check visible focus; use arrow keys within the radio group and Enter/Space on disclosures.
- Disable JavaScript: all three walks and native disclosures must still work; filter controls must be hidden and the explanatory fallback note visible.
- Check heading navigation, accessible names, screen-reader disclosure states, text zoom, forced colors, and reduced-motion settings. There is no animation.
- Capture real desktop/mobile screenshots. Automated source checks are not visual QA or a screen-reader audit.

## Technical references consulted

On 2026-11-15, read the current [modern-web-guidance entry](https://github.com/GoogleChrome/modern-web-guidance), then followed its current links to [CSS architecture](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/css.md), [layout](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/css-layout.md), and [accordion guidance](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/accordion.md). Consulted [MDN details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details), and Web Features compatibility entries for [details](https://web-platform-dx.github.io/web-features-explorer/features/details/) and [focus-visible](https://web-platform-dx.github.io/web-features-explorer/features/focus-visible/).

Relevant decisions: lightweight flex/grid layouts with flexible tracks; shared CSS custom properties; native non-exclusive disclosures; route headings outside disclosure summaries; adjacent disclosure indicators; native radio selection with visible focus; no new disclosure animation APIs. Compatibility sources support the chosen native disclosure/focus primitives, but actual cross-browser behavior remains for evaluator testing. No guidance repository was installed or vendored.
