# Decision record and approval brief

Read this when first recording decisions and when preparing the brief. Use one concise record in the conversation or an appropriate project document; adapt these fields instead of creating a paperwork system. The brief becomes the implementation contract only after explicit approval.

## Decision record

Track the project and current stage: gathering facts, direction, sections, brief awaiting approval, approved implementation, or review. Give revised briefs a simple identifier so the approval is unambiguous.

| Category | What to retain |
| --- | --- |
| User choices | Actual answer and scope; exact wording where it matters |
| Delegated decisions | What the user delegated, any constraints, the agent's proposed choice and reason |
| Pending proposals | Alternatives shown, recommendation, and unanswered question |
| Missing dependencies | Fact, copy, asset, right/permission, service, or credential; whether it blocks building or only completion/publication |
| Rejected/superseded | Direction or pattern and reason; mark replacements |
| Structure | Pages and intended section order, with purpose |
| Technical starting point | New or existing project; inspected evidence, retained/selected stack and rationale, existing behaviors to preserve, commands and constraints |
| Approval | Brief identifier and actual user go-ahead, or "awaiting explicit approval" |

Do not upgrade a recommendation to a user choice. A submitted "Choose for me" answer can close an aesthetic question; record both that delegation and the resulting agent decision. A pending question stays pending even if a tool reports success or a timer expires.

If the user says "quiet, but not clinical," preserve that wording and translate it into reviewable proposals: for example, warm paper backgrounds, readable text, generous margins, and factual captions. Those specifics remain proposals until chosen, delegated, or included in an approved brief.

## Brief template

Keep only useful detail. Replace every instruction below with project-specific content; do not fill unknown facts with invented claims.

### Brief identity and scope

State the revision, current approval state, requested deliverable, pages/functions included, and scope boundaries. Reuse an existing approved brief when supplied.

### Purpose, audience, and action

Explain what the site offers, who it serves, the visitor's main need, and the primary action. List unresolved essential facts explicitly.

### Creative direction

Name the chosen direction, describe its intended impression, and explain why it fits this audience and content. Identify choices made by the user and those delegated to the agent. Note meaningful tradeoffs and rejected patterns.

### Design system and copy

Specify typography character, hierarchy, concrete candidates where settled, language coverage, loading/fallback approach, palette roles, contrast expectations, spacing/density, layout rhythm, imagery sources/treatment, motion purpose and reduced-motion alternative. Mark unverified font/asset rights.

Include voice, a representative draft or verified headline, primary action text, and any factual claims still requiring confirmation.

### Page sequence

For each page, give its ordered sections. For each section, state its purpose, actual content, composition/treatment, action or interaction, and meaningful mobile differences. Name shared patterns once. Omit inapplicable sections.

### Responsive and accessibility behavior

State meaningful reflow decisions, navigation behavior, reading order, image crops, keyboard/focus behavior, forms, contrast checks, and reduced-motion treatment. Relate these to the site's actual content and interactions.

### Technical approach

State whether this is a new project or an existing codebase, the files/evidence inspected, the selected or retained stack and rationale, package manager, setup/build/check commands, hosting constraints, and existing routes/components/behaviors to preserve. Identify any specifically authorized stack change. Explain editing or operational tradeoffs when they affected the choice; do not substitute a default framework for requirements.

State actual audience browser targets or an unresolved target question, relevant native capabilities, progressive enhancement/fallback plans, integrations, and compatibility uncertainty. Cite the technical references actually consulted; do not describe planned checks as completed.

### Dependencies and delegated assumptions

List missing facts/assets/copy/integrations, draft and placeholder status, what can proceed, what blocks dependent implementation, and what blocks completion or publication. A delegated aesthetic choice is distinct from an unverified fact.

### Acceptance criteria

Use observable criteria tied to the direction and scope. Examples to adapt, not universal requirements:

- The first screen names the actual service and shows the agreed primary action.
- The work sequence uses the supplied three projects and their approved captions, without invented clients.
- On narrow screens, each image remains adjacent to its caption and the inquiry action remains reachable without horizontal scrolling.
- Keyboard users can reach navigation, operate the form, understand errors, and see focus.
- Reduced motion preserves content and completion of the same tasks.

Record patterns to avoid and what will be checked through automation, interaction testing, or visual inspection. Do not substitute a taste score for judgment.

## Approval handoff

Present the completed brief, then use a permitted interactive tool or numbered reply options:

1. **Approve and build** — implement this brief within its stated scope.
2. **Amend the brief** — revise the specified parts, then request approval of the revision.
3. **Revisit a direction** — reopen the relevant direction choices while preserving settled facts.

Wait for an actual unambiguous answer. Tool acknowledgment, silence, a preselected option, or prior delegation is insufficient. If the task requested only a brief, adapt the handoff to approval of that deliverable without implying authorization to implement.
