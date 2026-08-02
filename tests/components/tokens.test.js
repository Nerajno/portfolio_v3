import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const css = readFileSync(resolve(process.cwd(), 'src/styles/tokens.css'), 'utf8')

const DIAL_VARS = [
  '--dial-font',
  '--dial-type-scale',
  '--dial-accent-hue',
  '--dial-accent-chroma',
  '--dial-accent-light',
]

const SURFACES = ['portfolio', 'learn', 'teach', 'build']

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function blockBody(selector) {
  const re = new RegExp(`${escapeRegExp(selector)}\\s*\\{([\\s\\S]*?)\\}`)
  const match = css.match(re)
  expect(match, `expected block for "${selector}"`).toBeTruthy()
  return match[1]
}

function declaredVars(block) {
  return [...block.matchAll(/--[a-z0-9-]+\s*:/g)].map((m) => m[0].slice(0, -1).trim())
}

describe('Token spine — dialect isolation', () => {
  it('defines the five dial variables', () => {
    for (const v of DIAL_VARS) {
      expect(css).toContain(v)
    }
  })

  it('declares all four surface dialects', () => {
    for (const s of SURFACES) {
      expect(css).toContain(`[data-surface="${s}"]`)
    }
  })

  it('switching data-surface changes only the five dial variables', () => {
    for (const s of SURFACES) {
      const block = blockBody(`[data-surface="${s}"]`)
      const vars = declaredVars(block)

      // A dialect block may set dials AND nothing else (no semantic tokens leak)
      const nonDial = vars.filter((v) => !DIAL_VARS.includes(v))
      expect(nonDial, `surface "${s}" sets non-dial vars: ${nonDial.join(', ')}`).toEqual([])
      expect(vars.length).toBe(DIAL_VARS.length)
    }
  })

  it('each surface supplies every dial variable', () => {
    for (const s of SURFACES) {
      const vars = declaredVars(blockBody(`[data-surface="${s}"]`))
      expect(vars.sort()).toEqual([...DIAL_VARS].sort())
    }
  })

  it('every surface uses the expected dialect values', () => {
    const expected = {
      portfolio: { font: 'sans', scale: '1.125', hue: '265' },
      learn: { font: 'mono', scale: '0.875', hue: '72' },
      teach: { font: 'sans', scale: '1', hue: '168' },
      build: { font: 'mono', scale: '0.875', hue: '38' },
    }

    for (const [surface, vals] of Object.entries(expected)) {
      const block = blockBody(`[data-surface="${surface}"]`)
      expect(block).toContain(`--dial-font: ${vals.font}`)
      expect(block).toContain(`--dial-type-scale: ${vals.scale}`)
      expect(block).toContain(`--dial-accent-hue: ${vals.hue}`)
    }
  })
})
