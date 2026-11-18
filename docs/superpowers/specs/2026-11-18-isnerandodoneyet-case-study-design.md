# IsNerandoDoneYet case study page — design

**Date:** 2026-11-18 · **Branch:** `feature/isnerandodoneyet-case-study` → PR into `feat/224-portfolio-redesign`

## Intent
The IsNerandoDoneYet card on `/portfolio` shows "Case study: pending". Nerando wants the link to work and open a real page that matches the design-canvas mockup ("Case Study — IsNerandoDoneYet"), so the redesign can be reviewed end to end on `feat/224`.

## Goals
- Card's "Case study →" links to `/case-study/isnerandodoneyet`.
- That page matches the canvas mockup's structure and look, on Dialects tokens (portfolio surface).
- Content = the mockup's copy, including its invented sample numbers.

## Non-goals
- No change to `src/pages/case-study/[slug].astro` or the four legacy case studies (taskflow-pro, trapper-keeper, burble, terminus).
- Not the shared #459 template; this page is a one-off that can seed it later.
- No real architecture diagram image, ER diagram, or ADR-005/006 records.

## Anti-goals
- Must not ship to the live site as-is: sample numbers must be replaced before #454 (Nerando's call; no on-page "sample" label, at Nerando's request).

## Constraints
- Audience: Nerando only, reviewing `feat/224`.
- Follow existing redesign pages (e.g. `recruiters.astro`, `how-i-build.astro`): `Layout` with `surface='portfolio'`, `Container`, Dialects utility classes (`text-strong`, `bg-surface-card`, `border-surface`, `text-accent`…), `astro-seo` block, `export const prerender = true`.
- Accessible as built: one `h1`, real links, 4.5:1 text, no horizontal overflow at 320px.

## Approaches
- A. Data only: add legacy `case_study` + `caseStudyUrl` → link works but renders the old template. Rejected: doesn't look like the mockup.
- **B. Dedicated page `src/pages/case-study/isnerandodoneyet.astro` (picked).** Matches the mockup, touches nothing else; can seed #459.
- C. Rebuild `[slug].astro` to the new story structure now (#459). Rejected for now: large, rewrites four pages not asked about.

## Design
- **`src/pages/case-study/isnerandodoneyet.astro`** (new). A static route; `[slug]` never generates this slug (no `case_study` on the project), so no conflict. Sections, top to bottom:
  - Breadcrumb: Artifacts (`/portfolio`) / IsNerandoDoneYet
  - Eyebrow "Artifact deep dive", h1, meta row (role, stack, started Apr 2022, live)
  - 01 Problem & business context · 02 Success criteria · 03 Approach & architecture (with the inline box-and-arrow flow as an accessible figure) · 04 Key tradeoffs (ADR-005/006 link to `/decisions`) · 05 Measurable outcome · 06 What I'd change in v2
  - AI collaboration box (tools / what AI did / what I owned / where AI got it wrong)
  - Evidence aside: live site, repo, related posts (`/blog/skills-to-bills-demonstrated-competency`, `/blog/start-with-the-end-in-mind-developers-side-project-survival-guide`), CI line
  - Recruiter band → `/recruiters`
- **`src/data/projects.js`**: IsNerandoDoneYet `caseStudyUrl: "/case-study/isnerandodoneyet"`.
- **Tests**: new `e2e/specs/case-study.spec.js` (card link → page; one h1; six numbered sections; evidence links; no overflow at 320px) and the page added to `e2e/accessibility.spec.ts`.

## Left to the builder
Exact Dialects classes and spacing; whether section copy lives in a frontmatter array or inline markup (prefer a small array for the six sections).
