import { describe, it, expect } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import Sectionhead from '../../src/components/sectionhead.astro'

describe('Sectionhead Component', () => {
  it('should render with default title and description slots', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead)

    expect(result).toContain('Title')
    expect(result).toContain('Some description goes here')
  })

  it('should render custom title from slot', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead, {
      slots: {
        title: 'Custom Section Title'
      }
    })

    expect(result).toContain('Custom Section Title')
  })

  it('should render custom description from slot', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead, {
      slots: {
        desc: 'This is a custom description for testing.'
      }
    })

    expect(result).toContain('This is a custom description for testing.')
  })

  it('should render both custom title and description', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead, {
      slots: {
        title: 'Testing Section',
        desc: 'A comprehensive testing guide'
      }
    })

    expect(result).toContain('Testing Section')
    expect(result).toContain('A comprehensive testing guide')
  })

  it('should center align text by default', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead)

    expect(result).toContain('text-center')
  })

  it('should center align when explicitly set', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead, {
      props: { align: 'center' }
    })

    expect(result).toContain('text-center')
  })

  it('should not center align when align is not center', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead, {
      props: { align: 'left' }
    })

    expect(result).not.toContain('text-center')
  })

  it('should include proper heading styles', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead)

    expect(result).toContain('text-4xl')
    expect(result).toContain('lg:text-5xl')
    expect(result).toContain('font-bold')
    expect(result).toContain('lg:tracking-tight')
  })

  it('should include proper description styles', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead)

    expect(result).toContain('text-lg')
    expect(result).toContain('mt-4')
    expect(result).toContain('text-slate-500')
    expect(result).toContain('dark:text-slate-400')
  })

  it('should include top margin on container', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead)

    expect(result).toContain('mt-16')
  })

  it('should use h1 tag for title', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead, {
      slots: {
        title: 'Main Heading'
      }
    })

    expect(result).toMatch(/<h1[^>]*>[\s\S]*Main Heading[\s\S]*<\/h1>/)
  })

  it('should use p tag for description', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Sectionhead, {
      slots: {
        desc: 'Test description'
      }
    })

    expect(result).toMatch(/<p[^>]*>[\s\S]*Test description[\s\S]*<\/p>/)
  })
})
