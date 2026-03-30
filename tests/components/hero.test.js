import { describe, it, expect } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import Hero from '../../src/components/hero.astro'

describe('Hero Component', () => {
  it('should render main heading with name', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('Hi, I am Nerando')
    expect(result).toContain('id="hero-heading"')
  })

  it('should have proper heading hierarchy', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toMatch(/<h1[^>]*>[\s\S]*Hi, I am Nerando[\s\S]*<\/h1>/)
    expect(result).toContain('<h2')
    expect(result).toContain('Software Developer & Frontend Specialist')
  })

  it('should have screen reader only subtitle', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('sr-only')
    expect(result).toContain('Software Developer & Frontend Specialist')
  })

  it('should render description paragraph', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('software developer')
    expect(result).toContain('Vue and JavaScript')
    expect(result).toContain('MERN stack')
  })

  it('should include job title in description', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('software developer')
  })

  it('should mention technical skills', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('Vue and JavaScript')
    expect(result).toContain('MERN stack')
    expect(result).toContain('PM and DevOps')
  })

  it('should include personal interests', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('bookworm')
    expect(result).toContain('spatula')
  })

  it('should render "Currently Learning" link', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('Currently Learning')
    expect(result).toContain('garden.developingdvlpr.com/note/crops-growing')
  })

  it('should render "Currently Building" link', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('Currently Building')
    expect(result).toContain('garden.developingdvlpr.com/note/stuff-building-2025')
  })

  it('should have external links with proper attributes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('target="_blank"')
    expect(result).toContain('rel="noopener noreferrer"')
  })

  it('should include aria labels for accessibility', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('aria-label')
    expect(result).toContain('aria-labelledby="hero-heading"')
    expect(result).toContain('aria-hidden="true"')
  })

  it('should have semantic main element', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('<main')
    expect(result).toContain('role="main"')
  })

  it('should include Schema.org Person markup', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('itemscope')
    expect(result).toContain('itemtype="https://schema.org/Person"')
    expect(result).toContain('itemprop="name"')
    expect(result).toContain('itemprop="description"')
    expect(result).toContain('itemprop="jobTitle"')
  })

  it('should include knowsAbout schema properties', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('itemprop="knowsAbout"')
  })

  it('should include SEO metadata', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('itemprop="url"')
    expect(result).toContain('itemprop="sameAs"')
  })

  it('should have responsive grid layout', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('lg:grid-cols-2')
    expect(result).toContain('place-items-center')
  })

  it('should have proper heading sizing classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('text-5xl')
    expect(result).toContain('lg:text-6xl')
    expect(result).toContain('xl:text-7xl')
  })

  it('should have dark mode text color', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('dark:text-white')
    expect(result).toContain('dark:text-gray-300')
  })

  it('should have responsive button layout', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('flex-col')
    expect(result).toContain('sm:flex-row')
    expect(result).toContain('gap-3')
  })

  it('should include icons in CTA buttons', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Hero)

    expect(result).toContain('bx:bxs-cloud-download')
    expect(result).toContain('bx:bxl-github')
  })
})
