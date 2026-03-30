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

    expect(result).toContain('aria-label="Toggle theme"')
    expect(result).toContain('title="Toggle between light and dark mode"')
  })

  it('should render sun icon', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('id="sun-icon"')
    expect(result).toContain('text-yellow-500')
  })

  it('should render moon icon', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('id="moon-icon"')
    expect(result).toContain('text-slate-700')
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

  it('should have light mode styles', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('bg-slate-100')
    expect(result).toContain('hover:bg-slate-200')
    expect(result).toContain('border-slate-200')
  })

  it('should have dark mode styles', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('dark:bg-slate-800')
    expect(result).toContain('dark:hover:bg-slate-700')
    expect(result).toContain('dark:border-slate-600')
  })

  it('should have focus ring styles', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('focus:outline-none')
    expect(result).toContain('focus:ring-2')
    expect(result).toContain('focus:ring-blue-500')
    expect(result).toContain('focus:ring-offset-2')
  })

  it('should have dark mode focus ring offset', async () => {
    const container = await AstroContainer.create()
    const result = await container.renderToString(ThemeToggle)

    expect(result).toContain('dark:focus:ring-offset-slate-900')
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
