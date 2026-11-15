# Fieldwork — Human Taste evaluation

Stage: approved F1 implemented locally; evaluator browser checks/screenshots reported; narrow footer-label edit complete.

This record describes an explicitly scripted evaluation. All quoted user answers and approval below were supplied by the parent evaluator as scripted inputs, not claimed as unscripted end-user feedback.

## Initial request and boundaries

Create an English website for Fieldwork, a fictional independent city walking club helping adults in Lyon choose a self-guided walk. Browse, filter by effort, and read route details. Fixture data:

| Walk | Distance | Time | Effort |
| --- | --- | --- | --- |
| River Loop | 4 km | 70 minutes | easy |
| Hillside Steps | 3 km | 65 minutes | steep |
| Market Morning | 2 km | 40 minutes | easy |

Each needs a short description and route highlights. Label the experience an illustrative demo, not real walking advice. No accounts, payments, bookings, analytics, backend, photography, testimonials, real-world route claims, publication, or remote services. Ordinary static hosting; current evergreen desktop/mobile browsers. No existing project or brand assets. User likes nature field guides and useful maps, dislikes generic feature grids, wants detailed collaboration on key choices and delegates minor details.

Evaluator instructions: work only in this isolated directory; use concise numbered text questions to evaluator, never actual-user question tools; stop after each interview response; do not launch servers after implementation; supply local evaluator QA commands.

## Starting-point inspection

- Inspected this directory and its two immediate ancestors. The isolated project directory was empty: no source, manifest, lockfile, assets, routes, styles, tests, or deployment configuration. Its parent contains separate `existing-site` and `screenshots` trial directories; these are outside this trial's implementation scope. Combined with the explicit new-project instruction, this supports a genuinely new project rather than a rebuild of an existing application.
- Checked applicable ancestor `AGENTS.md` paths. Only the user-level `.codex/AGENTS.md` was present; it was empty. No additional project rules found. Machine-specific paths are normalized here for publication.
- Read Human Taste `SKILL.md`, `references/decision-and-brief.md`, and `references/section-interview.md`; also read anti-gold-plating `SKILL.md`.
- Selected and implemented technical approach following F1 approval: buildless semantic HTML/CSS and small local JavaScript; no dependencies or services. Reason: three fixed entries and local filtering/details fit ordinary static hosting. The initial recommendation was presented before implementation; current guidance was consulted after approval as recorded below.

## Explicit choices and delegation

- User participation: detailed collaboration on key choices; minor details delegated.
- User factual scope, metrics, exclusions, audience, language, hosting and browsers: fixed as above.
- Selected creative direction: Pocket field notebook, from the actual scripted answer below. Civic walking atlas rejected for this trial.
- Delegated copy: agent may draft explicitly fictional descriptions/highlights only, with no real navigational claims. Exact drafts remain subject to brief review.
- Delegated minor header decision: small Fieldwork wordmark plus visible `Walks` and `Demo note` anchor links, non-sticky, no collapsed menu. This uses little mobile space for a three-route site and introduces no new destination or feature; retain it for final brief review.
- Selected opening: notebook chapter, exact headline below. Selected main content: ruled comparison index.
- User revision: muted clay is superseded by a small yellow trail-marker accent; warm paper and dark forest remain.
- Delegated remaining minor interaction and footer details. User explicitly excludes proof, contact and signup sections; footer explains the illustrative nature.
- Concrete brief F1 below was explicitly approved by the scripted reply recorded after the harness event.

## First interview round — answered

1. Creative direction:
   - **A. Pocket field notebook (recommended):** warm paper, dark forest text, muted clay route accents; expressive readable serif headings with system sans labels and aligned numerals; generous margins around compact ruled route entries; schematic line drawings, no photography; calm practical copy such as “Three ways to spend a morning on foot.” No ornamental motion. Fits the field-guide preference; less map-dominant than B.
   - **B. Civic walking atlas:** pale cool paper, near-black type, deep blue route lines and one ochre marker accent; sturdy sans headings, smaller serif notes, strong numbered hierarchy; a large illustrative route diagram paired with a compact index, denser spatial comparison; direct copy such as “Choose your next city walk.” No ornamental motion. Fits map-first browsing; diagrams occupy more of the initial screen and are explicitly non-geographic.
   - Custom answer, “Choose for me,” or “Surprise me” allowed. No answer inferred from recommendation.
2. Content authority:
   - **A. Agent drafts clearly fictional highlights** (recommended for the illustrative demo), based only on the walk names and effort/metrics; no named Lyon locations, turn-by-turn instructions, accessibility assertions, or real geography. Drafts will appear in the concrete brief for approval. Example proposed fictional motifs: a drawn water bend, a sequence of steps, a market-square pause.
   - **B. Evaluator supplies exact descriptions and highlights**; dependent copy remains pending until supplied.
   - Custom factual constraints welcome.

Actual scripted user answer: **“1A, 2A. I choose Pocket field notebook and delegate explicitly fictional descriptions/highlights to you. Use no real navigational claims.”** This selects the direction and delegates draft content; it does not approve implementation.

## Second interview round — answered

Proposed page sequence: shared quiet header → opening/demo label → effort filter and walk index → route details in a treatment still to be chosen → short demo footer. No trust or conversion section: requested exclusions and lack of real proof make neither appropriate. The route-selection action is the site's core task.

1. Opening purpose: identify this particular guide and bring visitors to comparison.
   - **A. Compact practical opening (recommended):** headline “Three city walks, at your pace.” Supporting line “Compare three fictional walks by distance, time and effort.” A prominent `Illustrative demo — not real walking advice` notice; the walk index follows immediately. On mobile the opening stays short so route names arrive early. This favors choosing a walk over atmosphere.
   - **B. Notebook chapter opening:** headline “A small field guide to time on foot.” Same factual supporting line and notice, with a larger abstract line illustration before the index. More immersive, but adds scrolling before comparison, especially on mobile.
2. Walk-index purpose: compare the fixed three walks and open the chosen details. Both options use a single-select `All / Easy / Steep` effort filter, visible result count, keyboard-operable controls, and local behavior; no account or service.
   - **A. Ruled comparison index (recommended):** three compact entries with route number/name, aligned distance/time/effort, one short description and `Read route` link. Small line motifs support the entries without enclosing them in cards. Mobile puts metrics below each name. Best for scanning the supplied metrics.
   - **B. Three route chapters:** each entry gets a larger schematic, prose and metrics in a horizontal composition; mobile places its drawing after the name and metrics. Gives each walk more narrative presence, with more scrolling and less simultaneous comparison.
   - Custom answer or delegation allowed for either question.

Actual scripted user answer: **“1B and 2A. Keep the notebook opening and ruled comparison index. One revision: replace the muted clay accent with a small yellow trail-marker accent; keep warm paper and dark forest. Choose the remaining minor interaction and footer details for me. No proof section or contact/signup; the footer should explain the illustrative nature. Present the complete concrete brief for approval before creating implementation files.”**

Consequences: the opening keeps its larger abstract illustration and extra breathing room; the index remains compact and comparable. Yellow replaces clay everywhere; there is no competing warm accent. Native expandable route sheets and footer copy below are agent proposals under the explicit remaining-interaction/footer delegation, presented for F1 review.

## Concrete brief F1 — approved implementation contract

The following is the brief presented for review. Its originally pending checks and approval request are historical; actual approval and completed source verification are recorded after it.

### Purpose and scope

One static English page for Fieldwork, a fictional independent city walking club for adults in Lyon. Primary task: compare three illustrative walks, filter by effort, and read route details. No accounts, payments, bookings, analytics, backend, photography, testimonials, real route claims, proof section, contact/signup, or publication.

### Direction and system

User-selected Pocket field notebook: a deliberate field-guide composition with an illustrated chapter opening and ruled route index, rather than repeated boxed feature cards. Warm paper `#F3F0E4`; dark forest `#18382D` for text and primary lines; secondary text `#516057`; small yellow trail-marker accent `#E4B932`. Yellow marks route numbers and selected controls, never body text on paper. Calculated contrast: forest/paper 11.20:1, secondary/paper 5.82:1, forest/yellow 6.87:1. These are palette calculations, not rendered accessibility verification.

Delegated type choice: system Georgia/Times/serif for expressive headings and route names; system sans-serif for navigation, descriptions and controls; tabular numerals for metrics. No remote fonts or assets, no font download or unresolved font licensing. Maximum content width about 1180 px, broad outer margins, fine ruled separators and a narrow annotation column. Headline about 72–84 px on large screens and 44–52 px on small screens, with readable line length. Body text at least 16 px. No ornamental animation, parallax, gradients, pills, shadowed cards, or scroll reveals.

### Ordered page treatment

1. **Header:** small Fieldwork wordmark, `Walks` anchor and `Demo note` anchor, visible at desktop and mobile widths. Non-sticky; no collapsed menu. Quiet navigation preserves space for the guide.
2. **Chapter opening:** eyebrow `An illustrative walking club · Lyon`; headline **“A small field guide to time on foot.”** Supporting line **“Compare three fictional walks by distance, time and effort.”** Prominent **“Illustrative demo — not real walking advice.”** An abstract, original inline SVG with line-and-marker motifs sits alongside the headline on desktop, below the text on mobile. Caption **“An imagined route study. No real geography.”** No giant call-to-action or extra hero section; a simple `Explore the walks` anchor leads to the index.
3. **Walk index:** heading `Choose a walk`; a compact `All / Easy / Steep` single-select effort control and visible result count. All is the initial state. Three numbered ruled entries show name, description and aligned distance/time/effort. On mobile, metrics move below the name without horizontal scrolling; filters remain visible and wrap if necessary. Name and metrics remain available while filtering.
4. **Route details:** each entry contains a native expandable route sheet, triggered by `Read route`. It expands in place; no new page, overlay or network request. The trigger reflects open/closed state. Multiple routes may be open for comparison. Each sheet pairs an original non-geographic SVG route sketch with a numbered list of three fictional highlights. Sketch caption: `Fictional route sketch · not to scale`. No compass, street names, coordinates, geolocation or turn-by-turn instructions. Native disclosure semantics provide keyboard operation; content is present in HTML. This is the proposed remaining interaction choice, subject to F1 approval.
5. **Footer/demo note:** **“Fieldwork is an illustrative website for a fictional walking club. Walk names, distances, times, effort levels and route sketches are demo content. They do not describe real routes in Lyon and must not be used for navigation or walking advice.”** Simple `Back to top` anchor. No evidence, contact, signup, social or invented legal links.

### Draft route copy for approval

All metrics are user-supplied fixture data, not verified walking information. All descriptions and highlights below are explicitly fictional drafts under the user's delegation.

**01 River Loop — 4 km / 70 minutes / easy**

Description: “A fictional riverside circuit, drawn around a broad water bend. An easy route sketch that returns to its starting mark.”

Highlights: **Water bend** — “The opening curve of this imagined loop.” **Riverside line** — “A long, simple stretch in the drawing.” **Return arc** — “The sketch closes back on its starting mark.”

**02 Hillside Steps — 3 km / 65 minutes / steep**

Description: “A fictional route shaped by a steep staircase and an upper crossing. The steeper option in this three-walk collection.”

Highlights: **Step sequence** — “Close-spaced marks suggest the climb.” **Upper crossing** — “A linking line connects the upper portion of the sketch.” **Final bend** — “A curve completes the illustrative route.”

**03 Market Morning — 2 km / 40 minutes / easy**

Description: “A fictional short circuit around an imagined market square. The easy, 40-minute entry in this three-walk collection.”

Highlights: **Square edge** — “The drawing follows one side of an invented square.” **Stall row** — “A row of small marks suggests a market.” **Return corner** — “The sketch turns back toward its starting mark.”

### Responsive, interaction and accessibility contract

Semantic header/main/footer, a single h1 and ordered heading levels, skip link, visible dark focus outlines, sufficient text contrast, generously spaced labels and at least 44 px control targets. Do not encode effort or selection with color alone. SVG sketches have concise accessible titles/descriptions and repeat no essential information available only visually; decorative opening marks are hidden from assistive technology while their caption remains text. No hover-dependent content. No animation, including for reduced-motion users.

Filtering is local enhancement: expected visible counts are All=3, Easy=2, Steep=1, with a polite result-count announcement and correctly exposed radio selection. Hidden routes leave the keyboard reading order. Switching filters preserves a route's native open state. No empty state is reachable with this fixed single-select dataset. Without JavaScript, show all three entries and keep native route details working; hide the unavailable filter controls and show a short explanatory note. There are no loading/success/network-error states because no network action exists.

### Technical approach and handoff commands

Inspected new empty project, no existing application to migrate. Selected recommendation for F1 approval: `index.html`, `styles.css`, `script.js`, and a concise `README.md`, alongside this requested decision record. Semantic buildless HTML/CSS, native `details`/`summary`, local JavaScript for filtering only, inline SVG. No package manager, dependencies, build step, CMS, database, remote fonts, services or installation. All paths relative for ordinary static hosting at root or subdirectory. Content is edited directly in HTML.

Browser target: current evergreen desktop/mobile browsers. Use established layout and native disclosure features; avoid making newer CSS capabilities a requirement. At implementation time consult current GoogleChrome/modern-web-guidance entry guidance and relevant primary documentation, then record actual sources and any access limitations. Current browser compatibility has not yet been verified.

Planned checks: JavaScript syntax via `node --check script.js`; static content/asset/link and fixture checks; evaluator visual/interaction checks at representative desktop/mobile widths, keyboard access, filtering, disclosure states and horizontal overflow. Do not launch a server in this trial. Evaluator command from this directory: `python -m http.server 4173 --bind 127.0.0.1`; open `http://127.0.0.1:4173/`. No build/setup command is needed. Evaluator browser QA is a pending independent step, not a completed check.

### Dependencies and acceptance

No missing essential facts or assets under the explicit fictional-content delegation. Copy is draft until F1 approval; metrics remain fixture content even after approval. No credential, service, route verification or external asset is required. No publication authorization exists.

Observable acceptance: first screen identifies this fictional walking guide and displays its demo warning; chosen chapter opening and yellow markers remain visible; all supplied names/metrics are exact; effort filtering returns 3/2/1 entries; all three detail sheets and highlights work; clear schematic disclaimers remain adjacent to drawings; mobile has no horizontal overflow; keyboard users can operate controls and disclosures with visible focus; JavaScript failure preserves all route content and details; no excluded section/service/claim is introduced. Visual taste and browser results will be reported separately from static checks.

Approval handoff: **1. Approve F1 and build; 2. Amend F1; 3. Revisit a direction.** Await an actual unambiguous scripted reply. Neither prior creation request nor creative delegation approves this concrete brief.

### Harness acknowledgment event

Evaluator reported: `{"accepted":true}`, with **no user option or text response submitted**. This is an interface acknowledgment only, not an actual answer. F1 remains awaiting explicit approval. No implementation files, dependencies or server were created or started in response.

### Explicit scripted approval and implementation

Actual subsequent scripted user approval: **“I approve Brief F1 and authorize building its described local demo now.”** The evaluator instructed implementation, current technical guidance, meaningful source checks, no server launch, and honest reporting that this is a scripted evaluation. This explicit approval, rather than the earlier acknowledgment, authorized creating implementation files.

Implemented only `index.html`, `styles.css`, `script.js`, and `README.md` beside this requested record. The notebook chapter opening, ruled index, yellow markers, exact fixture metrics, approved fictional copy, in-place native route sheets and illustrative footer follow F1. Route headings sit outside `summary` so they remain discoverable by heading navigation; a small `Read route` / `Close route` disclosure follows each entry. Filtering uses radios and local `hidden` state; all route content remains in HTML. No server, package install, remote runtime dependency, submission, publication or deployment occurred. No skill-repository files were modified.

### Current technical references actually consulted

On 2026-11-15, opened the current [GoogleChrome/modern-web-guidance entry](https://github.com/GoogleChrome/modern-web-guidance), then used its current linked guide discovery rather than guessed guide IDs or a fixed assumed tree. Read the linked [CSS architecture](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/css.md), [CSS layout](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/css/css-layout.md) and [accordion](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/guides/ui-components/accordion.md) references. Read [MDN details](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details) and the Web Features compatibility entries for [details](https://web-platform-dx.github.io/web-features-explorer/features/details/) and [focus-visible](https://web-platform-dx.github.io/web-features-explorer/features/focus-visible/).

Applied guidance: CSS custom properties for the small system; content-aware flex/grid and flexible tracks; native non-exclusive disclosures without custom keyboard code; no heading inside `summary`; indicator next to its label; no advanced animation or experimental layout requirement. Compatibility references identify the selected native disclosure and focus-visible primitives as widely available; this is documentation evidence, not completed cross-browser QA. Guidance browsing is read-only reference research and introduced no runtime external asset or service. No guidance repo was installed, vendored, or broadly scanned.

### Source checks performed

- `node --check script.js`: passed.
- Python `HTMLParser` source audit: passed exact three names/distances/times/efforts and named highlights, unique IDs, existing local asset and anchor targets, valid ARIA ID references, three native disclosures, three labeled SVG route sketches, single h1, headings outside summaries, initially hidden filter enhancement, and initial All radio selection.
- Static runtime-reference audit: site files contain no remote URLs, CSS imports/URLs, fetch calls, storage, photography/media, transition or animation declarations. CSS brace-balance smoke check passed; it is not a full CSS validator.
- Executed the actual `script.js` in Node `vm` with a minimal DOM stub: enhancement initialization, All/Easy/Steep/All route visibility and counts 3/2/1/3, singular result wording, ignored unrelated events, prevented form navigation, and absent-element guard passed. This tests the implemented filtering logic, not native DOM, focus behavior, layout, or accessibility APIs. The open-state property smoke check is not browser disclosure verification.
- Palette contrast calculations performed during briefing: forest/paper 11.20:1, secondary/paper 5.82:1, forest/yellow 6.87:1. Actual rendered combinations and accessibility remain for evaluator review.

Evaluator selectors: `#effort-filter`; `input[name="effort"][value="all"]`, `[value="easy"]`, `[value="steep"]`; `#result-count`; `#river-loop`, `#hillside-steps`, `#market-morning`; `.route-details > summary` with `Read route` / `Close route` labels.

### Browser handoff and limits

No server was launched. Evaluator command from this isolated project directory: `python -m http.server 4173 --bind 127.0.0.1`; open `http://127.0.0.1:4173/`. No setup/build command is needed. `README.md` lists representative desktop/mobile widths and keyboard, radio/disclosure, no-JavaScript, overflow, screen-reader, text-zoom, forced-colors, reduced-motion and screenshot checks.

Parent evaluator owns browser interaction/accessibility tests and real desktop/mobile screenshot capture. At this handoff the implementing agent has not viewed a rendered page, taken screenshots, tested a screen reader, or established cross-browser behavior. No qualitative rendered taste score or visual pass is claimed. Any evaluator finding within F1 can be corrected without reopening approved creative choices.

## Pending work

Parent evaluator is separately inspecting four elements for which one axe contrast rule returned incomplete results. No contrast defect or pass is inferred from that incomplete result. No unresolved essential content, external assets, credentials or services. No unrelated contrast changes are authorized by the narrow copy request.

## Subsequent narrow-copy test — completed

Scripted user request: **“Change only the footer link label from Back to top to Return to top. Keep the approved design and every other behavior.”**

Actual agent response: **“I’ll change only the footer link text to ‘Return to top,’ keeping its destination and every other behavior. This is a narrow copy edit, so the approved design needs no new interview.”** No creative interview, stack proposal, new approval gate, or broad modernization/review was triggered.

Exact implementation change: `index.html`, footer anchor at line 168, visible label `Back to top` → `Return to top`. Preserved its `href="#top"`, class, decorative arrow, and surrounding markup. This explicit narrow instruction supersedes only the footer label in F1; the header wordmark's accessible label and every other page behavior stay as before. `EVALUATION.md` was updated solely as requested to record the test and verification. No other file was changed.

Verification: computed the SHA-256 of the expected original HTML with exactly that single byte-string replacement before editing, then compared it with the actual edited file: matched. SHA-256 hashes for `styles.css`, `script.js` and `README.md` were unchanged. No new test file, dependency or server. No repeated JavaScript test was needed for a pure label edit.

Parent-reported browser checks of the preceding F1 build: effort filters, native keyboard disclosures, no-JavaScript fallback, all four viewport overflow checks, visible focus and absence of runtime errors passed; real desktop/mobile screenshots captured. These are evaluator-reported results, not tests or screenshots performed by this implementing agent. One axe contrast rule returned incomplete results for four elements; parent inspection remains separate and pending. The label change has source verification; a browser re-check of the edited label has not been claimed.

Scope report for this narrow request: delivered the exact footer-label replacement and requested record; validated evolution is the explicit label change only; no unvalidated discrepancies observed. Static preservation verification passed; browser checks above belong to the preceding build and parent evaluator.

## Scope verification

- Initial request / delivered: inspection, scripted interview and approval record, approved F1 local static website, technical-source consultation, source checks and evaluator QA commands delivered. Browser QA and screenshots remain pending with parent evaluator.
- Validated evolutions: yellow accent replaces proposed clay, explicitly requested in second-round answer; no scope extension.
- Unvalidated discrepancies: none observed after comparing the actual five local files with F1. No runtime services or excluded sections introduced; nothing published or deployed.
- Verification / limitations: filesystem/instructions, contrast calculations, JavaScript syntax, HTML fixture/reference audit, and actual filtering logic under a DOM stub checked. Current primary technical references consulted. Native browser behavior, rendered visual quality, mobile overflow, screen-reader access and screenshots remain unverified by this implementing agent. No server was started.
