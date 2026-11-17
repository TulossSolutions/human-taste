# Visual refinement

Read this for an existing-screen refinement request, when a built design needs a corrective pass, or when visual references would resolve a specific decision. Improve the actual visitor experience within the agreed scope. Preserve the project's approved direction instead of substituting a signature look.

## Establish scope and capture the baseline

Inspect the existing project and decision record. Identify the visitor task, primary action, existing brand/tokens, required copy, destinations, working interactions, stack, and checks that must survive. Include sign-in, secondary actions, and utility links when they serve a real journey; apparent clutter is not permission to remove functionality.

Reuse an approved brief or a concrete, bounded correction request when it covers the work. For an open-ended "refine this design" request without such approval, present a compact refinement brief: the screen/task, what stays fixed, observed issues, proposed passes and rationale, any reference use, and observable acceptance criteria. Obtain explicit approval before changing the implementation. Ask only about missing facts or material tradeoffs, not the entire new-site interview. A small requested fix remains small.

Before changing source, capture the rendered baseline at representative desktop and mobile sizes where tools permit. Record URL/route, viewport, zoom/device scale, content/data, scroll position, and relevant UI state. Keep these conditions comparable at checkpoints; capture open menus, forms, or dialogs when those states are affected. Note existing failures separately from regressions introduced by the work. Use available checks to establish the functional baseline.

If rendering tools are unavailable, say so and use supplied captures and source inspection conservatively. Do not claim rendered validation or fabricate before/after evidence. A supplied screenshot cannot verify behavior, responsive reflow, or hidden states on its own.

## Study a reference when it resolves a decision

Use a small relevant set of user-supplied examples, accessible public pages, or an already connected reference service. Search by the actual need, such as a readable dense navigation or a clearly labeled comparison, rather than chasing an unrelated fashionable site. Skip research when the existing brief or a straightforward correction already resolves the issue.

For each reference actually used, record:

- Source and the relevant section or interaction; distinguish observed behavior from inference.
- The useful principle: hierarchy, alignment, rhythm, image crop, contrast, transition purpose, or state feedback.
- Why it fits this project's audience/content and which parts should not transfer.
- The proposed adaptation using this project's own type, content, assets, and interaction conventions.

Inspect the interaction's state sequence where possible, not only a still image. A menu, for example, needs its trigger, open/close behavior, focus, keyboard/touch operation, and narrow-screen treatment understood before adaptation. When behavior cannot be observed, identify the gap and choose a conservative implementation rather than claiming fidelity.

Combine compatible principles into one direction. Do not copy distinctive branding, unsupported claims, proprietary assets, or code without appropriate permission/license. Inspect licensed example code before adapting it; check framework fit, accessibility, loading cost, and dependencies. Code reuse is optional, not the reason to add a feature. Keep source attribution where required.

Details or another MCP can be an optional reference source if already available and authorized. Never require a paid account, install/connect a service automatically, or claim access to a library that was not available. The workflow must remain usable with supplied/public references or without external inspiration research.

## Apply ordered correction passes

Start with the earliest material problem. Use the sequence below as a reasoning order, not a requirement to modify every category. Fix one issue or a tightly coupled set, then inspect the result before moving on. Preserve unaffected work; avoid endless one-pixel iterations and unrelated improvements.

| Pass | Diagnose | Make an intentional correction |
| --- | --- | --- |
| Content and clutter | Does the screen communicate its specific offering and next action? Are claims credible? Which elements compete without helping? | Improve unclear draft copy, remove genuinely redundant decoration, or establish action hierarchy. Preserve required copy/actions and seek review before material content or functionality changes. |
| Composition, spacing, alignment | Are related elements grouped? Do margins and edges form a readable structure? Is mobile composition intentional? | Adjust a coherent spacing/grid relationship, reading order, or breakpoint behavior. Keep captions/actions attached to their content and prevent overflow; do not make everything the same size or wrap everything in cards. |
| Typography | Do hierarchy, size, measure, line breaks, weight, and rhythm fit the content? | Correct the relevant type relationship before adding another font. Preserve brand rules, readability, language coverage, fallbacks, and loading constraints. |
| Imagery | Does an image explain something? Are source, rights, crop, resolution, and relationship to text appropriate? | Reuse or adapt approved assets, improve crop/placement, or choose an honest text-led treatment. Do not invent evidence or add dramatic imagery merely to fill space. |
| Interaction polish | Does an existing or approved interaction give clear feedback and remain usable? Would motion communicate anything useful? | Refine relevant states and feedback. Add a new effect only when justified within scope; the correct treatment may be no motion. |

For every material correction, retain a concise record: **observed issue → change → reason → verification → retained/reverted/pending**. Explain audience/content consequences rather than saying the result looks more human or modern. Record rejected refinements and their reasons so they do not silently return later; keep preferences scoped to this project instead of inventing universal rules.

In true-surprise mode, select references and resolve aesthetic details internally, then present one coherent result and its rationale. Do not add competing-direction or section-by-section questionnaires. This does not replace essential factual clarification or approval of a new/materially changed brief.

## Define interaction behavior before embellishment

When motion or interaction is affected, specify the triggering event, states, timing/purpose, pointer and keyboard/touch behavior, focus, dismissal/recovery where applicable, and reduced-motion alternative. Preserve content access and task completion without decorative animation. An intro reveal must not trap the visitor or delay access merely to create a dramatic screenshot.

Prefer appropriate native capabilities and the project's existing tooling. Do not introduce an animation library for a small effect without a concrete need. If a performance benefit is claimed, measure it under stated conditions; an attractive recording is not performance evidence. Check relevant loading/response behavior and avoid introducing layout shifts or blocking interaction.

## Compare and stop

Capture checkpoints after meaningful changes, using the baseline conditions. Where useful, include a concise pass label so the user can see what changed. Do not create or present a long sequence of nearly identical screenshots. Keep the evidence outside shipped product UI and avoid disclosing sensitive account data in captures.

Compare desktop and mobile composition with the brief and baseline. Exercise affected navigation/actions, keyboard/focus, forms and their states, overflow, asset loading, and reduced-motion behavior. Separate automated accessibility results, manual interaction checks, and aesthetic judgment. Report tools, environments, and unverified areas honestly; do not turn a screenshot difference into a numerical taste score.

Retain a change only when it addresses the observed issue without weakening the brief or introducing a regression. Revert an unsuccessful experimental change carefully, preserving user work. Surface material direction/scope changes for approval; do not ask for permission again for ordinary scoped corrections.

Stop when the agreed acceptance criteria are met and relevant checks pass. Also stop the affected pass if it requires missing facts/assets/access, a scope change, or further changes whose benefit cannot be justified. Do not keep modifying an acceptable design merely because more styles or effects are possible.

Deliver the issue/change/rationale record, comparable before/after evidence where captured, checks and limitations, accepted/rejected refinements, and remaining dependencies. A refinement request does not authorize new services, publication, or deployment.
