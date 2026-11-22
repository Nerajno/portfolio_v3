// Placeholder case studies for the #515 flagship cards, rendered by CaseStudy.astro.
// Only verified facts go here (issue #515, the repos, READMEs). null = not written yet;
// the page shows a visible "pending" marker for it. Fill these in as each case study is written (#459).
const pending = {
  problem: null,
  criteria: null,
  approach: null,
  tradeoffs: null,
  outcome: null,
  v2: null,
  ai: null,
  aiWrong: null,
  runningIt: null,
  posts: [],
};

const caseStudies = {
  'portfolio-v3': {
    ...pending,
    id: 'portfolio-v3',
    name: 'portfolio_v3',
    tagline: 'this site',
    type: 'Personal site',
    shipStatus: 'shipped',
    stack: ['Astro', 'Dialects', 'Vitest', 'Playwright', 'Netlify'],
    live: 'https://developingdvlpr.com/',
    repo: 'https://github.com/Nerajno/portfolio_v3',
    extraEvidence: [{ label: 'Decision records', href: '/decisions' }],
  },
  dialects: {
    ...pending,
    id: 'dialects',
    name: 'Dialects',
    tagline: 'one token spine, four surfaces',
    type: 'Open-source library',
    shipStatus: 'shipped',
    stack: ['CSS tokens', 'Tailwind preset', 'theme-init'],
    live: 'https://nerajno.github.io/dvlpr-dialects/',
    repo: 'https://github.com/Nerajno/dvlpr-dialects',
    extraEvidence: [
      { label: 'npm — @nerajno/dialects', href: 'https://www.npmjs.com/package/@nerajno/dialects', external: true },
      { label: 'ADR-002: one token spine, four dialects', href: '/decisions#adr-002' },
    ],
    note: 'License: PolyForm Noncommercial 1.0.0.',
  },
  'finance-controls-lab': {
    ...pending,
    id: 'finance-controls-lab',
    name: 'Finance Controls Lab',
    tagline: 'every state, reachable and tested',
    type: 'Practice product',
    shipStatus: 'in_progress',
    stack: ['Vue 3', 'Nuxt 4', 'TypeScript', 'Tailwind', 'Pinia', 'Vitest', 'Playwright', 'Dialects'],
    live: null,
    repo: null, // private: NerajnoLearning/finance-controls-lab
    extraEvidence: [],
    note: 'A single "Personal finance controls" settings page for a fictional budgeting app, built so every component\'s every state can be seen, reached by keyboard, and tested.',
  },
  'slide-warehouse': {
    ...pending,
    id: 'slide-warehouse',
    name: 'Slide Warehouse',
    tagline: 'one home for my talks',
    type: 'Speaker hub',
    shipStatus: 'in_progress',
    stack: ['Nuxt 3', 'Reveal.js'],
    live: 'https://slides.developingdvlpr.com/',
    repo: 'https://github.com/Nerajno/slide_warehouse',
    extraEvidence: [],
  },
  lanyard: {
    ...pending,
    id: 'lanyard',
    name: 'Lanyard',
    tagline: 'conference follow-up nudger',
    type: 'Product',
    shipStatus: 'in_progress',
    stack: ['Nuxt 3', 'Vue 3', 'Pinia', 'Tailwind', 'Supabase', 'Twilio', 'Resend', 'Netlify'],
    live: 'https://3cupslanyard.netlify.app/',
    repo: null, // private: Nerajno/lanyard
    extraEvidence: [],
    note: 'The "three cups of coffee" rule: capture a contact, get a timed nudge (SMS or email), act in one tap, then the contact graduates. Not a CRM by design.',
    approach:
      'Nuxt 3 front end with Supabase (Postgres, Auth, row-level security). The nudge loop is one Nitro route, /api/cron/nudge, triggered hourly by a Netlify Scheduled Function; the scheduled function is a thin trigger, so any external cron can drive the same route.',
    runningIt: 'Secrets live only in environment variables — never in code, never in the client bundle.',
  },
};

export default caseStudies;
