import { describe, it, expect } from 'vitest'
import { remarkGifPassthrough } from '../../remark-gif-passthrough.mjs'

/**
 * Build a minimal mdast image node.
 */
function buildImageNode(url, alt = '') {
  return { type: 'image', url, alt }
}

/**
 * Build a root tree with a single image child under a paragraph.
 */
function buildTree(imageNode) {
  const parent = {
    type: 'paragraph',
    children: [imageNode],
  }
  return {
    type: 'root',
    children: [parent],
  }
}

describe('remarkGifPassthrough', () => {
  it('should return a function when called', () => {
    const plugin = remarkGifPassthrough()
    expect(typeof plugin).toBe('function')
  })

  it('should convert a remote .gif image node to an HTML <img> tag', () => {
    const plugin = remarkGifPassthrough()
    const imageNode = buildImageNode('https://example.com/animation.gif', 'An animation')
    const tree = buildTree(imageNode)
    const parent = tree.children[0]

    plugin(tree)

    expect(parent.children[0].type).toBe('html')
    expect(parent.children[0].value).toContain('<img')
    expect(parent.children[0].value).toContain('src="https://example.com/animation.gif"')
    expect(parent.children[0].value).toContain('alt="An animation"')
  })

  it('should not modify non-gif remote images', () => {
    const plugin = remarkGifPassthrough()
    const imageNode = buildImageNode('https://example.com/photo.png', 'A photo')
    const tree = buildTree(imageNode)
    const parent = tree.children[0]

    plugin(tree)

    expect(parent.children[0].type).toBe('image')
    expect(parent.children[0].url).toBe('https://example.com/photo.png')
  })

  it('should not modify local gif images', () => {
    const plugin = remarkGifPassthrough()
    const imageNode = buildImageNode('/images/local.gif', 'Local gif')
    const tree = buildTree(imageNode)
    const parent = tree.children[0]

    plugin(tree)

    // Local gif doesn't start with http, so it should remain as-is
    expect(parent.children[0].type).toBe('image')
    expect(parent.children[0].url).toBe('/images/local.gif')
  })

  it('should escape double quotes in alt text', () => {
    const plugin = remarkGifPassthrough()
    const imageNode = buildImageNode(
      'https://example.com/animation.gif',
      'Say "hello" world'
    )
    const tree = buildTree(imageNode)
    const parent = tree.children[0]

    plugin(tree)

    expect(parent.children[0].value).toContain('alt="Say &quot;hello&quot; world"')
  })

  it('should handle an image node with no alt text', () => {
    const plugin = remarkGifPassthrough()
    const imageNode = buildImageNode('https://example.com/animation.gif', '')
    const tree = buildTree(imageNode)
    const parent = tree.children[0]

    plugin(tree)

    expect(parent.children[0].type).toBe('html')
    expect(parent.children[0].value).toContain('alt=""')
  })

  it('should handle a tree with no image nodes without throwing', () => {
    const plugin = remarkGifPassthrough()
    const tree = {
      type: 'root',
      children: [
        { type: 'paragraph', children: [{ type: 'text', value: 'Just text.' }] },
      ],
    }

    expect(() => plugin(tree)).not.toThrow()
  })

  it('should process multiple remote gif images in the same tree', () => {
    const plugin = remarkGifPassthrough()
    const img1 = buildImageNode('https://example.com/a.gif', 'First')
    const img2 = buildImageNode('https://example.com/b.gif', 'Second')
    const parent = {
      type: 'paragraph',
      children: [img1, img2],
    }
    const tree = { type: 'root', children: [parent] }

    plugin(tree)

    // Both children should have been converted to html nodes
    expect(parent.children[0].type).toBe('html')
    expect(parent.children[1].type).toBe('html')
    expect(parent.children[0].value).toContain('a.gif')
    expect(parent.children[1].value).toContain('b.gif')
  })

  it('should leave non-remote, non-gif images untouched', () => {
    const plugin = remarkGifPassthrough()
    const imageNode = buildImageNode('https://example.com/video.mp4', 'Video')
    const tree = buildTree(imageNode)
    const parent = tree.children[0]

    plugin(tree)

    expect(parent.children[0].type).toBe('image')
  })
})
