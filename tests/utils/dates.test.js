import { describe, it, expect } from 'vitest'
import { formatDate } from '../../src/utils/dates.js'

describe('formatDate', () => {
  it('should format a valid date string with month and year only', () => {
    const result = formatDate('2024-10-15')
    expect(result).toMatch(/October 2024/)
  })

  it('should not include the day number in the output', () => {
    const result = formatDate('2024-10-15')
    // Day should NOT appear in the formatted output (day: 'numeric' is disabled)
    expect(result).not.toMatch(/\b15\b/)
  })

  it('should format January correctly', () => {
    const result = formatDate('2023-01-01')
    expect(result).toMatch(/January 2023/)
  })

  it('should format December correctly', () => {
    const result = formatDate('2023-12-31')
    expect(result).toMatch(/December 2023/)
  })

  it('should return a non-empty string for a valid date', () => {
    const result = formatDate('2025-06-01')
    expect(result.length).toBeGreaterThan(0)
  })

  it('should use long month name format', () => {
    const result = formatDate('2024-07-04')
    expect(result).toContain('July')
  })

  it('should include the year in the output', () => {
    const result = formatDate('2022-02-14')
    expect(result).toContain('2022')
  })

  it('should format all months correctly', () => {
    const expectedMonths = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    expectedMonths.forEach((month, index) => {
      const monthNum = String(index + 1).padStart(2, '0')
      const result = formatDate(`2024-${monthNum}-01`)
      expect(result).toContain(month)
    })
  })
})
