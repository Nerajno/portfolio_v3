export const PERSON_ENTITY = {
  '@context': 'https://schema.org',
  '@type': ['Person', 'ProfilePage'],
  name: 'Nerando Johnson',
  alternateName: 'Nerajno',
  url: 'https://developingdvlpr.com',
  sameAs: [
    'https://linkedin.com/in/nerajno',
    'https://github.com/nerajno',
    'https://twitter.com/nerajno',
    'https://bsky.app/profile/nerajno.bsky.social',
  ],
  jobTitle: 'Frontend Software Engineer',
  knowsAbout: ['Vue 3', 'Astro', 'TypeScript', 'Technical Speaking', 'AEO'],
} as const;

export interface FAQ {
  q: string;
  a: string;
}

export function buildArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishDate: Date;
  updatedDate?: Date;
  keywords?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: opts.title,
    description: opts.description,
    datePublished: opts.publishDate.toISOString(),
    dateModified: (opts.updatedDate ?? opts.publishDate).toISOString(),
    author: { '@type': 'Person', name: 'Nerando Johnson', url: 'https://developingdvlpr.com/about' },
    url: opts.url,
    image: opts.image,
    keywords: opts.keywords?.join(', '),
  };
}

export function buildSpeakableSchema(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    url,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.post-summary', '.hero-description'],
    },
  };
}

export function buildFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function buildCollectionSchema(opts: {
  name: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    url: opts.url,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: opts.items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: item.url,
      })),
    },
  };
}

export function sanitizeSchema(schema: object): string {
  return JSON.stringify(schema, (_, v) => (v === undefined ? undefined : v));
}
