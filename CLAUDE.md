# CLAUDE.md

## Astro Portfolio v3

### Stack
- **Framework**: Astro 4 + MDX, deployed on Netlify
- **UI**: Vue 3 (islands), React (islands), Tailwind CSS
- **Analytics**: Google Analytics + Microsoft Clarity via Partytown
- **Testing**: Vitest (unit), Playwright (E2E)
- **Content**: `src/content/blog/` — markdown/MDX with structured frontmatter

### Commands
```bash
npm run dev        # local dev
npm run build      # production build
npm run test       # vitest unit tests
npm run test:e2e   # playwright E2E
```

### Blog Frontmatter Required Fields
```yaml
draft: bool
title: string
publishDate: "YYYY-MM-DD HH:mm"
seoTitle: string
seoDescription: string
author: string
image: { src, alt }
category: string
tags: []
keywords: []
```

### Conventions
- Branch format: `{issue#}-{slug}`
- Main deploy branch: `Netlify-main`
- Blog images: `/public/images/blog_covers/`
- No mock DB in tests — use real connections (prod parity)
- Content schema is permissive; GEO metadata fields in frontmatter are extended, not schema-validated
- Clear `.astro` data store cache if blog body renders empty: `rm -rf .astro`

### Design
- Emerald design system (issue #312), branch `task/312-emerald-design-system`
- Dark mode via CSS custom properties — three-layer theming (Tailwind + CSS vars + component)
- `theme-color` meta tag syncs at runtime

---

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
