import { createHighlighter } from 'shiki'
import { visit } from 'unist-util-visit'

const THEME = 'vitesse-dark'
const LANGS = ['astro', 'bash', 'html', 'javascript', 'markdown', 'text', 'typescript', 'vue']
const ALIASES = { js: 'javascript', ts: 'typescript', md: 'markdown' }

/** Shared singleton — created once, reused across all markdown/MDX files */
let _highlighter
async function getHighlighter() {
  if (!_highlighter) {
    _highlighter = await createHighlighter({ themes: [THEME], langs: LANGS })
  }
  return _highlighter
}

function resolveLang(classes = []) {
  const langClass = classes.find(
    (c) => typeof c === 'string' && c.startsWith('language-')
  )
  const raw = langClass ? langClass.slice(9) : 'text'
  const normalized = ALIASES[raw] ?? raw
  return LANGS.includes(normalized) ? normalized : 'text'
}

/** Rehype plugin that replaces <pre><code> blocks with Shiki HAST output
 *  and highlights inline <code class="language-*"> spans. */
export function rehypeShiki() {
  return async (tree) => {
    const hl = await getHighlighter()
    const blocks = []
    const inlines = []

    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'pre') {
        const codeEl = node.children?.find(
          (c) => c.type === 'element' && c.tagName === 'code'
        )
        if (codeEl) blocks.push({ node, index, parent, codeEl })
      } else if (
        node.tagName === 'code' &&
        parent?.tagName !== 'pre' &&
        node.properties?.className?.some((c) => typeof c === 'string' && c.startsWith('language-'))
      ) {
        inlines.push({ node, index, parent })
      }
    })

    // Fenced code blocks
    for (const { index, parent, codeEl } of blocks) {
      const lang = resolveLang(codeEl.properties?.className ?? [])
      const code = codeEl.children?.map((c) => c.value ?? '').join('') ?? ''
      const hast = hl.codeToHast(code, { lang, theme: THEME })
      parent.children.splice(index, 1, hast.children[0])
    }

    // Inline code: `ref`{.js}  →  highlighted <span> tokens, no <pre>
    for (const { node, index, parent } of inlines) {
      const lang = resolveLang(node.properties?.className ?? [])
      const code = node.children?.map((c) => c.value ?? '').join('') ?? ''
      const hast = hl.codeToHast(code, { lang, theme: THEME, structure: 'inline' })
      // codeToHast with structure:'inline' returns root → code → spans
      const inner = hast.children[0]
      parent.children.splice(index, 1, inner)
    }
  }
}
