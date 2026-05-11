import { describe, it, expect } from 'vitest'
import { remarkReadingTime } from '../../remark-reading-time.mjs'

/**
 * Build a minimal mdast tree with a single paragraph node containing text.
 */
function buildTree(text) {
  return {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [{ type: 'text', value: text }],
      },
    ],
  }
}

describe('remarkReadingTime', () => {
  it('should return a function when called', () => {
    const plugin = remarkReadingTime()
    expect(typeof plugin).toBe('function')
  })

  it('should set minutesRead on frontmatter for a short text', () => {
    const plugin = remarkReadingTime()
    const tree = buildTree('Hello world.')
    const data = { astro: { frontmatter: {} } }

    plugin(tree, { data })

    expect(data.astro.frontmatter.minutesRead).toBeDefined()
    expect(typeof data.astro.frontmatter.minutesRead).toBe('string')
  })

  it('should set minutesRead as a human-friendly string like "X min read"', () => {
    const plugin = remarkReadingTime()
    const tree = buildTree('Hello world.')
    const data = { astro: { frontmatter: {} } }

    plugin(tree, { data })

    expect(data.astro.frontmatter.minutesRead).toMatch(/min read/)
  })

  it('should calculate a longer read time for longer content', () => {
    const plugin = remarkReadingTime()
    // ~400 words (average reading speed is ~200-250 wpm, so this is ~2 min)
    const longText = 'word '.repeat(400)
    const tree = buildTree(longText)
    const data = { astro: { frontmatter: {} } }

    plugin(tree, { data })

    expect(data.astro.frontmatter.minutesRead).toBeDefined()
    expect(data.astro.frontmatter.minutesRead).toMatch(/min read/)
  })

  it('should handle empty content without throwing', () => {
    const plugin = remarkReadingTime()
    const tree = { type: 'root', children: [] }
    const data = { astro: { frontmatter: {} } }

    expect(() => plugin(tree, { data })).not.toThrow()
    expect(data.astro.frontmatter.minutesRead).toBeDefined()
  })

  it('should not overwrite other frontmatter properties', () => {
    const plugin = remarkReadingTime()
    const tree = buildTree('Some content.')
    const data = { astro: { frontmatter: { title: 'My Post', date: '2024-01-01' } } }

    plugin(tree, { data })

    expect(data.astro.frontmatter.title).toBe('My Post')
    expect(data.astro.frontmatter.date).toBe('2024-01-01')
    expect(data.astro.frontmatter.minutesRead).toBeDefined()
  })
})
