import { describe, it, expect } from 'vitest'
import { funFacts } from '../../src/data/funFacts.js'

describe('funFacts data', () => {
  it('should be an array', () => {
    expect(Array.isArray(funFacts)).toBe(true)
  })

  it('should have at least one item', () => {
    expect(funFacts.length).toBeGreaterThan(0)
  })

  it('should contain only strings', () => {
    funFacts.forEach((fact) => {
      expect(typeof fact).toBe('string')
    })
  })

  it('should not contain any empty strings', () => {
    funFacts.forEach((fact) => {
      expect(fact.trim().length).toBeGreaterThan(0)
    })
  })

  it('should not contain duplicate entries', () => {
    const uniqueFacts = new Set(funFacts)
    expect(uniqueFacts.size).toBe(funFacts.length)
  })

  it('should contain the coffee fact', () => {
    expect(funFacts.some((f) => f.toLowerCase().includes('coffee'))).toBe(true)
  })

  it('should contain the Stack Overflow fact', () => {
    expect(funFacts.some((f) => f.includes('Stack Overflow'))).toBe(true)
  })
})
