import { getCollection } from 'astro:content';

type VisibilityData = { draft: boolean; preview: boolean; publishDate: Date };

/**
 * Lifecycle: draft (never rendered) → preview (dev only) → published (after publishDate).
 * Previews ignore publishDate in dev so scheduled posts can be reviewed early.
 */
export const isVisible = (
  data: VisibilityData,
  { isProd = import.meta.env.PROD, now = new Date() } = {},
) => {
  if (data.draft) return false;
  if (data.preview) return !isProd;
  return data.publishDate < now;
};

/** Visible blog posts, newest first. */
export const getVisiblePosts = async () =>
  (await getCollection('blog', ({ data }) => isVisible(data))).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf(),
  );
