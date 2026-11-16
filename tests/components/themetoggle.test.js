import { describe, it, expect } from 'vitest'
import { experimental_AstroContainer as AstroContainer } from 'astro/container'
import ThemeToggle from '../../src/components/ThemeToggle.astro'

describe('ThemeToggle Component', () => {
  it('should render button element', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('<button')
    expect(result).toContain('id="theme-toggle"')
  })

  it('should have proper accessibility attributes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('aria-label="Dark mode"')
    expect(result).toContain('aria-pressed="false"')
    expect(result).toContain('title="Toggle between light and dark mode"')
  })

  it('should render sun icon', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('id="sun-icon"')
    expect(result).toContain('text-accent')
  })

  it('should render moon icon', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('id="moon-icon"')
    expect(result).toContain('text-accent')
  })

  it('should include both SVG icons', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    const svgMatches = result.match(/<svg/g)
    expect(svgMatches).toHaveLength(2)
  })

  it('should have proper button styling', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('rounded-lg')
    expect(result).toContain('p-2')
    expect(result).toContain('transition-all')
  })

  it('should use Dialects surface tokens', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('bg-surface-alt')
    expect(result).toContain('hover:bg-accent-soft')
    expect(result).toContain('border-surface-strong')
  })

  it('should not use raw Tailwind palette classes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).not.toMatch(/\b(?:dark:)?(?:bg|text|border|ring)-(?:slate|gray|blue|yellow|indigo|emerald)-\d+/)
  })

  it('should update aria-pressed when the theme is applied', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain("setAttribute('aria-pressed', String(theme === 'dark'))")
  })

  it('should include theme toggle script', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('<script')
    expect(result).toContain('initThemeToggle')
  })

  it('should have transition classes on icons', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('transition-all')
    expect(result).toContain('duration-200')
  })

  it('should have proper icon sizing', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('w-5')
    expect(result).toContain('h-5')
  })

  it('should use currentColor for icons', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('fill="currentColor"')
  })

  it('should have SVG viewBox attributes', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('viewBox="0 0 24 24"')
  })
})
