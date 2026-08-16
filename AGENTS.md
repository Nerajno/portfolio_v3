# AGENTS.md

Guidance for AI agents working in this repo. These instructions are authoritative for code
generation, verification, and conventions. `CLAUDE.md` references this file; keep all guidance here.

Behavioral guidelines (surgical diffs, no speculation) are in §1; project facts follow in §2–§11.

## 1. Core behavioral guidelines

These reduce common LLM coding mistakes. **Tradeoff:** they bias toward caution over speed. For
trivial tasks, use judgment.

### 1.1 Think before coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 1.2 Simplicity first

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 1.3 Surgical changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it — don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 1.4 Goal-driven execution

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

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant
clarification.

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to
overcomplication, and clarifying questions come before implementation rather than after mistakes.

## 2. Project overview

Nerando's personal portfolio/blog, **developingdvlpr.com**, built with **Astro** (SSR, Netlify
adapter), **Tailwind v3**, **MDX content collections**, **React 19 islands**, and a Supabase-backed
view counter. Heavily SEO/GEO focused (JSON-LD structured data, sitemap, robots).

## 3. Tech stack

- **Language:** TypeScript (strict `strictNullChecks`, `baseUrl: src`) + some legacy `.js`
- **Meta-framework:** Astro `^7.0.5`, SSR mode `output: "server"`, Netlify adapter, Partytown for 3rd-party scripts
- **Styling:** Tailwind CSS v3 (`tailwind.config.cjs`) + `@tailwindcss/typography`, PostCSS, custom semantic color palette (`primary`, `bg`, `text`, `border` tokens), `darkMode: 'class'`
- **UI islands:** React 19 (`@astrojs/react`) — one island today (`CalBooking.tsx`, Cal.com embed); most components are plain Astro with inline `<script>` where needed
- **Content:** MDX content collections (`blog`, `team`) via `src/content.config.ts` (Astro 5+ `loader: glob` API)
- **Data layer (backend):** Supabase (`@supabase/supabase-js`) — view counting via `post_views` table + RPCs; SendGrid (`@sendgrid/mail`) for email; no ORM. An abandoned Astro DB config exists in `db/config.ts` (see gotchas)
- **Tests:** Vitest (`vitest.config.js`) + Playwright (`playwright.config.ts`) with axe-core
- **Dev tooling:** Prettier, ESLint (config lives at `src/styles/eslint.config.js`), `npm-check`
- **Icons/fonts:** astro-icon (`bx`, `simple-icons`, `mdi`), Fontsource Inter Variable

## 4. Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server (runs `validate-content.mjs` in `predev`) |
| `npm run build` | Production build (`astro build --remote`; runs `validate-content.mjs` in `prebuild`) |
| `npm run preview` | Preview the production build |
| `npm run astro ...` | Pass-through to astro CLI |
| `npm test` / `npm run test:run` | Vitest watch / run once |
| `npm run test:coverage` | Vitest with v8 coverage |
| `npm run test:e2e` | Playwright e2e suite |
| `npm run test:all` | Unit + e2e |
| `astro check` | Type/astro diagnostics (part of `build` via Netlify) |

There is no dedicated `lint` or `format` script; run ESLint via `npx eslint` and format via
`npx prettier --write` against changed files.

## 5. Source layout & conventions

- **Path aliases** (`tsconfig.json`): `@lib/*` → `src/lib/*`, `@utils/*`, `@components/*`, `@layouts/*`, `@assets/*`, `@pages/*`. Prefer aliases over relative imports.
- **Pages:** `src/pages/*.astro` + dynamic routes (`blog/[slug]`, `case-study/[slug]`, `events/[id]`, `learning-plot/[slug]`, `learning-projects/[slug]`, `series/[seriesName]`). API routes live in `src/pages/api/*.ts`.
- **Per-route rendering:** `prerender = true` (+ `revalidate: 60` ISR on blog/series) for content routes; `prerender = false` for pages needing server data (contact). Match the route's existing export.
- **Components:** `src/components/` — plain `.astro` by default; use a React `.tsx` island ONLY for interactive third-party embeds (see `CalBooking.tsx`). Inline `<script>` in Astro components for small interactions, never global JS.
- **Layouts/styling:** Tailwind utility classes + semantic tokens (`bg-primary`, `text-text-primary`, etc.) from `tailwind.config.cjs`. Follow existing component patterns (e.g., `container.astro`, `sectionhead.astro`).
- **Data:** `src/data/` (JS/TS modules with typed exports) — `projects.js`, `speakingData.ts`, `otherMediaData.ts`, `funFacts.js`.
- **Lib:** `src/lib/supabase.ts` (view-counting domain logic + client), `src/lib/schema.ts` (JSON-LD builders). `src/utils/` for small helpers.
- **Types:** centralized in `src/types.ts` and `src/types/`.

## 6. Content collections (MDX)

Active schema lives in **`src/content.config.ts`** (Astro 5+/7 API). Two collections:

- **`blog`** — entries in `src/content/blog/**/*.{md,mdx}`. Frontmatter includes `title`, `snippet`,
  `image{src,alt}`, `publishDate`, `updatedDate?`, `author` (default `@nerajno`), `category`, `tags`,
  `draft`, plus SEO fields (`description`, `seoTitle`, `ogImage`…) and optional `series{name,order}`.
  Blog posts often carry extra tolerated keys (`schema`, `entities`, `aiOptimization`…) for GEO/AI-search optimization — keep them consistent with neighboring posts.
- **`team`** — schema exists; directory not yet populated.

New posts must satisfy the zod schema in `content.config.ts` or `npm run build` fails
(`validate-content.mjs` checks collections too).

## 7. Backend & data flow (read before touching)

- **View counter:** client `src/utils/viewTracker.ts` → `POST /api/views/[slug].ts` → `src/lib/supabase.ts`
  (`isBot` detection, IP hashing, rate limiting) → upsert into `post_views`. GET endpoint serves cached counts. Do not change this flow without verifying the existing unit tests.
- **Email:** `src/pages/api/send-email.ts` (SendGrid) and `src/utils/email.ts` (nodemailer). **The live contact form (`contactform.astro`) posts to Web3Forms directly** — the API endpoints are not currently wired to it.
- **Analytics:** Microsoft Clarity (integration gated on `PUBLIC_CLARITY_ID` env), GA4 via Partytown with a proxy at `/api/partytown-proxy.ts` (allowlisted hosts).
- **Env vars:** defined in `src/env.d.ts` and `.env.example` (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY?`, `SENDGRID_API_KEY`…). Never commit secrets.

## 8. SEO / structured data

The site is GEO/SEO-optimized. JSON-LD is generated centrally in `src/lib/schema.ts`
(`buildArticleSchema`, `buildSpeakableSchema`, `buildFAQSchema`, `buildCollectionSchema`,
`PERSON_ENTITY`, `sanitizeSchema`). Pages compose lookup meta via `astro-seo` plus JSON-LD script
tags. If a page needs structured data, extend/extend via the `@lib/schema` builders rather than
hand-writing JSON-LD.

## 9. Testing

- **Unit (Vitest):** `tests/**` + `src/**/*.test.*`. Happy-dom, globals enabled, setup at `tests/setup.js`. Follow existing patterns (`tests/components/*.test.js`) and Astro's `getViteConfig`.
- **E2E (Playwright):** `e2e/*.spec.*` and `e2e/specs/*.spec.*` (homepage, blog, contact, responsive, theme-toggle, aeo-schema…). File-level `test.describe` in the same groups. axe-core used for a11y in e2e and unit tests.
- When adding behavior, add/adjust tests. Run `npm run test:run` and `npm run test:e2e` before finishing.

## 10. Workspace gotchas (active pitfalls)

- **`src/content/config.ts` is legacy** (old `defineCollection` API). The loader actually used is
  `src/content.config.ts` (Astro 5+/7). Update schema in `content.config.ts` only, and keep the two in sync or delete the legacy file — but don't silently use the legacy one.
- **`db/` (Astro DB)** is dormant: `db/config.ts` defines a `Views` table but the `db()` integration is NOT in `astro.config.mjs`. Don't assume Astro DB is active.
- **Root `supabase-*.sql` docs** describe the OLD `views` table shape; code uses `post_views` + RPCs. SQL here is historical documentation.
- **`src/utils/email.ts` (nodemailer)** and the SendGrid endpoint are not wired to any page; `viewTracker.test.ts` references FingerprintJS that the implementation no longer imports (stale test).
- **Don't hand-edit `package.json`** to add packages; use `npm install <pkg>` (or `npx astro add` for official Astro integrations), then reinstall to update `package-lock.json`.

## 11. Delivery checklist

Before finishing any change:

1. Verify against the installed Astro major (see `package.json`) — prefer docs.astro.build over training data.
2. Syntax + type check (`npx astro check` or `npm run build`).
3. Run `npm run test:run`; run `npm run test:e2e` if routes/behavior changed.
4. Follow the §1 behavioral guidelines: surgical diffs, no speculative features, no stray comments.
5. Don't commit unless explicitly asked.