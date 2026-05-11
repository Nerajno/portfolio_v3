import { describe, it, expect } from 'vitest'
import { getFormattedDate } from '../../src/utils/all.js'

describe('getFormattedDate', () => {
  it('should format a valid date string to a readable date', () => {
    const result = getFormattedDate('2024-10-15')
    expect(result).toMatch(/Oct 15, 2024/)
  })

  it('should return an empty string when date is undefined', () => {
    const result = getFormattedDate(undefined)
    expect(result).toBe('')
  })

  it('should return an empty string when date is null', () => {
    const result = getFormattedDate(null)
    expect(result).toBe('')
  })

  it('should return an empty string when date is an empty string', () => {
    const result = getFormattedDate('')
    expect(result).toBe('')
  })

  it('should format a January date correctly', () => {
    const result = getFormattedDate('2023-01-01')
    expect(result).toMatch(/Jan 1, 2023/)
  })

  it('should format a December date correctly', () => {
    const result = getFormattedDate('2023-12-31')
    expect(result).toMatch(/Dec 31, 2023/)
  })

  it('should handle ISO 8601 date strings', () => {
    const result = getFormattedDate('2024-06-15T00:00:00.000Z')
    expect(result).toMatch(/Jun/)
    expect(result).toMatch(/2024/)
  })

  it('should return a non-empty string for any truthy date', () => {
    const result = getFormattedDate('2025-03-20')
    expect(result.length).toBeGreaterThan(0)
  })

  it('should include year, abbreviated month, and day', () => {
    const result = getFormattedDate('2024-04-22')
    expect(result).toContain('2024')
    expect(result).toContain('Apr')
    expect(result).toContain('22')
  })
})
