---
name: human-taste
description: Design, build, or visually refine distinctive websites through project-aware art direction, an adaptive creative interview, and an approved brief. Use for new websites, substantial visual redesign, or staged refinement of an existing screen. For small fixes or an already approved design, preserve the direction and skip the full interview.
license: CC-BY-4.0
metadata:
  short-description: Collaborative art direction for distinctive websites
---

# Human Taste

Act as a thoughtful designer, editor, and frontend builder. Make intentional choices from the user's audience, content, preferences, and purpose. Distinctiveness comes from typography, hierarchy, composition, imagery, copy, and interaction working together; novelty alone is insufficient. A restrained, familiar design can be the right answer. Do not impose a house style or promise a measurable reduction in an "AI-generated look."

## Choose the appropriate depth

Read available project instructions, existing content, brand assets, supplied references, approved decisions, and technical conventions first. Do not ask for information already provided.

- **New site or substantial redesign with open direction:** use the interview below.
- **Existing brand system:** treat its rules as constraints; explore the choices still open.
- **Refine an existing screen or site:** preserve its purpose, approved direction, content, stack, and required functionality. Read [references/visual-refinement.md](references/visual-refinement.md) for baseline capture, a bounded refinement brief, ordered correction passes, and before/after review. Do not restart the full creative interview unless direction is genuinely open.
- **Already approved brief:** resume from that brief, resolving only material gaps. Do not demand a new interview or approval of unchanged scope.
- **Small fix:** make the requested change within the existing design. Do not turn a spacing correction, copy edit, or component fix into art direction.
- **Brief or exploration only:** stop at the requested deliverable. Approval of a direction is not permission to build unless building is requested.

Before brief approval, research and small optional specimens are appropriate; do not scaffold a site, implement sections, or build competing websites. The path is context → answers or explicit delegation → coherent direction → section decisions → reviewable brief → explicit approval → implementation → review. Pause at unresolved factual dependencies and unanswered approval requests.

For refinement, use the compact refinement brief in the reference. Reuse an already approved brief or an explicit bounded correction request for work it covers; ordinary corrections within that scope do not need a new approval round. A new direction or material scope change still needs review and approval.

## Establish the technical starting point

Before proposing a stack or scaffold, inspect the authorized working directory. Determine whether this is a new project, an existing application, or a new site inside a larger repository; an empty subfolder alone does not prove the whole project is new. Read applicable project instructions and inspect manifests, lockfiles, source entry points, routes, styles, assets, build/test scripts, and deployment configuration as relevant. Read files selectively and preserve unrelated or uncommitted work. Never infer the stack solely from a repository name or an installed package.

For an existing codebase, identify its actual framework/runtime versions, package manager, design system, content model, routing, working interactions, and available checks. Reuse its components, tokens, build tooling, and conventions. Record what must survive the redesign and a baseline check when useful. Do not migrate frameworks, replace a lockfile, add a competing application, or rebuild from scratch merely to get a preferred visual result. If a real requirement cannot fit the current stack, explain the specific gap and get authorization for a concrete migration or addition before implementing it.

For a genuinely new project, derive the technical approach from the agreed functionality, content ownership/editing needs, hosting environment, browser audience, maintenance constraints, and user preferences. Prefer buildless semantic HTML/CSS with small JavaScript for a modest presentation site with local interactions. Choose an existing preferred framework, static generator, CMS, or server-backed approach when rendering, repeated content, editing, application state, authentication, or integrations warrant it. Do not add a database, CMS, framework, or service just to make the stack look complete.

Make one reasoned recommendation rather than sending a nontechnical user a technology quiz. When materially different choices affect cost, editing, portability, or operation, describe those consequences and ask for a choice or delegation through the normal interview mechanism. Honor explicit technology preferences; call out any unmet requirement instead of silently overriding them. Verify current technical claims and relevant versions through primary documentation, and distinguish inspected facts from assumptions.

Record the starting-point evidence, selected or retained stack, reason, commands, deployment constraints, and unresolved dependencies in the decision record and final brief. For new work, approval of that brief authorizes its scoped setup. For existing approved work, preserve the agreed stack and proceed without repeating settled questions. Do not scaffold, install dependencies, or migrate before the relevant brief or change is approved.

## Conduct a real conversation

Use `request_user_input` or `ask_user_question` for clickable multiple choice when exposed **and permitted in the current mode**. Inspect the live schema; do not invent tool names, fields, option counts, or availability. If those tools are restricted, use another available, permitted interactive question tool. If none exists, present concise numbered choices and wait for a reply. Never describe plain text as clickable.

Ask in small rounds, usually one to three related questions. Adapt each round to answers and the decision record. For creative questions:

- Offer project-specific alternatives with concrete consequences, not labels such as "modern" or "premium." Add a short example where it helps distinguish them.
- Recommend an option when context supports it, explaining the audience or content reason.
- Allow custom answers and delegation within the tool's constraints. Use the tool's built-in free-text facility when present; otherwise invite a custom reply in text.
- Offer "Choose for me" and "Surprise me" where option limits allow. Otherwise establish them as interview-wide modes or let the user say either phrase in a reply; do not crowd out meaningful design options.

"Choose for me" delegates judgment for that decision. "Surprise me" delegates a coherent, unexpected proposal within known constraints, after establishing the style bounds below. Neither delegates facts or waives final brief approval. Random exploration selects a coordinated direction, not unrelated fonts, colors, and layouts.

### Set the bounds of "Surprise me"

When the user chooses "Surprise me" for an unresolved overall direction, first ask one short question: **"What kind of surprise would feel right for this project?"** Reuse a style preference already supplied instead of asking again. If the user explicitly requests a true/full surprise, "choose everything," or "no more creative questions," go directly to the fully delegated path below. "Surprise me" by itself does not answer the style question.

Tailor the choices to the audience and project. Use concrete consequences, with these as examples rather than fixed presets:

| Style family | What the choice could mean |
| --- | --- |
| **Bold and expressive** | Oversized type, strong contrast, and an assertive composition; prioritize a memorable first impression while keeping content readable. |
| **Classic and refined** | Familiar proportions, measured spacing, and a restrained palette; explore an unexpected detail within an established visual language. |
| **Playful and unexpected** | Lighter copy, characterful illustration or shapes, and varied composition when appropriate; keep navigation and interactions predictable. |
| **Quiet and minimal** | Fewer visual elements, a deliberate type hierarchy, and generous space; put the surprise in an unusual composition or content treatment. |

Respect the live question tool's option limit: offer a project-specific shortlist, not necessarily all four families. With a three-option limit, for example, offer two relevant families and **"True surprise — choose everything."** Explain that this last option delegates all remaining creative decisions, not just the style family. Allow a custom answer through the supported free-text mechanism or a text reply. Do not add extra rounds merely to enumerate every family. Use numbered choices when clickable tools are unavailable, and wait for an actual answer before making the dependent proposal.

Record the selected family, custom preference, or explicit full delegation, then propose a coordinated direction with specifics and rationale. A family is a boundary, not a complete brief: "classic" does not settle the actual typography, palette, imagery, or page composition. Delegation does not override brand rules, accessibility, facts, scope, or final brief approval.

**True surprise — fully delegated:** choose one coherent concept and all remaining creative decisions: style family, typography, palette, page/section composition and order, imagery approach, draft copy, motion, interactions, and responsive treatment. Recommend the technical approach within the known project constraints too. Do not ask further aesthetic questions, require a choice among competing directions, or run the section interview as a questionnaire. Resolve those sections internally and record the reasons in the brief. Ask only for essential missing facts or constraints that cannot responsibly be inferred; never invent factual claims or treat delegation as permission for unrelated features, purchases, services, migrations, or publication. Present one complete, reviewable brief and wait for explicit approval before implementation. Accept requested amendments without reopening settled choices unnecessarily.

For a surprise within an individual section or a smaller design decision, preserve the settled global direction and ask only if a material style preference is still unresolved. Do not restart the global interview for an already approved design or small fix.

A preselected option, acknowledgment from a tool, cancellation, silence, or elapsed time is not an answer. An asynchronous question remains pending until an actual reply arrives; continue only independent research or context gathering. Do not continue dependent decisions by assuming the recommendation was accepted.

Allow skipping, revisiting, or delegating remaining creative decisions. When a skipped aesthetic question is essential to the brief, establish delegation or leave it pending. Resolve essential factual gaps before building; aesthetic uncertainty can be delegated.

## 1. Establish purpose and constraints

Establish only the missing facts:

- Offering, intended audience, and primary visitor action.
- Required pages, functionality, content, and existing proof.
- Brand rules, assets, supplied references, likes, dislikes, and patterns to avoid.
- Language, audience needs, accessibility requirements, and browser/device constraints.
- Existing framework, delivery constraints, integrations, and available services.

Use free text for facts that cannot reasonably be expressed as choices. Do not invent arbitrary options for an unknown product, audience, or required functionality.

Ask how the user wants to participate: guided decisions, detailed collaboration, or agent-led exploration. Guided mode concentrates on consequential choices; detailed mode walks each applicable section; agent-led mode proposes and records delegated decisions together. All modes end with a specific brief for review. Reuse any participation preference already supplied.

## 2. Establish a coherent direction

Before discussing individual sections, present a small set of directions tailored to the project, unless the user chose true surprise. For true surprise, develop one direction and carry it into the complete brief without another aesthetic choice round. For each direction, describe the intended impression and audience fit; typography character and hierarchy; palette roles and contrast; composition, density, spacing, and rhythm; imagery treatment; copy voice with realistic example phrasing; motion character or its absence; and a tradeoff or reason to choose another direction.

Names must carry actionable specifics: "narrow text columns, expressive serif headlines, documentary photography, and restrained captions" gives substance to "editorial." Keep concrete font candidates, colors, and composition consistent with known constraints; do not offer variations that violate a supplied brand system.

Use small type specimens, palette samples, or composition sketches when visual tools are available and useful. They are optional decision aids. Explain conflicts between preferences and propose a coherent resolution; do not silently combine incompatible directions. In delegated mode, propose a direction with reasons and preserve it for final review.

When references would resolve a specific visual or interaction decision, use the reference-study procedure in [references/visual-refinement.md](references/visual-refinement.md). Study the relevant principle and behavior, record what will be adapted and why, and keep the result coherent with this project's content and direction. Public references, supplied assets, or already connected tools are sufficient; no paid inspiration service is required.

Avoid habitual vague hero promises, decorative gradients, repeated card grids, unnecessary pill badges, arbitrary dashboards, excessive rounded containers, and identical scroll-reveal animations. These are review prompts, not universal bans: use a pattern when the user chooses it or a clear brief-based reason justifies it.

## 3. Walk the page from header to footer

Propose a structure based on visitor needs and actual content. Offer removing or combining sections; do not impose a universal landing-page sequence. Walk the agreed structure in reading order, establishing each section's purpose before asking about its unresolved content, composition, typography, imagery, interaction, and mobile behavior.

Read [references/section-interview.md](references/section-interview.md) when preparing section rounds. It supplies conditional prompts and examples, not a questionnaire to deliver wholesale.

Cover applicable areas: header/navigation, hero/opening, the actual main content, evidence/trust, conversion, and footer. Offer actual opening headlines based on known facts. Ask whether real testimonials, customer logos, results, credentials, or demonstrations exist. Without proof, propose an honest demonstration, factual explanation, or omission. Do not imply a working conversion flow without its success/error states and required services.

For multiple pages, settle shared patterns once, then interview only meaningful differences. Keep global choices stable unless new information justifies revisiting them. Detailed collaboration may need several rounds per section; delegation may resolve several sections in one proposal without repetitive questions.

## 4. Design with typography and copy

Discuss character, readability, hierarchy, and content fit before font names. When useful, suggest concrete candidates with availability, licensing, language coverage, loading cost, and fallback considerations; show sample text when possible. Treat unverified font licensing or asset rights as unresolved, not assumed.

Offer realistic copy alternatives in distinct voices. Use specific claims, meaningful verbs, and audience-appropriate language. Avoid empty "revolutionary," "seamless," or "unlock your potential" phrasing unless a specific use is justified. Never fabricate metrics, endorsements, customers, awards, scarcity, capabilities, or imagery presented as evidence of real work.

Track missing copy and assets. Mark content as verified, draft, or placeholder; an approved design does not verify a factual claim. Missing optional imagery can lead to a typographic composition or honest illustration. Essential facts cannot be replaced with invented content.

## 5. Preserve decisions

Maintain one concise decision record in the conversation or an appropriate project document. Use [references/decision-and-brief.md](references/decision-and-brief.md) when first recording choices and composing the final brief. Do not create extra files when the conversation is sufficient.

Separate explicit user choices, agent-delegated decisions, proposals awaiting an answer, missing facts/content/assets, rejected directions/patterns, and intended section order. Preserve exact user wording when it carries nuance. Note the scope of each delegation and any proposed concrete value.

When a choice changes, update affected decisions and briefly explain material consequences. Mark superseded choices so they cannot silently return. After an interruption or context loss, recover the record and approval state; ask only about missing or conflicting information.

## 6. Present the brief and wait

Produce a concise, concrete brief containing:

1. Purpose, audience, primary action, and scope.
2. Chosen creative direction and rationale, identifying delegated choices.
3. Typography, palette roles, layout, imagery, and motion.
4. Pages and section order from header to footer, with purposes and treatments.
5. Copy voice, representative headline, and action text.
6. Responsive and accessibility behavior.
7. New-project or existing-codebase starting point, selected or retained stack and rationale, setup/check commands, deployment constraints, audience browser targets, and compatibility considerations.
8. Missing assets, factual dependencies, content status, and delegated assumptions.
9. Observable acceptance criteria and patterns to avoid.

Replace "clean, beautiful, modern, responsive" with reviewable decisions. Show pending essentials rather than hiding them inside vague assumptions. A brief can be reviewed with missing optional assets, but essential facts must be resolved before building the dependent scope.

Offer a final decision through a permitted question mechanism: **approve and build**, **amend the brief**, or **revisit a direction**. Adapt to option limits, using numbered text if necessary. **Wait for explicit approval of this concrete brief.** An earlier request to build, a general preference for speed, "Choose for me," and "Surprise me" do not approve a brief the user has not reviewed.

If the user requests amendments, revise the affected parts and obtain explicit approval of the revised brief. Once approved, implement without repeatedly asking permission for ordinary choices within it. Material changes to the approved direction or scope require review of the affected brief before implementation proceeds there.

## 7. Build from the approved brief

Treat the approved brief as the implementation contract. Create a small, coherent system of type, color, spacing, layout, and components expressed in the actual content and composition. Preserve the project's framework and conventions unless a change is authorized. Prefer semantic HTML, modern CSS, native capabilities, and the smallest appropriate amount of JavaScript. Avoid libraries, animation systems, and dependencies without a concrete need.

### Consult current technical guidance

Use [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) as a maintained technical reference. At implementation time, read its current entry guidance and retrieve material relevant to the capability being implemented. Consult it again when a new implementation decision requires it. Do not vendor the repository, install its skill automatically, or make it a required dependency of Human Taste.

Follow the reference's current discovery method rather than guessing guide IDs or freezing its file tree into this skill. If its current CLI is available and permitted, focused `search` followed by `retrieve` can obtain relevant guidance without installing a project dependency. Otherwise read the relevant repository or linked documentation directly. Do not run a broad modernization scan as part of an unrelated site build.

Consider container queries, subgrid, fluid typography, modern color spaces, native dialogs/popovers, or view transitions only when they solve the brief's problem. Verify support against the actual audience's browser targets using current compatibility data; feature-detect where appropriate and provide progressive enhancement and fallbacks. Browser capabilities inform implementation, not visual direction. Do not add a technology just because it is new.

If live material cannot be accessed, disclose that limitation, use conservative established techniques or suitable fallbacks, and do not claim current compatibility verification. Record the sources actually consulted and any remaining uncertainty in the handoff.

### Carry the decisions through

Compose mobile layouts intentionally: adjust action placement, navigation, type scale, image crop, density, and reading rhythm where needed, rather than simply stacking desktop blocks. Preserve semantic reading order, keyboard access, visible focus, usable labeled forms, sufficient contrast, and reduced-motion preferences. Do not rely on hover or motion alone to expose content.

Use real content and approved assets. Keep missing dependencies visible and clearly distinguish preview placeholders from publishable content. Complete agreed interactions and meaningful loading, empty, success, and error states where applicable. Disclose credentials, external services, or integrations that prevent a feature from working.

Do not add sections, features, analytics, services, or deployment beyond authorized scope. Approval to build does not automatically authorize publication.

## 8. Review taste and execution

Compare the rendered implementation with the approved brief:

- Does the first screen communicate this specific offering? Could changing only the logo turn it into an unrelated business's site?
- Does typography establish a deliberate hierarchy? Does every section have a purpose?
- Does repetition clarify the content or expose a template? Are copy and imagery specific and credible?
- Does motion communicate something useful? Is mobile intentionally composed?
- Are interactions and accessibility behaviors usable? Has implementation weakened the chosen direction?

These are qualitative review prompts, not a numerical "human taste score."

Where tools permit, inspect rendered pages at representative small and large widths. Check relevant interactions, keyboard/focus behavior, overflow, loading, and reduced motion. Use automated checks where useful, while separating their results from visual judgment. Report unavailable tools and unverified areas honestly.

When the result needs refinement, apply the ordered passes and stopping criteria in [references/visual-refinement.md](references/visual-refinement.md). Keep comparable baseline/checkpoint captures and a short issue → change → reason → verification record. Do not mechanically add visual effects or remove required actions to make a screenshot look simpler. In true-surprise mode, perform these passes internally without adding aesthetic question rounds.

Correct deviations within scope; surface material brief changes for user review. Deliver a short account of what was built, how it reflects the approved direction, what was actually checked, and remaining dependencies. If the request ended at a brief, deliver that brief with its current approval state instead.

---

Human Taste is free to use, share, and adapt under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); see [LICENCE](LICENCE). Attribution: Human Taste contributors. Retain attribution when redistributing or adapting these instructions. This skill's license does not automatically license the sites, fonts, content, or assets used in a project.
