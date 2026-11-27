# Graph Report - .  (2026-11-10)

## Corpus Check
- Large corpus: 228 files · ~1,673,901 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 625 nodes · 745 edges · 89 communities (46 shown, 43 thin omitted)
- Extraction: 88% EXTRACTED · 12% INFERRED · 0% AMBIGUOUS · INFERRED: 88 edges (avg confidence: 0.87)
- Token cost: 135,076 input · 0 output

## Community Hubs (Navigation)
- Author Profile & Community
- Dev Tooling Deps
- Lockfile & Native Deps
- CI, Deploy & Supabase Docs
- Buttons, Links & Vue Router
- TypeScript & Speaking
- Supabase View Tracking
- Events Listing
- TS Path Aliases
- Blog Content & Schema
- GEO Series
- Homepage Sections
- Learning Projects & Layout
- Nav & Theme Shell
- Vue I18n
- Event Detail Pages
- Mentorship & Career Growth
- Astro Core Deps
- Portfolio Page
- Digital Garden & Pricing
- Astro Config & Remark
- Conference Logos
- UI Primitives
- About Page
- Partytown Proxy
- Contact Form & Button
- Claude Guidelines
- Cal Booking
- View Counter
- Content Config
- Legacy Content Config
- Content Validation
- Env Types
- Robots.txt
- Speaking Event Types
- Email Sending
- astro-icon
- astro-microsoft-clarity-integration
- @astrojs/markdown-remark
- @astrojs/netlify
- @astrojs/partytown
- @astrojs/react
- autoprefixer
- @calcom/embed-react
- db/config.ts
- accessibility.spec.ts
- responsive.spec.js
- @fingerprintjs/fingerprintjs
- @fontsource-variable/inter
- @fortawesome/fontawesome-svg-core
- github-slugger
- @iconify/json
- .mcp.json
- mdast-util-to-string
- @microsoft/clarity
- nodemailer
- astro-embed
- astro-seo
- astro-social-share
- react
- react-dom
- reading-time
- @sendgrid/mail
- sharp
- simple-icons-astro
- @supabase/supabase-js
- tailwindcss
- Styling System Documentation
- tailwind.config.cjs

## God Nodes (most connected - your core abstractions)
1. `Nerando Johnson Portfolio & Developer Website` - 20 edges
2. `Nerando Johnson (@nerajno)` - 19 edges
3. `scripts` - 17 edges
4. `Vue 3` - 10 edges
5. `City Comparison Tool` - 9 edges
6. `11 in 11: Concepts Learnt or Relearnt from Zero Day` - 8 edges
7. `Vue-elingual: Teaching Your App to Speak Multiple Languages` - 8 edges
8. `11 JavaScript Fundamentals for Vue Developers` - 8 edges
9. `Start With the End in Mind: Shipping Side Projects` - 8 edges
10. `GEO's Cousins: SEO, AEO, GEO, and LLMO` - 8 edges

## Surprising Connections (you probably didn't know these)
- `Nerando Johnson Portfolio & Developer Website` --references--> `developingdvlpr.com`  [INFERRED]
  README.md → public/llms.txt
- `freeCodeCamp` --semantically_similar_to--> `freeCodeCamp`  [INFERRED] [semantically similar]
  src/content/blog/2019/My-2Cents-on-How-To-Build-A-Beginner-Friendly-Developer-Community.md → public/llms.txt
- `Nerando Johnson (@nerajno)` --references--> `Vue-elingual: Teaching Your App to Speak Multiple Languages`  [INFERRED]
  public/llms.txt → src/content/blog/2024/Vue-elingual-Teaching-Your-App-to-Speak-Multiple-Languages.md
- `Nerando Johnson (@nerajno)` --references--> `11 JavaScript Fundamentals for Vue Developers`  [INFERRED]
  public/llms.txt → src/content/blog/2025/11-JavaScript-Fundamentals-for-Vue-Developers.md
- `Playwright Tests Workflow` --implements--> `Playwright`  [INFERRED]
  .github/workflows/playwright.yml → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Supabase View Counter Pipeline** — docs_deploy_views_api_endpoint, docs_supabase_setup_update_views, docs_supabase_setup_views_table, docs_supabase_setup_row_level_security, readme_view_tracking [INFERRED 0.85]
- **Supabase Function Security Hardening** — docs_supabase_security_fix_supabase_security_fix, docs_supabase_quick_fix_quick_fix, docs_supabase_security_fix_security_definer_warning, docs_supabase_security_fix_mutable_search_path_warning, docs_supabase_security_fix_security_invoker [EXTRACTED 1.00]
- **Early-Career Growth Advice Series** — src_content_blog_2019_hackathons_a_junior_developers_growth_tool_post, src_content_blog_2021_6_strategies_learned_from_6_months_of_job_hunting_post, src_content_blog_2022_developer_networking_tools_a_brief_irl_edition_post, src_content_blog_2023_so_this_is_your_1st_tech_conference_attendeeedition_post, src_content_blog_2023_so_this_is_your_1st_tech_conference_volunteeredition_post, src_content_blog_2023_how__to_be_mentored_post [INFERRED 0.75]
- **AI/Search Optimization Family (SEO, AEO, GEO, LLMO)** — src_content_blog_2025_geo_explained_geo, src_content_blog_2026_geo_cousins_aeo, src_content_blog_2026_geo_cousins_llmo, src_content_blog_2026_geo_cousins_seo, src_content_blog_2025_geo_applied_geo_astro_components [EXTRACTED 1.00]
- **Vue 3 Fundamentals tutorial series** — src_content_blog_2026_seeing_vue_clearly_the_basics_article, src_content_blog_2026_your_first_vue_3_app_from_zero_to_running_article, src_content_blog_2026_vue3_template_syntax_and_directives_article, src_content_blog_2026_reactivity_in_vue3_how_vue_makes_your_ui_feel_alive_article, src_content_blog_2026_vue3_components_building_reusable_ui_blocks_article, src_content_blog_2026_finding_your_route_mastering_vue_router_article, src_content_blog_2026_vue3_fundamentals_bonus_city_comparison_article [INFERRED 0.95]
- **Career growth via learning, teaching, mentoring, networking** — src_content_blog_2026_the_developers_flywheel_learn_build_teach_learn_build_teach_loop, src_content_blog_2026_skills_to_bills_demonstrated_competency_speak_build_share, src_content_blog_2025_how__to_be_mentored_v2__building_resilient_tech_careers_through_strategic_mentorship_resilient_tech_careers, src_content_blog_2026_scheming_is_always_good_developers_guide_to_networking_network_as_schema, src_content_blog_2026_people_skills_are_technical_skills_and_i_can_prove_it_soft_skills_are_technical [INFERRED 0.75]

## Communities (89 total, 43 thin omitted)

### Community 0 - "Author Profile & Community"
Cohesion: 0.06
Nodes (47): ConnectTech 2023, developingdvlpr.com, freeCodeCamp, llms.txt AI Site Summary, Nerando Johnson (@nerajno), Vue Conf 2024, Flatiron School, Hackathons (+39 more)

### Community 1 - "Dev Tooling Deps"
Cohesion: 0.04
Nodes (45): @axe-core/playwright, cheerio, clsx, eslint, @eslint/js, eslint-plugin-astro, globals, happy-dom (+37 more)

### Community 2 - "Lockfile & Native Deps"
Cohesion: 0.05
Nodes (43): @esbuild/linux-x64, @libsql/linux-x64-gnu, allowScripts, esbuild@0.28.1, esbuild@0.28.2, fsevents@2.3.3, sharp@0.33.5, sharp@0.34.5 (+35 more)

### Community 3 - "CI, Deploy & Supabase Docs"
Cohesion: 0.07
Nodes (40): Install Playwright Browsers Step, Playwright Tests Workflow, Run Playwright Tests Step, Upload Playwright Report Artifact, Bot Detection, Netlify Deployment (Dashboard/CLI/Git auto-deploy), View Rate Limiting (60s), Supabase Setup & Deployment Guide (+32 more)

### Community 4 - "Buttons, Links & Vue Router"
Cohesion: 0.08
Nodes (37): Accessibility (ARIA APG), Buttons vs. Links: Choosing the Right Element, Building It Into a Component Library, Core Rule: Buttons Act, Links Navigate, Finding Your Route: Mastering Vue Router, Dynamic Route Segments, Navigation Guards, router-view (+29 more)

### Community 5 - "TypeScript & Speaking"
Cohesion: 0.07
Nodes (31): Building with TypeScript: A Lego-Based Guide, Asynchronous Programming, Functions and Closures, Lego Building Analogy for TypeScript, Variable Scope and Hoisting, TypeScript, Carolina Codes 2025: My First-Time Speaker Experience, Carolina Code Conference 2025 (+23 more)

### Community 6 - "Supabase View Tracking"
Cohesion: 0.10
Nodes (25): getAllViewCounts(), getViewCount(), hashIdentifier(), incrementViewCount(), isBot(), isRateLimited(), IMPORTANT: Bots are allowed to access content, we just don't count them, supabase (+17 more)

### Community 7 - "Events Listing"
Cohesion: 0.12
Nodes (10): initialPastEvents, pastEvents, remainingPastEvents, upcomingEvents, MediaItem, otherMediaData, speakingData, SpeakingEvent (+2 more)

### Community 8 - "TS Path Aliases"
Cohesion: 0.10
Nodes (20): assets/*, astro/client, astro/tsconfigs/base, components/*, layouts/*, lib/*, pages/*, utils/* (+12 more)

### Community 9 - "Blog Content & Schema"
Cohesion: 0.14
Nodes (11): buildArticleSchema(), buildFAQSchema(), buildSpeakableSchema(), FAQ, PERSON_ENTITY, sanitizeSchema(), entrySlug, postUrl (+3 more)

### Community 10 - "GEO Series"
Cohesion: 0.21
Nodes (15): GEO: Applied [Astro Implementation], GEO Principles in Astro Components, GEO Blog Series, Measuring GEO Success, GEO: Explained, Generative Engine Optimization (GEO), GEO vs. SEO Differences, Answer Engine Optimization (AEO) (+7 more)

### Community 11 - "Homepage Sections"
Cohesion: 0.16
Nodes (6): features, technologies, faqData, seoConfig, structuredData, webPageData

### Community 12 - "Learning Projects & Layout"
Cohesion: 0.19
Nodes (4): getGrowthStatusConfig(), projects, canonicalURL, resolvedImageWithDomain

### Community 13 - "Nav & Theme Shell"
Cohesion: 0.17
Nodes (3): seoConfig, structuredData, getFormattedDate()

### Community 14 - "Vue I18n"
Cohesion: 0.17
Nodes (13): Lazy Loading Locales, i18n Pluralization, Vue-elingual: Teaching Your App to Speak Multiple Languages, Translation Composable (Composition API), Translation Namespaces, Vue 3, Vue I18n (Internationalization), Object Destructuring (+5 more)

### Community 15 - "Event Detail Pages"
Cohesion: 0.18
Nodes (5): prerender, seoConfig, structuredData, prerender, seoConfig

### Community 16 - "Mentorship & Career Growth"
Cohesion: 0.18
Nodes (11): How !To Be Mentored V2, Mentee Growth Strategies, Mentor Guidance, Resilient Tech Careers via Strategic Mentorship, Skills to Bills: Demonstrated Competency, Imposter Syndrome, Speak It, Build It, Share It, The Developer's Flywheel: Learn, Build, Teach (+3 more)

### Community 17 - "Astro Core Deps"
Cohesion: 0.22
Nodes (9): astro, @astrojs/mdx, @astrojs/sitemap, dependencies, astro, astro-navbar, @astrojs/mdx, @astrojs/sitemap (+1 more)

### Community 18 - "Portfolio Page"
Cohesion: 0.22
Nodes (5): buildCollectionSchema(), allProjects, allTags, seoConfig, structuredData

### Community 19 - "Digital Garden & Pricing"
Cohesion: 0.22
Nodes (5): seoConfig, structuredData, projects, seoConfig, structuredData

### Community 21 - "Conference Logos"
Cohesion: 0.29
Nodes (4): conferenceLogo, conferenceLogos, ConferenceSeries, ConferenceType

### Community 23 - "About Page"
Cohesion: 0.33
Nodes (5): funFacts, dayOfYear, seoConfig, structuredData, today

### Community 24 - "Partytown Proxy"
Cohesion: 0.57
Nodes (6): GET(), isAllowedHost(), NULL_BODY_STATUSES, POST(), readBody(), resolveTarget()

### Community 26 - "Claude Guidelines"
Cohesion: 0.40
Nodes (5): Claude Behavioral Guidelines, Goal-Driven Execution, Simplicity First, Surgical Changes, Think Before Coding

### Community 29 - "Content Config"
Cohesion: 0.50
Nodes (3): blogCollection, collections, teamCollection

### Community 30 - "Legacy Content Config"
Cohesion: 0.50
Nodes (3): blogCollection, collections, teamCollection

## Ambiguous Edges - Review These
- `GEO: Applied [Astro Implementation]` → `Blog Post Template`  [AMBIGUOUS]
  src/content/blog/BLOG_TEMPLATE.md · relation: conceptually_related_to

## Knowledge Gaps
- **239 isolated node(s):** `astro-docs`, `Views`, `pages`, `devices`, `name` (+234 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **43 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `GEO: Applied [Astro Implementation]` and `Blog Post Template`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `dependencies` connect `Astro Core Deps` to `Lockfile & Native Deps`, `astro-icon`, `astro-microsoft-clarity-integration`, `@astrojs/markdown-remark`, `@astrojs/netlify`, `@astrojs/partytown`, `@astrojs/react`, `autoprefixer`, `@calcom/embed-react`, `@fingerprintjs/fingerprintjs`, `@fontsource-variable/inter`, `@fortawesome/fontawesome-svg-core`, `github-slugger`, `@iconify/json`, `mdast-util-to-string`, `@microsoft/clarity`, `nodemailer`, `astro-embed`, `astro-seo`, `astro-social-share`, `react`, `react-dom`, `reading-time`, `@sendgrid/mail`, `sharp`, `simple-icons-astro`, `@supabase/supabase-js`, `tailwindcss`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Tooling Deps` to `Lockfile & Native Deps`?**
  _High betweenness centrality (0.029) - this node is a cross-community bridge._
- **Why does `Nerando Johnson (@nerajno)` connect `Author Profile & Community` to `Vue I18n`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Are the 16 inferred relationships involving `Nerando Johnson (@nerajno)` (e.g. with `Hackathons - A Junior Developer's Growth Tool` and `My #2Cents on Building a Beginner Friendly Developer Community`) actually correct?**
  _`Nerando Johnson (@nerajno)` has 16 INFERRED edges - model-reasoned connections that need verification._
- **What connects `astro-docs`, `Views`, `pages` to the rest of the system?**
  _239 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Author Profile & Community` be split into smaller, more focused modules?**
  _Cohesion score 0.06105457909343201 - nodes in this community are weakly interconnected._