# Human Taste validation review

Initial review on 2026-11-15, before the follow-up request for generated website tests. This report distinguishes the original structural/installation checks from manual review of hypothetical conversations. No website was built during this initial review. See [LIVE-TESTS.md](LIVE-TESTS.md) for the subsequent independent evaluations, actual websites, browser checks, and screenshots; those results supersede the initial limits below.

## Executed checks

- The bundled `skill-creator/scripts/quick_validate.py` accepted `human-taste/`.
- YAML parsing checked discovery metadata and Codex UI metadata. The skill identifier matches its folder, description and UI lengths meet the documented limits, and the default prompt names `$human-taste`.
- Local Markdown links resolve. Both supporting references are linked directly from `SKILL.md`; neither requires another skill or installed plugin.
- The root and bundled `LICENCE` notices match and identify `CC-BY-4.0`. The installed skill retains the license notice, attribution, and canonical license link.
- `npx skills` version **1.8.1** discovered exactly one skill named `human-taste` from this repository.
- A project-scoped copy installation targeting **Claude Code, Codex, and Cursor** completed successfully in an isolated directory outside the deliverable repository. All five skill files matched the source byte for byte in both installed locations.

The installer places the shared Codex/Cursor copy at `.agents/skills/human-taste` and the Claude Code copy at `.claude/skills/human-taste`. Its installation summary explicitly recognized all three requested targets. On this machine, `skills list --agent cursor` displayed the shared skill as "not linked." Inspection of the downloaded CLI showed that its list output filters agent associations through application detection, while its Cursor project installation path is `.agents/skills`. This is a listing limitation in this environment; Cursor application discovery and use were not tested.

Commands used, with the source path substituted for this workspace and telemetry disabled:

```sh
npx --yes skills add /absolute/path/to/this-repository --list
npx --offline --yes skills add /absolute/path/to/this-repository --skill human-taste --agent claude-code codex cursor --copy --yes
npx --offline --yes skills list --agent claude-code codex cursor
npx --offline --yes skills list --agent cursor
```

The offline commands reused the CLI fetched for discovery. The initial restricted network attempt failed; a permitted network retry fetched the public CLI. No global skill installation was requested. Installation tests and npm cache files were kept in the task's visualization directory.

## Manual scenario walkthroughs

These are author walkthroughs of the written workflow, **not executed agent conversations**. Inputs and state changes below are constructed review cases. They check that the instructions specify the required behavior; they do not demonstrate that a particular model or client will follow it reliably.

### 1. Detailed section-by-section collaboration

**Input:** "Build my bicycle workshop site. The main action is booking. Walk me through every section." Offering, location, available service content, and booking requirements are supplied.

**Walkthrough:** Read those facts without asking again → establish missing constraints and creative direction → propose only needed sections → walk navigation, opening, services, available evidence, booking, and footer in reading order. A question remains pending after a tool acknowledgment; an actual submitted answer updates the record. Present a brief with real draft headline/action text, section treatments, mobile behavior, and booking dependencies. Only explicit approval of that brief permits building.

**Review finding:** Detailed rounds, actual-answer waiting, concrete brief content, and the approval gate are specified. A booking service that is still unknown must be resolved before its dependent flow is implemented or represented as working.

### 2. Most creative choices delegated

**Input:** "Choose the creative details for my three-project portfolio. Surprise me, but keep my logo. Show me the plan." Project facts, content, and inquiry destination are supplied.

**Walkthrough:** Record the delegation and logo constraint → propose one coordinated direction, such as a type-led index with large authentic project images and factual captions → record concrete delegated choices and reasons → resolve only remaining essential facts → present the reviewable brief. "Surprise me" does not authorize fictional clients or skip approval. With no actual approval reply, the state remains "brief awaiting approval." "Approve and build this brief" transitions to implementation without another round of permission requests for ordinary scoped choices.

**Review finding:** Delegation reduces repetitive questions while preserving facts and final review. If the request supplied no offering or primary action, those would be factual questions, not randomly chosen creative values.

### 3. Existing brand system

**Input:** "Redesign our services pages. Keep our logo, licensed typeface, palette, and navigation; these are approved." The current brand guide and site are available.

**Walkthrough:** Read the brand system → record fixed choices → explore only content hierarchy, page composition, imagery, and other unresolved matters. Directions cannot casually change the palette or replace the framework. If an already approved brief covers the whole request, resume implementation rather than restarting the interview.

**Review finding:** Both supplied brand constraints and already approved work have explicit routing. Meaningful differences on additional pages are discussed without re-interviewing shared patterns.

### 4. Direction changes midway

**Input:** After choosing a photograph-led direction, the user says, "Keep the warm colors, but use a quieter text-led layout. Drop the big opening photograph."

**Walkthrough:** Preserve the warm palette and factual content → mark the old opening composition as superseded → revise affected type hierarchy, spacing, image placement, and asset requirements → explain those consequences briefly. Before approval, continue toward the revised brief. If implementation already has approval, surface the material direction change and obtain approval of the affected revised brief before changing those parts.

**Review finding:** The record preserves unaffected decisions, prevents rejected choices from returning, and ties implementation to the current approved brief.

### 5. No testimonials or imagery

**Input:** "This is a new service. I have no testimonials, customer logos, results, or photography."

**Walkthrough:** Record absent assets/proof → offer a factual process explanation or actual demonstration when available, otherwise omit the proof section → propose a type-led composition or honest illustration if needed. Do not invent testimonials, metrics, clients, or images of supposed completed work. Missing optional images need not prevent an approved text-led build; missing essential offering facts do.

**Review finding:** Truthful alternatives, omissions, draft status, asset rights, and dependency tracking are explicit. A design approval does not verify unsupported claims.

### 6. No permitted clickable question tools

**Input:** A new site request in an environment with no question tool, or with `request_user_input` unavailable in the current mode.

**Walkthrough:** Check actual availability and schema → use another permitted question tool if present → otherwise show concise numbered choices and invite custom or delegated replies. Wait for the reply; do not label text as clickable or interpret silence, elapsed time, cancellation, or a tool acknowledgment as selection. The final approval decision follows the same fallback. An asynchronous tool returning before the user answers also leaves dependent work pending.

**Review finding:** Tool routing is conditional, option limits are respected, text-only interaction is supported, and tool success is distinct from an actual answer.

### 7. Small change

**Input:** "Increase the gap between the footer links and fix this typo. Keep the approved design."

**Walkthrough:** Route to the small-fix branch → preserve the existing direction → make the scoped adjustment without a new creative interview or fresh approval of unchanged design. Review the affected result and report what was checked.

**Review finding:** The discovery description and workflow both exempt small fixes. New scope, art direction, tracking, or deployment is not inferred from a narrow edit.

## Technical reference review

The current upstream [README](https://github.com/GoogleChrome/modern-web-guidance) and [skill entry](https://github.com/GoogleChrome/modern-web-guidance/blob/main/skills/modern-web-guidance/SKILL.md) were accessible during authoring. Human Taste uses their focused discovery/retrieval approach without copying the repository, pinning a changing guide catalog, or requiring an installed dependency. It leaves aesthetic direction with the brief and requires audience-specific support checks and an honest offline fallback.

No browser compatibility claim for a generated website was tested, because no website was generated. The [Agent Skills specification](https://agentskills.io/specification), [installer reference](https://github.com/vercel-labs/skills/blob/main/docs/commands.md), and [CC BY 4.0 license](https://creativecommons.org/licenses/by/4.0/) informed packaging, installation documentation, and the license notice.

## Initial review limits

- No independent subagent evaluation or live end-to-end interview was run.
- Claude Code and Cursor clients were not launched; client tool behavior and visual quality were not tested.
- Global installation and installation from a published remote repository were not tested.
- No public GitHub repository, npm package, deployment, or generated website was created.

The executed checks establish valid packaging, working local npx discovery, and copied installation files. The seven walkthroughs establish instruction coverage under manual review, not measured behavioral reliability.
