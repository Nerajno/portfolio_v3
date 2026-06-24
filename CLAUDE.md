# Astro Portfolio v3

## Stack
- **Framework**: Astro 4 + MDX, deployed on Netlify
- **UI**: Vue 3 (islands), React (islands), Tailwind CSS
- **Analytics**: Google Analytics + Microsoft Clarity via Partytown
- **Testing**: Vitest (unit), Playwright (E2E)
- **Content**: `src/content/blog/` — markdown/MDX with structured frontmatter

## Commands
```bash
npm run dev        # local dev
npm run build      # production build
npm run test       # vitest unit tests
npm run test:e2e   # playwright E2E
```

## Blog Frontmatter Required Fields
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

## Conventions
- Branch format: `{issue#}-{slug}`
- Main deploy branch: `Netlify-main`
- Blog images: `/public/images/blog_covers/`
- No mock DB in tests — use real connections (prod parity)
- Content schema is permissive; GEO metadata fields in frontmatter are extended, not schema-validated
- Clear `.astro` data store cache if blog body renders empty: `rm -rf .astro`

## Design
- Emerald design system (issue #312), branch `task/312-emerald-design-system`
- Dark mode via CSS custom properties — three-layer theming (Tailwind + CSS vars + component)
- `theme-color` meta tag syncs at runtime
