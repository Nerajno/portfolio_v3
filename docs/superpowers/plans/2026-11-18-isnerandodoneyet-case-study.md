# IsNerandoDoneYet Case Study Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the IsNerandoDoneYet card's "Case study →" link open a new `/case-study/isnerandodoneyet` page that matches the design-canvas mockup.

**Architecture:** One new static Astro page on the portfolio surface (Dialects tokens), plus one data field in `src/data/projects.js`. `[slug].astro` and the four legacy case studies are untouched; `[slug]` never generates this slug because the project has no `case_study` object.

**Tech Stack:** Astro 6, Dialects Tailwind preset (`@nerajno/dialects`), astro-seo, Playwright + @axe-core/playwright.

**Spec:** `docs/superpowers/specs/2026-11-18-isnerandodoneyet-case-study-design.md`

## Global Constraints
- Branch `feature/isnerandodoneyet-case-study`; PR into `feat/224-portfolio-redesign`.
- Page pattern = `src/pages/recruiters.astro`: `Layout` (surface defaults to `'portfolio'`), `Container`, `SEO` from `astro-seo`, `export const prerender = true`. Dialects classes only (`text-strong`, `text-body`, `text-soft`, `text-accent`, `bg-surface`, `bg-surface-card`, `bg-surface-alt`, `border-surface`); no raw slate/blue classes, no hex.
- Copy = the canvas artboard "Case Study — IsNerandoDoneYet" verbatim, including sample numbers (31 shipped · 14 killed · 0 past 90 days · median 23 days; ADR-005/006). No on-page "sample" label.
- Links: live `https://isnerandodoneyet.com/`, repo `https://github.com/Nerajno/isnerandodoneyet-com` (both new tab), `/blog/skills-to-bills-demonstrated-competency`, `/blog/start-with-the-end-in-mind-developers-side-project-survival-guide`, ADRs → `/decisions`, breadcrumb → `/portfolio`, recruiter band → `/recruiters`.
- Accessibility: one `h1`; section headings `h2`; architecture flow is a `figure` with a text `figcaption`; 4.5:1 text in light and dark; no horizontal overflow at 320px.

## Review Focus
1. 320px width: the five-box architecture flow and the evidence aside must wrap, not overflow → test in Task 2.
2. Dark theme: Dialects colors must still pass axe → test in Task 2 (axe with `localStorage.theme = 'dark'`).
3. Related-post links must resolve, not 404 → test in Task 2 (request each href, expect 200).
4. Direct visit to `/case-study/isnerandodoneyet` (not via the card) must return 200 → test in Task 2.
5. Other three featured cards keep their "pending" case-study slot → test in Task 1.

---

### Task 1: Card links to the case study

**Files:**
- Modify: `src/data/projects.js` (IsNerandoDoneYet entry, `caseStudyUrl: null` → `"/case-study/isnerandodoneyet"`)
- Create: `e2e/specs/case-study.spec.js`
- Add: `docs/superpowers/specs/2026-11-18-isnerandodoneyet-case-study-design.md`, this plan

**Interfaces:**
- Produces: URL `/case-study/isnerandodoneyet` (Task 2 builds the page at it).

- [ ] **Step 1: Write the failing test** in `e2e/specs/case-study.spec.js`, `describe('IsNerandoDoneYet case study')`:
  - `test('portfolio card links to the case study')`: goto `/portfolio`; `page.locator('[data-project="isnerandodoneyet"]').getByRole('link', { name: /^Case study/ })` has `href` `/case-study/isnerandodoneyet`.
  - `test('other featured cards keep a pending case study')`: for `receipts-poll`, `blog-rag`, `tiny-desk-api`, the card has no link named `/^Case study/` (count 0).
- [ ] **Step 2: Run** `npx playwright test e2e/specs/case-study.spec.js --project=chromium` → first test FAILS (link missing), second PASSES.
- [ ] **Step 3: Set** `caseStudyUrl: "/case-study/isnerandodoneyet"` on the IsNerandoDoneYet entry.
- [ ] **Step 4: Run** the same command → both PASS.
- [ ] **Step 5: Commit** `feat(portfolio): link IsNerandoDoneYet card to its case study` (spec, plan, data, test).

### Task 2: The case study page

**Files:**
- Create: `src/pages/case-study/isnerandodoneyet.astro`
- Modify: `e2e/specs/case-study.spec.js`, `e2e/accessibility.spec.ts` (add `{ name: 'Case study', path: '/case-study/isnerandodoneyet' }` to `pages`)

**Interfaces:**
- Consumes: URL from Task 1.
- Page markup contract the tests rely on: `<nav aria-label="Breadcrumb">`; one `h1` = `IsNerandoDoneYet — a public finish line for my side projects`; six `h2` in `main` whose text starts `01`…`06`; `<aside aria-label="Evidence">`; architecture `figure`; a frontmatter array `sections: { n: string; title: string; body: string }[]` drives 01–06.

- [ ] **Step 1: Write the failing tests** (append to the describe):
  - `test('page renders the six-part story')`: goto `/case-study/isnerandodoneyet` → response status 200; `main h1` text as above; `main h2` filtered by `/^0[1-6]/` count 6; breadcrumb link `Artifacts` href `/portfolio`.
  - `test('evidence links point to real places')`: Evidence aside has links with hrefs `https://isnerandodoneyet.com/`, `https://github.com/Nerajno/isnerandodoneyet-com`, and the two `/blog/...` paths; for each `/blog/` href, `page.request.get(href)` status 200.
  - `test('card click opens the page')`: from `/portfolio`, click the Task 1 link → URL ends `/case-study/isnerandodoneyet`.
  - `test('no horizontal overflow at 320px')`: viewport 320×800; `document.documentElement.scrollWidth <= 320`.
  - `test('no serious axe violations in dark theme')`: `addInitScript` sets `localStorage.theme = 'dark'`; goto; `AxeBuilder` with tags `wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa`; no `critical`/`serious` violations.
- [ ] **Step 2: Run** `npx playwright test e2e/specs/case-study.spec.js --project=chromium` → new tests FAIL (404).
- [ ] **Step 3: Build** `src/pages/case-study/isnerandodoneyet.astro` per the spec's section list and the Global Constraints: breadcrumb · header (eyebrow, h1, meta row: Role: solo build / Stack: Vue 3 · TypeScript · Pinia · Tailwind / Started: Apr 2022 / Status: live) · two-column flex-wrap (story column: `sections` 01–06, architecture `figure` inside 03, AI collaboration `aside`; Evidence `aside`) · recruiter band. SEO title `IsNerandoDoneYet case study | Nerando Johnson`, canonical `new URL('case-study/isnerandodoneyet', Astro.site)`.
- [ ] **Step 4: Run** the spec → all PASS. Then `npx playwright test e2e/accessibility.spec.ts -g "Case study" --project=chromium` → PASS. Then `npm run build` → exit 0.
- [ ] **Step 5: Commit** `feat(case-study): IsNerandoDoneYet deep dive on the portfolio surface`, push, open PR into `feat/224-portfolio-redesign`, merge with `gh pr merge --merge`.
