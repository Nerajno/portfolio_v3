import { describe, it, expect } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import Container from '../../src/components/container.astro'

describe('Container Component', () => {
  it('should render with default container classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Container)

    expect(result).toContain('max-w-screen-xl')
    expect(result).toContain('mx-auto')
    expect(result).toContain('px-5')
  })

  it('should render slot content', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Container, {
      slots: {
        default: '<p>Test content inside container</p>'
      }
    })

    expect(result).toContain('Test content inside container')
  })

  it('should accept and apply custom className prop', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Container, {
      props: {
        class: 'custom-class'
      }
    })

    expect(result).toContain('custom-class')
    // Should still have default classes
    expect(result).toContain('max-w-screen-xl')
  })

  it('should combine default and custom classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Container, {
      props: {
        class: 'bg-blue-500 py-10'
      }
    })

    expect(result).toContain('max-w-screen-xl')
    expect(result).toContain('mx-auto')
    expect(result).toContain('px-5')
    expect(result).toContain('bg-blue-500')
    expect(result).toContain('py-10')
  })

  it('should use a div element', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Container)

    expect(result).toMatch(/<div/)
    expect(result).toMatch(/<\/div>/)
  })

  it('should center content with mx-auto', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Container)

    expect(result).toContain('mx-auto')
  })

  it('should have responsive padding', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Container)

    expect(result).toContain('px-5')
  })

  it('should have max width constraint', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Container)

    expect(result).toContain('max-w-screen-xl')
  })

  it('should render complex slot content', async () => {
    const container = await AstroContainer.create()
    const complexContent = `
      <div class="inner-content">
        <h1>Title</h1>
        <p>Paragraph</p>
        <button>Click me</button>
      </div>
    `
    const result = await container.renderToString(Container, {
      slots: {
        default: complexContent
      }
    })

    expect(result).toContain('inner-content')
    expect(result).toContain('<h1>Title</h1>')
    expect(result).toContain('<p>Paragraph</p>')
    expect(result).toContain('<button>Click me</button>')
  })

  it('should handle empty content gracefully', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Container, {
      slots: {
        default: ''
      }
    })

    expect(result).toContain('max-w-screen-xl')
    expect(result).toContain('<div')
    expect(result).toContain('</div>')
  })
})
