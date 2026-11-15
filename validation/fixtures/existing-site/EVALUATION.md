# Serein / Human Taste evaluation

## Stage and authorization

- Stage: ES-1 explicitly approved by a scripted user reply; local implementation and automated checks complete, awaiting evaluator browser QA.
- Work is isolated to this seeded existing-site directory. No skill repository edits, server, publication, external services, or real user-input tools.
- Skills read: this repository's `human-taste/SKILL.md`, its `references/section-interview.md` and `references/decision-and-brief.md`; the environment's `anti-gold-plating/SKILL.md`. Machine-specific paths are normalized here for publication.
- The evaluator supplies actual scripted replies; silence is not approval.

## Actual scripted user request

> Redesign my Serein collection website using Human Taste. It should feel like a contemporary objects gallery with deliberate typography and plenty of room around the objects. Read BRAND.md and the existing project first. I want to retain my established brand and working functionality. The only content and object illustrations you may use are supplied. No testimonials, selling, new services, tracking, photography, accounts, or deployment. It is a fictional local demo. The primary action is asking about an object through the existing local inquiry demonstration. I prefer agent-led art direction, but show me the concrete brief and technical recommendation before building.

Initial stop: ES-1 was presented and source hashes verified unchanged before approval. No subsequent scripted reply had been received at that stop.

### Actual scripted approval, supplied by evaluator

> Approve and build ES-1 as proposed. Preserve the existing framework, dependencies, product data, care page and working interactions. Implement the approved local redesign now, run tests/build, and report changed files plus remaining browser checks. Do not start a server, publish, or change the skill. Keep the evaluation transcript clear that this was a scripted user approval.

This is the explicit approval of ES-1 and its scoped implementation, not inferred approval or an answer from a live user-question tool.

### Evaluator clarification of documentation access

> Read-only browsing of public primary technical documentation, including current GoogleChrome/modern-web-guidance and relevant guides, is permitted and expected. 'No services' means do not integrate/contact business services, submit inquiries, deploy, or add remote runtime dependencies. Please consult current relevant guidance rather than treating technical reference browsing as prohibited, and record exactly what was consulted.

This superseded the initial interpretation that all external documentation contact was excluded. It does not authorize business-service integration or publication.

## Inspected starting-point evidence

- `BRAND.md`: preserve SEREIN; ink `#192b54`, paper `#f4f1e8`, accent `#d9ff65`; identifiers, content, filter, native inquiry dialog and honest success message, `/care.html`, `#collection`, `#studio`, manifests, lockfile, test scripts and care content. All work is fictional and illustrative. Evergreen Chrome, Edge, Firefox and Safari are the audience; evaluator's rendered QA is Chromium only.
- `package.json`, `package-lock.json`: existing React/React DOM 19.2.0 and Vite 7.2.2; npm lockfile v3; no extra libraries required. Installed local runtime: Node v25.0.0, npm 11.6.2. These are inspected versions, not claims of latest releases.
- `index.html`, `src/main.jsx`: English single-page React entry at `/` with existing metadata, separate static care page.
- `src/App.jsx`: SEREIN home link, Collection/Studio/Care navigation, supplied headline and explicit demo copy; all/vessels/lighting buttons using `aria-pressed`; collection maps product data; object-specific inquiry buttons; studio paragraph; honest no-sale footer.
- `src/data.js`: exactly drift, tide, arc; supplied names, material, dimensions, colors, descriptions and SVG paths. Preserve data and ordering.
- `src/components/ProductDialog.jsx`: existing native `dialog.showModal()`/close handling; email validation and question input; local `preventDefault()` submission; `role=status` success: "Demo inquiry prepared — no message sent." No endpoint or transmitted message.
- `src/styles.css`: existing CSS brand tokens and visible focus, small-screen reflow. Current collection is three bordered text cards without rendering the supplied images.
- `public/drift.svg`, `public/tide.svg`, `public/arc.svg`: 720 × 840 object studies, with fictional illustration titles and embedded neutral surfaces. Use unchanged, full aspect ratio, not as manufacturing evidence.
- `public/care.html`: supplied fictional care content and return link; preserve byte-for-byte.
- `tests/catalog.test.js`: two data tests for stable IDs and category behavior. No existing browser-interaction coverage.
- No AGENTS.md found in the trial, its checked ancestors, or the checked repository parent. No local `.git` directory; use captured hashes to verify preservation.

## Baseline checks (before implementation)

- `npm test`: PASS, 2 tests, 0 failures (stable IDs and category behavior).
- `npm run build`: PASS, Vite transformed 26 modules; generated `dist/` refreshed as a baseline build artifact. No dependency installation or manifest changes.
- No rendered, keyboard, dialog, or cross-browser check performed by this agent; evaluator handles browser QA. Passing data tests/build does not establish these behaviors.
- At the initial brief stop, no external technical guidance had yet been consulted. The evaluator later clarified that public primary documentation reading is permitted; implementation references are recorded below.

## Decisions and pending proposals

| Category | Record |
| --- | --- |
| Explicit choices | Existing brand, content and interactions; contemporary object-gallery impression; ample space; local fictional demo; object inquiry is the main action; agent-led direction; brief and recommendation first. |
| Delegated proposal | ES-1: a quiet, asymmetric object index with expressive system-serif display type and restrained sans-serif labels; use the supplied neutral illustration surfaces for tactility. |
| Alternatives | No competing site or stack prototype. More symmetrical/dense presentation trades space for scanning, but the requested gallery and whitespace support the recommended direction. Final review may revisit it. |
| Approval | Scripted user explicitly approved and requested implementation of ES-1, as quoted above. No new approval is required for ordinary choices within it. |
| Pending | Evaluator's rendered visual, interaction and Chromium checks. |
| Missing essentials | None identified for this local scope; audience inferred only as people exploring these fictional ceramic studies. Supplied English copy and evergreen target are sufficient. No asset, font, service or factual invention required. |
| Avoid | New copy, fake proof, sales, photography, generated imagery, extra fonts/libraries, gradients added for decoration, rounded cards, badges, new interactions/services, tracking, accounts, publication. |

## Concrete brief ES-1 — approved by scripted reply above

1. **Purpose and scope.** Redesign the existing `/` collection experience for people exploring three fictional ceramic studies. The main action stays "Ask about [object]" and opens the existing local inquiry demonstration. Keep `/care.html` and the real hash destinations. No new page, section, claim, route, service or content source.
2. **Creative direction.** A contemporary gallery index: one clear opening, generous margins, thin ink rules, and a staggered two-column object sequence. Drift and Arc occupy the broader track; Tide occupies the narrower track with a deliberate vertical offset. Keep image and caption together and preserve the supplied product order. This gives the objects distinct scale and breathing space; the tradeoff is more scrolling than the existing equal-card grid. All creative choices here are agent proposals under the requested agent-led mode, subject to approval.
3. **Typography and surfaces.** Keep the uppercase SEREIN wordmark in its existing sans-serif character. Georgia/system-serif display headline, about 88–112 px at large widths and 44–56 px on narrow screens, with readable line lengths and controlled line breaks. Arial/system sans-serif for navigation, captions, body and forms; 16–18 px body text. No font downloads or unverified font assets. Paper is the page surface, ink handles text/rules, accent is reserved for selected filters and inquiry emphasis. Use only supplied SVG surfaces; no new texture or illustration. No entrance or scroll animation; interaction changes stay immediate, with no dependence on motion.
4. **Reading order.** Static header: SEREIN left; Collection, Studio, Care right; links wrap visibly on mobile. Opening: retain "Ceramic objects for everyday spaces" and the supplied demo paragraph, composed as large left title and compact right note at desktop. Collection: title and inline filter controls, followed by full uncropped object studies with the supplied name, material/dimensions, description and existing inquiry action below each. Studio: retain "Objects, considered slowly." and its supplied factual paragraph, set as a short text-led closing section. Footer: retain the supplied no-sale demo message. Inquiry dialog: style consistently; retain the component, labels, validation and honest local preparation/success state.
5. **Responsive and accessibility.** At narrow widths, a single image-caption sequence in data order; remove desktop staggering, reduce headline scale and preserve generous yet practical margins. Navigation and filters wrap without a hidden menu or horizontal scroll. Each object keeps its action nearby; controls have usable touch dimensions. Use descriptive alt text identifying the supplied images as fictional illustrations. Preserve headings, labeled fields, visible keyboard focus and selected states; no hover-only content. Verify dialog close/Escape/focus, email validation, success/reset and filter behavior through evaluator interaction QA. Keep ink/paper/accent text combinations legible; confirm actual rendered contrast where used. Full image aspect ratios prevent object crops.
6. **Technical recommendation.** Retain React/React DOM 19.2.0, Vite 7.2.2, npm and the existing lockfile. Keep data/filter state, routing and native dialog; implement primarily in `src/App.jsx` and `src/styles.css`, without replacing the application or adding dependencies. Styling the dialog requires no behavioral rewrite. Preserve `src/data.js`, `src/components/ProductDialog.jsx`, manifests, lockfile, tests, SVGs, care page and entry files. Existing scripts: `npm test`, `npm run build`; local preview is `npm run dev` or `npm run preview`, but the evaluator owns the server and browser QA. Delivery is local only. Modern evergreen Chrome/Edge/Firefox/Safari are targets; Chromium only will be actually tested unless reported otherwise. Stable CSS layout/type methods and the existing native dialog avoid adding a new compatibility dependency. No live compatibility/source claims without verification.
7. **Content status.** Existing English copy and object records are supplied content, not new factual claims; preserve exact words. SVGs remain fictional illustrations. Semantic alt attributes describe those same supplied images. The demo disclosure remains visible in the opening, inquiry and footer. No optional missing content is being invented to fill space.
8. **Acceptance.** The first viewport clearly identifies Serein's ceramic-object demo. The three supplied studies are visible, uncropped, and paired with the right captions/actions. Data IDs and category results stay unchanged. Filters, all anchors, Care, native dialog, email validation, local success/reset and keyboard behavior remain usable. At representative narrow/large widths there is no horizontal overflow, clipped text or detached caption. The page uses the three retained brand colors intentionally and demonstrates typography, whitespace and asymmetry without generic card containers. No network inquiry, sale claim, external asset, service, new dependency or deployment is added. Build and data tests pass; visual/interaction results are recorded separately by the evaluator.

### Approval handoff to evaluator

1. Approve and build ES-1.
2. Amend ES-1, identifying the changes.
3. Revisit the direction while retaining the settled brand and technical constraints.

This was the initial approval handoff. The actual approval was subsequently received and is quoted above; implementation followed that approval.

## Preservation hashes (SHA-256 before implementation)

| File | Hash |
| --- | --- |
| BRAND.md | C56BE7EE1269434978B690BE2AC96529B0F85D82CC3A435A32239C9B864EA43B |
| package.json | A88EAA8D0EFEBBBF63FF5B4C520E0340781B2710F120555C108D1E9ACF5B41F2 |
| package-lock.json | 072F78DCA699568CEAE133C26CE0D3BA020DE89C0EAD65E7CE28B2BEA558797F |
| index.html | C305E10846375350E410EABD10D4B0C6FD9F8110C45DF72283860E0E55A72384 |
| src/App.jsx | F831EF7C0C4BC29AE9BB4DFAFA9465E35A634EC2399D40512F6BF8B3FAD091A2 |
| src/components/ProductDialog.jsx | 8FA8956BDFA04061FE81DE83A2FA1A1816B1E248068C003567C0A0F3A82F7AF0 |
| src/data.js | 96F6247C99D033BC8EDF0AA717C0DB0667FD885B6EB6DA89C60720CE56766D5E |
| src/main.jsx | 1F72C3F64A2B8DDD7E76262255A6BEB45E0D59E80012066AC92E73CDD81F38C1 |
| src/styles.css | C9CFD69FA21592D0DF110F796779B21A0E02420D4A3BC06BC3D78C4457E255CC |
| tests/catalog.test.js | 349B38D4B0B06B39D3556D0E7C6F61ABC5923899DB5BF5EA738C5F1552383360 |
| public/care.html | 2A5309CBE05CA1AB9FDEA5F3451CA32B1E80A984CFA067A41FB4FF3A3AB3C044 |
| public/drift.svg | CA4D6A5B42A3FEF1A52F023450AA9CADFF303BF3C6E470A6833C26FE80893806 |
| public/tide.svg | 03837F97C0B6EA128CC15159AAF2D89BDA917945C41B3827E726BFFE0C4F8A60 |
| public/arc.svg | CBFFE7D3959F8911592A73112EAA166B33C381A62CB6E98A99F2EBC38FEC2C35 |

## Implementation and current technical sources

- Read the current [Modern Web Guidance entry](https://github.com/GoogleChrome/modern-web-guidance) through the public repository. Followed its linked discovery list to the relevant guides below; did not install the skill/CLI, vendor the repository, run a modernization scan, or add a project dependency.
- [CSS Layouts and Responsive Design](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/css-layout.md): used flex with wrapping for navigation/filters, grid with flexible tracks for the gallery, DOM-order presentation without dense packing/reordering, block images with reserved aspect ratio, and native modal styling. No new overlay primitive was needed.
- [Fluid Scaling](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/fluid-scaling.md): reviewed fluid sizing, bounds, zoom considerations and fallbacks. Chose rem-bounded viewport scaling for this page-wide composition; no reusable container-specific component needed container queries.
- Current compatibility entries consulted: [min/max/clamp](https://web-platform-dx.github.io/web-features-explorer/features/min-max-clamp/), [focus-visible](https://web-platform-dx.github.io/web-features-explorer/features/focus-visible/), [dialog](https://web-platform-dx.github.io/web-features-explorer/features/dialog/), [lazy-loading images](https://web-platform-dx.github.io/web-features-explorer/features/loading-lazy/). These entries report support across the four target engine families; actual project browser execution remains a separate unverified item. Lazy image loading is an optimization with eager loading as the non-supporting fallback.
- `src/App.jsx`: retained state/filter function, supplied content, destinations and original ProductDialog integration. Added semantic visual hooks and supplied images with dimensions, fictional-illustration alt text and native loading attributes. No new visible copy or behavior.
- `src/styles.css`: retained the three brand colors; implemented system-serif/sans hierarchy, ruled header/section heading, staggered broad/narrow gallery, contiguous captions/actions, a single-column mobile composition and consistent original-dialog styling. Uses rem-based type/controls, visible focus and no animations/transitions. Reduced-motion users therefore receive the same static experience without a special animation override.
- An initial patch attempt was rejected for duplicate delete/add targets and applied no changes. A subsequent targeted update succeeded. No unauthorized file was modified by that failed attempt.

## Checks after approved implementation

- `npm test`: PASS, 2 tests, 0 failures.
- `npm run build`: PASS, 26 transformed modules, generated CSS 6.63 kB and JS 196.92 kB before gzip. Refreshed production files for the evaluator.
- Compared SHA-256 hashes for all 14 baseline files: exactly `src/App.jsx` and `src/styles.css` changed. The 12 protected files in the table are byte-for-byte preserved, including data, native dialog component, care page, manifests/lockfile, tests and SVGs.
- Source scan found no `http(s)` URL, fetch/XMLHttpRequest, remote font/import, animation or transition in `src/`. The scan exits 1 because it found no matches; the independent hash comparison completed successfully.
- Brand text/background contrast calculated directly from the hexadecimal colors: ink on paper 12.27:1; ink on accent 12.17:1. Rendered contrast/focus placement still belongs to browser QA.
- No server started, no inquiry submitted to a service, no publication, no skill modification and no dependency install.
- Remaining evaluator checks: large/narrow screenshots and qualitative comparison with ES-1; horizontal overflow/text wrapping/full SVG visibility; all/vessels/lighting outcomes and selected states; Collection/Studio/Care/home navigation; keyboard focus and dialog trapping/restoration, Close/Escape, required-email validation, honest prepared status and state reset after reopening; reduced-motion emulation and console/network review. Cross-engine QA beyond Chromium remains unperformed unless the evaluator reports otherwise.

## Changed files and compliance at implementation handoff

- Authored/changed: `src/App.jsx`, `src/styles.css`, `EVALUATION.md`. Generated `dist/index.html` and hashed CSS/JS assets refreshed by the build; supplied public assets copied unchanged.
- Initial request/delivered: ES-1 inspected, presented and explicitly approved before implementing the scoped local gallery redesign. Automated checks complete; evaluator owns remaining browser QA.
- Validated evolutions: none beyond the original request; ES-1 approval and documentation-access clarification are quoted above.
- Unvalidated discrepancies: none observed after source/hash inspection. Work remains local and unpublished.
- Verification/limitations: two data tests and production build pass; protected sources preserved. Browser interactions, visual quality and non-Chromium behavior are not established by these checks.
