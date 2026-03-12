import { describe, it, expect, beforeEach, vi } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import Footer from '../../src/components/footer.astro'

describe('Footer Component', () => {
  let currentYear

  beforeEach(() => {
    // Get the current year for copyright testing
    currentYear = new Date().getFullYear()
  })

  it('should render copyright text with current year', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    expect(result).toContain('Copyright ©')
    expect(result).toContain(currentYear.toString())
    expect(result).toContain('all rights reserved')
  })

  it('should render link to Twitter profile', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    expect(result).toContain('https://twitter.com/nerajno')
    expect(result).toContain('target="_blank"')
    expect(result).toContain('rel="noopener"')
  })

  it('should render link to template source', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    expect(result).toContain('web3templates.com')
    expect(result).toContain('target="_blank"')
    expect(result).toContain('rel="noopener"')
  })

  it('should include "Configured and modified by me" text', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    expect(result).toContain('Configured')
    expect(result).toContain('and modified by')
    expect(result).toContain('me')
  })

  it('should include proper Tailwind styling classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    expect(result).toContain('text-center')
    expect(result).toContain('text-slate-500')
    expect(result).toContain('dark:text-slate-400')
  })

  it('should include hover styles for links', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    expect(result).toContain('hover:underline')
    expect(result).toContain('hover:text-blue')
  })

  it('should have footer tag with correct classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    expect(result).toMatch(/<footer[^>]*class="[^"]*my-20[^"]*"/)
    expect(result).toContain('mb-5')
    expect(result).toContain('fixed-footer')
  })

  it('should have at least two paragraph elements', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    const pTags = result.match(/<p/g)
    expect(pTags.length).toBeGreaterThanOrEqual(2)
  })

  it('should have correct text size classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    expect(result).toContain('text-sm') // For copyright
    expect(result).toContain('text-xs') // For attribution
  })

  it('should contain external link icons', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    // Check for icon names
    expect(result).toContain('bx:cog')
    expect(result).toContain('bx:cut')
    expect(result).toContain('bx:link-external')
  })

  it('should have proper dark mode classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    expect(result).toContain('dark:text-slate-400')
    expect(result).toContain('dark:hover:text-blue-300')
    expect(result).toContain('dark:hover:font-bold')
  })

  it('should render all links with proper accessibility attributes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(Footer)

    // Count target="_blank" occurrences (should match number of external links)
    const targetBlankMatches = result.match(/target="_blank"/g)
    expect(targetBlankMatches?.length).toBeGreaterThanOrEqual(2)

    // Count rel="noopener" occurrences
    const relNoopenerMatches = result.match(/rel="noopener"/g)
    expect(relNoopenerMatches?.length).toBeGreaterThanOrEqual(2)
  })
})
