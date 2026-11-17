import getReadingTime from 'reading-time';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { gfmFromMarkdown } from 'mdast-util-gfm';
import { gfm } from 'micromark-extension-gfm';
import { toString } from 'mdast-util-to-string';

// Same calculation as remark-reading-time.mjs (Astro's markdown pipeline parses GFM),
// but from the raw markdown body, so listing pages don't have to render() every post
// (which fetches remote images in dev).
export function minutesRead(body: string | undefined): string {
  if (!body) return '1 min read';
  const tree = fromMarkdown(body, { extensions: [gfm()], mdastExtensions: [gfmFromMarkdown()] });
  return getReadingTime(toString(tree)).text;
}
