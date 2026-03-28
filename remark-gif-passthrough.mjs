import { visit } from 'unist-util-visit';

/**
 * Remark plugin that converts remote .gif image nodes to raw HTML <img> tags,
 * bypassing Astro's image optimizer (which fails to inferSize on remote GIFs).
 */
export function remarkGifPassthrough() {
  return function (tree) {
    visit(tree, 'image', (node, index, parent) => {
      const src = node.url || '';
      if (src.startsWith('http') && src.endsWith('.gif')) {
        const alt = node.alt || '';
        const html = `<img src="${src}" alt="${alt}" />`;
        parent.children.splice(index, 1, {
          type: 'html',
          value: html,
        });
      }
    });
  };
}
