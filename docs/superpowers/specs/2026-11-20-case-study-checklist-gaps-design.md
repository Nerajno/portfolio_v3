# IsNerandoDoneYet case study — checklist gaps — design

**Date:** 2026-11-20 · **Branch:** `feature/case-study-checklist-gaps` → PR into `feat/224-portfolio-redesign`

## Intent
Bring `/case-study/isnerandodoneyet` up to the "Artifact Deep Dives" checklist (13 items plus observability/secrets) so it can seed the #459 template. Audit on 2026-11-20 found 8 items met, 4 partial, 1 missing.

## Gaps to close
| # | Item | Gap | Fix |
|---|---|---|---|
| 1 | Problem | No cost, no constraints | Add a cost line + a "Constraints:" line to 01 |
| 3 | Approach | Stack named, not justified | Add a "Why this stack:" line to 03 |
| 4 | Tradeoffs + ADRs | ADR-005/006 link to `/decisions`, which has no such records | Drop the two links, keep the tradeoff text (see Approaches) |
| 5 | Outcome | No before/after; weak tie to criteria | Add a before → after list, one row per success criterion |
| 12 | Data model | Missing | Add a "Data model" figure in 03: the `commitments.json` record shape as a code block + text figcaption |
| 13 | Posts link back | Posts don't link to the case study | Add a case-study link next to the IsNerandoDoneYet mention in both posts |
| — | Observability & secrets | Missing | Add a short "Running it" note (how failures surface; no secrets — static JSON, no keys) |

## Non-goals
- Real facts. New copy is sample copy like the rest of the page (Nerando's call: "I will fix it later"); the existing code comment listing sample items is extended. No on-page "sample" label.
- The #459 shared template, `[slug].astro`, other case studies.
- Demo video (live site already satisfies item 9).

## Anti-goals
- No invented records in `src/data/decisions.js`: that file is sourced from real issues/PRs/commits.

## Approaches (item 4)
- **A. Drop the ADR links (picked, pending Nerando's OK).** Honest; `/decisions` stays real. Costs the checklist's ADR link until real ADRs exist.
- B. Add ADR-005/006 to `decisions.js` with sample content. Rejected: breaks that file's "sourced" rule and would show on `/decisions`.
- C. Link to the isnerandodoneyet-com repo's own ADR folder. Only if that folder exists — it doesn't today.

## Known conflict
`start-with-the-end-in-mind…` says the rebuild's must-haves were "create and edit markdown files, preview rendered markdown, save files locally". The page's architecture (JSON → Pinia → three views) is invented and doesn't match. Left for Nerando's real-facts pass; flagged in the code comment.
