# Graph Report - .  (2026-07-13)

## Corpus Check
- 78 files · ~302,889 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 375 nodes · 322 edges · 68 communities detected
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 34 edges (avg confidence: 0.75)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Vue Router & Navigation|Vue Router & Navigation]]
- [[_COMMUNITY_JavaScript Fundamentals|JavaScript Fundamentals]]
- [[_COMMUNITY_Developer Flywheel Framework|Developer Flywheel Framework]]
- [[_COMMUNITY_Blog Frontmatter & AI Tools|Blog Frontmatter & AI Tools]]
- [[_COMMUNITY_Networking as Database Associations|Networking as Database Associations]]
- [[_COMMUNITY_Mentorship & Career|Mentorship & Career]]
- [[_COMMUNITY_2025 Year Journey|2025 Year Journey]]
- [[_COMMUNITY_Vue SFC Patterns|Vue SFC Patterns]]
- [[_COMMUNITY_AI-Assisted Dev & CSS Topics|AI-Assisted Dev & CSS Topics]]
- [[_COMMUNITY_Developer Networking Tools|Developer Networking Tools]]
- [[_COMMUNITY_View Counter Cache Logic|View Counter Cache Logic]]
- [[_COMMUNITY_View Count API Handlers|View Count API Handlers]]
- [[_COMMUNITY_Carolina Codes Speaker Experience|Carolina Codes Speaker Experience]]
- [[_COMMUNITY_Data Visualization Stack|Data Visualization Stack]]
- [[_COMMUNITY_Portfolio Hero Illustration|Portfolio Hero Illustration]]
- [[_COMMUNITY_Blind Devs & Accessibility Tools|Blind Devs & Accessibility Tools]]
- [[_COMMUNITY_i18n in VueAstro|i18n in Vue/Astro]]
- [[_COMMUNITY_Speaking Event Data Types|Speaking Event Data Types]]
- [[_COMMUNITY_Beginner-Friendly Dev Community|Beginner-Friendly Dev Community]]
- [[_COMMUNITY_Styling System (CSSTailwind)|Styling System (CSS/Tailwind)]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 37|Community 37]]
- [[_COMMUNITY_Community 38|Community 38]]
- [[_COMMUNITY_Community 39|Community 39]]
- [[_COMMUNITY_Community 40|Community 40]]
- [[_COMMUNITY_Community 41|Community 41]]
- [[_COMMUNITY_Community 52|Community 52]]
- [[_COMMUNITY_Community 53|Community 53]]
- [[_COMMUNITY_Community 54|Community 54]]
- [[_COMMUNITY_Community 55|Community 55]]
- [[_COMMUNITY_Community 56|Community 56]]
- [[_COMMUNITY_Community 57|Community 57]]
- [[_COMMUNITY_Community 58|Community 58]]
- [[_COMMUNITY_Community 59|Community 59]]
- [[_COMMUNITY_Community 60|Community 60]]
- [[_COMMUNITY_Community 61|Community 61]]
- [[_COMMUNITY_Community 62|Community 62]]
- [[_COMMUNITY_Community 63|Community 63]]
- [[_COMMUNITY_Community 64|Community 64]]
- [[_COMMUNITY_Community 65|Community 65]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 77|Community 77]]
- [[_COMMUNITY_Community 78|Community 78]]
- [[_COMMUNITY_Community 79|Community 79]]
- [[_COMMUNITY_Community 80|Community 80]]
- [[_COMMUNITY_Community 81|Community 81]]
- [[_COMMUNITY_Community 82|Community 82]]
- [[_COMMUNITY_Community 83|Community 83]]
- [[_COMMUNITY_Community 84|Community 84]]
- [[_COMMUNITY_Community 85|Community 85]]
- [[_COMMUNITY_Community 86|Community 86]]

## God Nodes (most connected - your core abstractions)
1. `11 JavaScript Fundamentals for Vue Developers` - 11 edges
2. `Generative Engine Optimization (GEO)` - 9 edges
3. `Vue Router` - 9 edges
4. `Vue 3` - 9 edges
5. `Perfected Imperfection: My 2025 Journey (EOY 2025)` - 9 edges
6. `Generative Engine Optimization (GEO)` - 8 edges
7. `6 Strategies Learned from 6 months of Job Hunting` - 8 edges
8. `Hero Banner Illustration` - 8 edges
9. `D3.js` - 7 edges
10. `People Skills as Technical Skills Framework` - 7 edges

## Surprising Connections (you probably didn't know these)
- `sendEmail (nodemailer)` --semantically_similar_to--> `POST handler (send-email.ts)`  [INFERRED] [semantically similar]
  utils/email.ts → pages/api/send-email.ts
- `POST()` --calls--> `hashIdentifier()`  [INFERRED]
  pages/api/views/[slug].ts → lib/supabase.ts
- `getLogoByType` --shares_data_with--> `MediaItem interface`  [AMBIGUOUS]
  assets/images/conferences.ts → data/otherMediaData.ts
- `POST()` --calls--> `isBot()`  [INFERRED]
  pages/api/views/[slug].ts → lib/supabase.ts
- `POST()` --calls--> `incrementViewCount()`  [INFERRED]
  pages/api/views/[slug].ts → lib/supabase.ts

## Hyperedges (group relationships)
- **Blog view tracking pipeline (client -> API -> Supabase)** — viewtracker_trackuniqueview, slug_post, supabase_incrementviewcount [EXTRACTED 0.90]
- **Duplicated SpeakingEvent/ProcessedEvent schema across files** — types_processedevent, index_speakingevent, speakingdata_speakingevent [INFERRED 0.75]
- **Duplicate contact-form email sending implementations (nodemailer vs SendGrid)** — email_sendemail, send_email_post, env_d_importmetaenv [INFERRED 0.60]
- **Vue 3 Fundamentals Series** — finding_your_route_vue_router, your_first_vue3_app_vue3, reactivity_vue3_vue3, vue3_components_vue3, vue3_fundamentals_bonus_vue3 [EXTRACTED 0.95]
- **GEO Optimization Series (Explained + Applied + Template)** — geo_explained_geo, geo_applied_geo, blog_template_geo_fields [INFERRED 0.80]
- **Developer Networking Practices Across Articles** — developer_networking_tools_networking, hackathons_growth_tool_networking, first_tech_conference_volunteer_networking [INFERRED 0.75]
- **Vue 3 Fundamentals Series (Parts 1 & 5 in this chunk)** — seeing_vue_article, vue3_directives_article [EXTRACTED 0.95]
- **Career Networking & Mentorship Guides** — mentorship_v2_article, scheming_article, tech_conference_article, six_strategies_article [INFERRED 0.80]
- **Learn-Build-Teach Growth Loop Articles** — flywheel_article, keep_learning_article, eoy2025_article [INFERRED 0.75]

## Communities

### Community 0 - "Vue Router & Navigation"
Cohesion: 0.08
Nodes (27): Series Fields (Multi-Part Blog), Evan You, Navigation Guards, router-link, router-view, useRoute, useRouter, Vue 3 (+19 more)

### Community 1 - "JavaScript Fundamentals"
Cohesion: 0.08
Nodes (26): Array Methods, Arrow Functions, 11 JavaScript Fundamentals for Vue Developers, Closures, Object Destructuring, Error Handling, Modules and Exports, Optional Chaining (+18 more)

### Community 2 - "Developer Flywheel Framework"
Cohesion: 0.1
Nodes (22): The Developer's Flywheel: Learn, Build, Teach, Build Phase (Make It Real), Feynman Technique, Hardware Tinkering Stretch Goal, Learn Phase (Absorb Deeply), Mentorship Stretch Goal, Teach Phase (Share the Gap), Now What: How To Keep Learning after Landing the 1st Tech Job (+14 more)

### Community 3 - "Blog Frontmatter & AI Tools"
Cohesion: 0.12
Nodes (18): Frontmatter Schema, GEO Optimization Fields, Blog Post Template, Astro Framework, ChatGPT, Claude, Google Gemini, Generative Engine Optimization (GEO) (+10 more)

### Community 4 - "Networking as Database Associations"
Cohesion: 0.12
Nodes (18): Scheming Is Always Good: A Developer's Guide to Networking, belongs_to (One-to-One Connections), Database Association Metaphor for Networking, has_and_belongs_to_many (Community Engagement), has_many (Groups, Stages, Audiences), has_many :through (Warm Introduction), 6 Strategies Learned from 6 months of Job Hunting, LinkedIn Presence Strategy (+10 more)

### Community 5 - "Mentorship & Career"
Cohesion: 0.12
Nodes (17): Career Development, Mentee, Mentor, Mentorship, Adaptability (Tenet 5), Attention to Detail (Tenet 6), Communication (Tenet 1), People Skills as Technical Skills Framework (+9 more)

### Community 6 - "2025 Year Journey"
Cohesion: 0.12
Nodes (16): Perfected Imperfection: My 2025 Journey (EOY 2025), Astro Portfolio Project (Astro 5 + Supabase + Clarity), Carolina Codes 2025 Speaking Debut, Discover Jackson (Hackathon Project, Kendo UI), FreeCodeCamp Data Visualization Certification (D3.js), Jekyll Digital Garden, Rule of Three (Tool Adoption Heuristic), Systems Thinking (Junior to Mid-Level Shift) (+8 more)

### Community 7 - "Vue SFC Patterns"
Cohesion: 0.14
Nodes (15): defineEmits, defineProps, Scoped Styles, Single-File Component, WeatherCard.vue (example component), City Comparison Tool (project), computed, defineEmits (+7 more)

### Community 8 - "AI-Assisted Dev & CSS Topics"
Cohesion: 0.13
Nodes (15): Using AI Assistants Effectively, 11 in 11: Concepts Learnt or Relearnt from Zero Day, CSS Container Queries, Developer Self-Care, Tailwind CSS vs Vanilla CSS, TypeScript Enums, Web Component Slots, Zod (Schema Validation Library) (+7 more)

### Community 9 - "Developer Networking Tools"
Cohesion: 0.18
Nodes (13): Dev Branded Gear (Tool #1), Community Engagement (Tool #3), Developer Networking, Volunteering (Tool #2), freeCodeCamp Atlanta, Networking, RenderATL, Tech Conference Volunteering (+5 more)

### Community 10 - "View Counter Cache Logic"
Cohesion: 0.3
Nodes (8): getViewCount(), hashIdentifier(), incrementViewCount(), isBot(), isRateLimited(), updateRateLimitCache(), GET(), POST()

### Community 11 - "View Count API Handlers"
Cohesion: 0.24
Nodes (11): GET handler ([slug].ts), POST handler ([slug].ts), getViewCount (lib/supabase.ts), hashIdentifier, incrementViewCount, isBot, isRateLimited, updateRateLimitCache (+3 more)

### Community 12 - "Carolina Codes Speaker Experience"
Cohesion: 0.18
Nodes (11): Carolina Codes 2025: My First-Time Speaker Experience, Diana Pham (Gamification Psychology), Ethan Foulkes (10 Words for Building Software), Matt "Kelly" Williams (Keynote: Fundamentals), "The Importance of READMEs" Talk, Principles of Good Documentation, Essential README Elements, JSDoc (+3 more)

### Community 13 - "Data Visualization Stack"
Cohesion: 0.2
Nodes (10): D3.js, Data Visualization, Microsoft Excel, freeCodeCamp Data Visualization Certification, JavaScript, MARTA Hackathon, Matplotlib, ObservableHQ (+2 more)

### Community 14 - "Portfolio Hero Illustration"
Cohesion: 0.31
Nodes (9): Waving Astronaut Character, Hero Banner Illustration, Flat Vector Illustration Style, Cratered Moon Surface, Portfolio Hero Section Branding, Pink Rocket Illustration, Shooting Star / Comet, Space/Astronaut Theme (+1 more)

### Community 15 - "Blind Devs & Accessibility Tools"
Cohesion: 0.29
Nodes (7): Blind Software Engineers, Refreshable Braille Display, Florian Beijers, IBM, Jim Thatcher, NVDA, Screen Readers

### Community 16 - "i18n in Vue/Astro"
Cohesion: 0.29
Nodes (7): Vue-elingual: Teaching Your App to Speak Multiple Languages, Astro Integration Notes (i18n), Vue 3 Composition API (i18n usage), Internationalization (i18n), Lazy Loading Translations, Pluralization Handling, vue-i18n Library

### Community 17 - "Speaking Event Data Types"
Cohesion: 0.5
Nodes (5): getLogoByType, SpeakingEvent interface (types/index.ts), MediaItem interface, SpeakingEvent interface (data/speakingData.ts), ProcessedEvent interface (types.ts)

### Community 18 - "Beginner-Friendly Dev Community"
Cohesion: 0.4
Nodes (5): My #2Cents on Building a Beginner Friendly Developer Community, Celebrating Small Victories, Code of Conduct, freeCodeCamp, Accessible Physical Meetup Space

### Community 19 - "Styling System (CSS/Tailwind)"
Cohesion: 0.4
Nodes (5): component_styles.css, css_variables.css, Styling System Documentation (styling-resources README), tailwind_config.js, Theme Toggle (dark/light mode)

### Community 20 - "Community 20"
Cohesion: 0.4
Nodes (5): Man Walking in a Room (Blog Cover), Mood: quiet, contemplative, minimalist, Man walking across a modern open room, Likely topic: personal/developer journey or reflective process piece, Man Walking Through Mid-Century Modern Room

### Community 21 - "Community 21"
Cohesion: 0.4
Nodes (5): Networking/Career Connections Metaphor, Spider Web with Dew Drops (Networking Blog Cover), Dew Drops on Web Strands, Spider Web Visual Motif, Teal-to-Warm-Orange Backlit Gradient

### Community 22 - "Community 22"
Cohesion: 0.5
Nodes (4): Documentation, GitHub, Open Source, README

### Community 23 - "Community 23"
Cohesion: 0.5
Nodes (4): Co-Running Blog Cover Image, Mood: Motivational, Warm, Aspirational, Two Silhouetted Runners at Sunset, Likely Topic: Pair Programming / Collaborative Coding (Co-Running)

### Community 24 - "Community 24"
Cohesion: 0.67
Nodes (4): Stack of Books, Thinking Man Blog Cover, Reflective/Contemplative Mood, Pensive Man in Suit

### Community 27 - "Community 27"
Cohesion: 1.0
Nodes (2): GET(), getRobotsTxt()

### Community 28 - "Community 28"
Cohesion: 0.67
Nodes (3): Pea Seedlings in Peat Pots (Windowsill Gardening Photo), Likely Blog Post Cover/Hero Image for Gardening Topic, Pea Seedlings with Bamboo Stakes

### Community 29 - "Community 29"
Cohesion: 0.67
Nodes (3): Day in a Garden - Blog Cover, Nature-in-the-City / Springtime Mood, Urban Park Scene (Madison Square Park style)

### Community 37 - "Community 37"
Cohesion: 1.0
Nodes (2): getFormattedDate, formatDate

### Community 38 - "Community 38"
Cohesion: 1.0
Nodes (2): ImportMetaEnv interface, supabase client

### Community 39 - "Community 39"
Cohesion: 1.0
Nodes (2): sendEmail (nodemailer), POST handler (send-email.ts)

### Community 40 - "Community 40"
Cohesion: 1.0
Nodes (2): watch, watchEffect

### Community 41 - "Community 41"
Cohesion: 1.0
Nodes (2): Niya Panamdanam, Production Code Experience

### Community 52 - "Community 52"
Cohesion: 1.0
Nodes (1): blogCollection

### Community 53 - "Community 53"
Cohesion: 1.0
Nodes (1): teamCollection

### Community 54 - "Community 54"
Cohesion: 1.0
Nodes (1): collections export

### Community 55 - "Community 55"
Cohesion: 1.0
Nodes (1): ImportMeta interface

### Community 56 - "Community 56"
Cohesion: 1.0
Nodes (1): ProcessedEvent interface (types/index.ts)

### Community 57 - "Community 57"
Cohesion: 1.0
Nodes (1): ESLint config (styles)

### Community 58 - "Community 58"
Cohesion: 1.0
Nodes (1): CalBooking component

### Community 59 - "Community 59"
Cohesion: 1.0
Nodes (1): Tick icon re-export

### Community 60 - "Community 60"
Cohesion: 1.0
Nodes (1): getAllViewCounts

### Community 61 - "Community 61"
Cohesion: 1.0
Nodes (1): funFacts array

### Community 62 - "Community 62"
Cohesion: 1.0
Nodes (1): otherMediaData array

### Community 63 - "Community 63"
Cohesion: 1.0
Nodes (1): getGrowthStatusConfig

### Community 64 - "Community 64"
Cohesion: 1.0
Nodes (1): projects data object

### Community 65 - "Community 65"
Cohesion: 1.0
Nodes (1): speakingData array

### Community 66 - "Community 66"
Cohesion: 1.0
Nodes (1): conferenceLogo

### Community 67 - "Community 67"
Cohesion: 1.0
Nodes (1): conferenceLogos

### Community 68 - "Community 68"
Cohesion: 1.0
Nodes (1): conferenceSeries

### Community 69 - "Community 69"
Cohesion: 1.0
Nodes (1): getSeriesLogo

### Community 70 - "Community 70"
Cohesion: 1.0
Nodes (1): getRobotsTxt

### Community 71 - "Community 71"
Cohesion: 1.0
Nodes (1): GET handler (robots.txt.ts)

### Community 72 - "Community 72"
Cohesion: 1.0
Nodes (1): GET handler (partytown-proxy.ts)

### Community 73 - "Community 73"
Cohesion: 1.0
Nodes (1): Structured Data

### Community 74 - "Community 74"
Cohesion: 1.0
Nodes (1): Vue 3

### Community 75 - "Community 75"
Cohesion: 1.0
Nodes (1): Vue 3

### Community 76 - "Community 76"
Cohesion: 1.0
Nodes (1): Vue 3

### Community 77 - "Community 77"
Cohesion: 1.0
Nodes (1): Site Banner / OG Image - Cartoon Avatar Portrait

### Community 78 - "Community 78"
Cohesion: 1.0
Nodes (1): Render ATL Tech Meetup Audience Photo

### Community 79 - "Community 79"
Cohesion: 1.0
Nodes (1): Blog Cover: Man Wearing Screen-Reflecting Glasses

### Community 80 - "Community 80"
Cohesion: 1.0
Nodes (1): Human Readable Name

### Community 81 - "Community 81"
Cohesion: 1.0
Nodes (1): Conference Expo Hall Cover Image

### Community 82 - "Community 82"
Cohesion: 1.0
Nodes (1): South Georgia Rural Road at Sunrise

### Community 83 - "Community 83"
Cohesion: 1.0
Nodes (1): Growth Garden Cover Image

### Community 84 - "Community 84"
Cohesion: 1.0
Nodes (1): Community Networking Cover Image

### Community 85 - "Community 85"
Cohesion: 1.0
Nodes (1): Lightning Storm Over Rural Town at Night

### Community 86 - "Community 86"
Cohesion: 1.0
Nodes (1): Scrabble Tiles Spelling FAILURE (404 Illustration)

## Ambiguous Edges - Review These
- `MediaItem interface` → `getLogoByType`  [AMBIGUOUS]
  assets/images/conferences.ts · relation: shares_data_with

## Knowledge Gaps
- **222 isolated node(s):** `blogCollection`, `teamCollection`, `collections export`, `ImportMetaEnv interface`, `ImportMeta interface` (+217 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 27`** (3 nodes): `GET()`, `getRobotsTxt()`, `robots.txt.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 37`** (2 nodes): `getFormattedDate`, `formatDate`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 38`** (2 nodes): `ImportMetaEnv interface`, `supabase client`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 39`** (2 nodes): `sendEmail (nodemailer)`, `POST handler (send-email.ts)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 40`** (2 nodes): `watch`, `watchEffect`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (2 nodes): `Niya Panamdanam`, `Production Code Experience`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `blogCollection`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (1 nodes): `teamCollection`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 54`** (1 nodes): `collections export`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 55`** (1 nodes): `ImportMeta interface`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 56`** (1 nodes): `ProcessedEvent interface (types/index.ts)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 57`** (1 nodes): `ESLint config (styles)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 58`** (1 nodes): `CalBooking component`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 59`** (1 nodes): `Tick icon re-export`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 60`** (1 nodes): `getAllViewCounts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 61`** (1 nodes): `funFacts array`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 62`** (1 nodes): `otherMediaData array`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 63`** (1 nodes): `getGrowthStatusConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 64`** (1 nodes): `projects data object`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 65`** (1 nodes): `speakingData array`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (1 nodes): `conferenceLogo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (1 nodes): `conferenceLogos`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (1 nodes): `conferenceSeries`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 69`** (1 nodes): `getSeriesLogo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 70`** (1 nodes): `getRobotsTxt`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (1 nodes): `GET handler (robots.txt.ts)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `GET handler (partytown-proxy.ts)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (1 nodes): `Structured Data`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (1 nodes): `Vue 3`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `Vue 3`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 76`** (1 nodes): `Vue 3`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 77`** (1 nodes): `Site Banner / OG Image - Cartoon Avatar Portrait`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 78`** (1 nodes): `Render ATL Tech Meetup Audience Photo`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 79`** (1 nodes): `Blog Cover: Man Wearing Screen-Reflecting Glasses`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 80`** (1 nodes): `Human Readable Name`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 81`** (1 nodes): `Conference Expo Hall Cover Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 82`** (1 nodes): `South Georgia Rural Road at Sunrise`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 83`** (1 nodes): `Growth Garden Cover Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 84`** (1 nodes): `Community Networking Cover Image`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 85`** (1 nodes): `Lightning Storm Over Rural Town at Night`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 86`** (1 nodes): `Scrabble Tiles Spelling FAILURE (404 Illustration)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `MediaItem interface` and `getLogoByType`?**
  _Edge tagged AMBIGUOUS (relation: shares_data_with) - confidence is low._
- **Why does `11 JavaScript Fundamentals for Vue Developers` connect `JavaScript Fundamentals` to `AI-Assisted Dev & CSS Topics`, `2025 Year Journey`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Why does `Vue 3` connect `JavaScript Fundamentals` to `i18n in Vue/Astro`?**
  _High betweenness centrality (0.020) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `11 JavaScript Fundamentals for Vue Developers` (e.g. with `Vue 3` and `Building with TypeScript: A Lego-Based Guide`) actually correct?**
  _`11 JavaScript Fundamentals for Vue Developers` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Generative Engine Optimization (GEO)` (e.g. with `Astro Framework` and `GEO Optimization Fields`) actually correct?**
  _`Generative Engine Optimization (GEO)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Vue 3` (e.g. with `Vue-elingual: Teaching Your App to Speak Multiple Languages` and `11 JavaScript Fundamentals for Vue Developers`) actually correct?**
  _`Vue 3` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `blogCollection`, `teamCollection`, `collections export` to the rest of the system?**
  _222 weakly-connected nodes found - possible documentation gaps or missing edges._