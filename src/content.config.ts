import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string().min(1),
    image: z.object({
      src: z.string().min(1),
      alt: z.string().min(1),
    }),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('@nerajno'),
    category: z.string(),
    tags: z.array(z.string()),
    tweetIds: z.array(z.string()).optional(),

    // SEO-related fields
    description: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    ogImage: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    noindex: z.boolean().default(false),
    canonical: z.string().url().optional(),

    // Series-related fields
    series: z.object({
      name: z.string(),
      order: z.number(),
    }).optional(),
  }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team' }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.coerce.date(),

    bio: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    socialLinks: z.object({
      twitter: z.string().optional(),
      linkedin: z.string().optional(),
      github: z.string().optional(),
      website: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  team: teamCollection,
};
