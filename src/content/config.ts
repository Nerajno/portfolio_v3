// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('@nerajno'),
    category: z.string(),
    tags: z.array(z.string()),
    tweetIds: z.array(z.string()).optional(),

    // SEO-related fields
    description: z.string().optional(), // Meta description for SEO
    seoTitle: z.string().optional(), // Custom SEO title (falls back to title if not provided)
    seoDescription: z.string().optional(), // Custom meta description (falls back to snippet/description)
    keywords: z.array(z.string()).optional(), // SEO keywords
    ogImage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(), // Custom Open Graph image (falls back to main image)
    noindex: z.boolean().default(false), // Prevent indexing if true
    canonical: z.string().url().optional(), // Custom canonical URL if needed

    // Series-related fields
    series: z.object({
      name: z.string(), // e.g., "Vue 3 Fundamentals"
      order: z.number(), // Position in series (1, 2, 3, etc.)
    }).optional(), // Optional - only for posts that are part of a series
  }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.coerce.date(),

    // SEO-related fields for team members
    bio: z.string().optional(), // Bio/description for SEO
    seoTitle: z.string().optional(), // Custom SEO title
    seoDescription: z.string().optional(), // Custom meta description
    socialLinks: z.object({
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      github: z.string().optional(),
      website: z.string().optional(),
    }).optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'blog': blogCollection,
  'team': teamCollection,
};
