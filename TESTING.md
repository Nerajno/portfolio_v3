# Testing Guide

How testing works in this repo: what exists, how to run it, and how to add more.

## Stack

| Layer | Tool | Where |
|---|---|---|
| Unit / component | [Vitest](https://vitest.dev) + happy-dom + Testing Library | `tests/`, `src/**/*.test.ts` |
| End-to-end | [Playwright](https://playwright.dev) (Chromium, Firefox, WebKit, mobile viewports) | `e2e/` |
| Accessibility | `@axe-core/playwright` (WCAG 2.1/2.2 AA) | `e2e/accessibility.spec.ts` |
| Structured data | Schema/JSON-LD assertions | `e2e/specs/aeo-schema.spec.ts` |

## Running Tests

```bash
npm run test          # unit tests, watch mode
npm run test:run      # unit tests, single pass (what CI runs)
npm run test:coverage # unit tests + coverage report
npm run test:e2e      # Playwright suite (starts the dev server itself)
npm run test:e2e:ui   # Playwright with interactive UI
npm run test:all      # unit + e2e, single pass
```

Playwright's `webServer` config boots `npm run dev` on `http://localhost:4321`
automatically and reuses an already-running server, so no manual setup is needed.

Run a single e2e file:

```bash
npm run test:e2e -- e2e/specs/portfolio.spec.js
```

## Writing Tests

### Unit / component tests

- Live in `tests/components/` (components) or next to the code as `*.test.ts` (utils, libs).
- Environment is happy-dom; `tests/setup.ts` wires `@testing-library/jest-dom` matchers.
- Mock network boundaries (Supabase, fetch) — unit tests must not make real API calls.

### E2E tests

- Live in `e2e/specs/` as `*.spec.js`, grouped per page (`homepage.spec.js`, `portfolio.spec.js`, …).
- Pattern: one `test.describe` per page with a `beforeEach` that does `page.goto(path)`.
- Prefer stable selectors: ids (`#projects-grid`), aria-labels, and `itemprop` attributes
  over CSS classes that change with styling.
- Content-dependent assertions should tolerate content growth
  (`expect(count).toBeGreaterThan(0)` rather than exact counts).

### Accessibility

Every new page should be added to the `pages` array in `e2e/accessibility.spec.ts`
so it gets an axe scan, skip-link check, and landmark check.

## CI

`.github/workflows/playwright.yml` runs two jobs on pushes and PRs to
`Netlify-main` (the deploy branch), `main`, and `master`:

1. **unit** — `npm run test:run`
2. **test** — full Playwright suite, with the HTML report uploaded as an artifact

## Troubleshooting

- **Astro dev server error page in e2e runs** — transient SSR hiccup; the a11y suite
  skips automatically, re-run to confirm. Content validation runs via `predev`, so a
  frontmatter error in `src/content/` can also fail server startup: check its output.
- **Flaky e2e locally, fine in CI** — kill stale dev servers on port 4321;
  `reuseExistingServer: true` will happily attach to an old one with stale code.
- **Coverage thresholds** — configured in `vitest.config.ts` (60%); failures list the
  files dragging the number down.

## Known Gaps (tracked in #273)

- Duplicate config pairs (`vitest.config.js`/`.ts`, `playwright.config.js`/`.ts`,
  `tests/setup.js`/`.ts`) with differing content — the `.ts` files are the ones the
  tools load; the `.js` copies should be verified and removed.
- No Codecov/coverage tracking in CI.
- No visual regression or performance (Lighthouse) testing yet.
- Netlify build does not run tests before deploy; CI on `Netlify-main` is the gate.
