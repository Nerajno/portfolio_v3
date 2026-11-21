# IsNerandoDoneYet Case Study — Checklist Gaps Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Close the 6 checklist gaps on `/case-study/isnerandodoneyet` and add post back-links.

**Architecture:** Edits to one page, two blog posts, one spec file. No new routes, no data-file changes.

**Tech Stack:** Astro 6, Dialects Tailwind preset, Playwright + @axe-core/playwright.

**Spec:** `docs/superpowers/specs/2026-11-20-case-study-checklist-gaps-design.md`

## Global Constraints
- Branch `feature/case-study-checklist-gaps`; PR into `feat/224-portfolio-redesign`.
- Dialects classes only (`text-strong`, `text-body`, `text-soft`, `text-accent`, `bg-surface-alt`, `bg-surface-card`, `border-surface`); no raw colours.
- Still exactly six numbered `h2` (01–06); new blocks are figures, lists or paragraphs inside existing sections, plus one `aside`.
- New copy is sample copy; extend the top-of-file NOTE to list it. No on-page "sample" label.
- `src/data/decisions.js` untouched.
- Tests run as `PW_PORT=4322 npx playwright test -c pw.tmp.config.ts <spec> --project=chromium > <file>` against the running dev server.

## Review Focus
1. 320px: the data-model code block must scroll inside its own `overflow-x-auto` box, not push `main` → existing 320px test covers it.
2. Dark theme contrast of the code block → existing dark axe test covers it.
3. Blog back-links must not break the posts' MDX/markdown render → Task 3 test hits each post (200 + link).
4. Removing ADR links must not leave "ADR-005" text pointing nowhere → Task 2 test.
5. Heading order: new `aside` uses `h2`, figures use `figcaption`, no skipped levels → existing a11y spec.

---

### Task 1: Story + evidence gaps on the page (items 1, 3, 5, 12, observability)

**Files:** Modify `src/pages/case-study/isnerandodoneyet.astro`, `e2e/specs/case-study.spec.js`.

- [ ] **Step 1: Failing tests** (append to the describe):
  - `test('problem names cost and constraints')`: section `#s-01` parent contains text `Constraints:` and `Cost:`.
  - `test('approach explains the stack choice')`: section 03 contains `Why this stack:`.
  - `test('data model is shown')`: `figure` whose `figcaption` matches `/^Data model/` exists in section 03 and contains a `pre code` with `"status"`.
  - `test('outcome shows before and after per criterion')`: section 05 has a list with ≥ 3 items each containing `→`.
  - `test('operations note covers observability and secrets')`: `getByRole('complementary', { name: 'Running it' })` contains `secrets` (case-insensitive).
- [ ] **Step 2: Run** → 5 new FAIL, 7 old PASS.
- [ ] **Step 3: Implement.** Sections array gains optional `extra` content rendered by section number (keep the existing `n === '04'` / `'03'` pattern). Copy:
  - 01 `Cost:` "two half-finished apps a year and the credibility of saying 'I ship'." · `Constraints:` "solo, evenings only, $0 hosting, no backend to babysit."
  - 03 `Why this stack:` "Vue 3 + Pinia because I teach it and can debug it half asleep; TypeScript so the schema and the store agree; a JSON file because a database would be the first thing I'd stop maintaining."
  - 03 data-model figure: `pre` in `overflow-x-auto rounded-md bg-surface-card` box, code = `{ "id": "string", "title": "string", "status": "shipped | in-progress | killed", "started": "YYYY-MM-DD", "finished": "YYYY-MM-DD | null", "killReason": "string | null" }` pretty-printed; figcaption "Data model: one record per commitment in commitments.json; the build fails if a record breaks this shape."
  - 05 list: "Items parked forever: 9 → 0" · "Longest 'in progress': 14 months → under 90 days" · "Time to update status: edit + redeploy, ~10 min → one commit, under a minute".
  - `aside aria-label='Running it'` after the AI aside, `h2` "Running it": "Failures surface at build: a bad record fails the schema check and Netlify keeps the last good deploy. No secrets — the site is static, reads one public JSON file, and holds no API keys or user data."
  - Extend the NOTE comment with: cost/constraints, why-stack, data model, before/after, running-it note; and the blog must-haves mismatch.
- [ ] **Step 4: Run** spec → 12/12 PASS; `e2e/accessibility.spec.ts -g "Case study"` PASS.
- [ ] **Step 5: Commit** `feat(case-study): close checklist gaps on IsNerandoDoneYet`.

### Task 2: Drop the dead ADR links (item 4)

**Files:** Modify `src/pages/case-study/isnerandodoneyet.astro`, `e2e/specs/case-study.spec.js`.

- [ ] **Step 1: Failing test** `test('every /decisions link lands on a real record')`: collect `main a[href^="/decisions"]`; each must have a `#id` and `page.request.get('/decisions')` HTML must contain `id="<id>"`. Current links (no anchor) FAIL.
- [ ] **Step 2: Run** → FAIL.
- [ ] **Step 3: Implement** section 04: replace the two `<a>` with plain text "(decision record to come)"; remove the `/decisions` row from `evidence` and `inline` const if now unused.
- [ ] **Step 4: Run** spec → PASS.
- [ ] **Step 5: Commit** `fix(case-study): drop ADR links that had no record`.

### Task 3: Posts link back (item 13)

**Files:** Modify `src/content/blog/2025/start-with-the-end-in-mind-developers-side-project-survival-guide.md` (line ~257), `src/content/blog/2026/skills-to-bills-demonstrated-competency.md` (line ~169), `e2e/specs/case-study.spec.js`.

- [ ] **Step 1: Failing test** `test('related posts link back to the case study')`: for both post paths, `page.goto` status 200 and `main a[href="/case-study/isnerandodoneyet"]` count ≥ 1.
- [ ] **Step 2: Run** → FAIL.
- [ ] **Step 3: Implement** after each IsNerandoDoneYet sentence, append ` ([read the case study](/case-study/isnerandodoneyet))`.
- [ ] **Step 4: Run** spec → 14/14 PASS; `npm run build` exit 0 (stop dev server first, restart after).
- [ ] **Step 5: Commit** `docs(blog): link IsNerandoDoneYet posts to the case study`; push; PR into `feat/224-portfolio-redesign`.
