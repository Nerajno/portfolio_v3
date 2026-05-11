import { describe, it, expect } from 'vitest'
import { otherMediaData } from '../../src/data/otherMediaData.ts'

const VALID_TYPES = ['podcast', 'interview', 'video', 'workshop-recording', 'panel-discussion']

describe('otherMediaData', () => {
  it('should be an array', () => {
    expect(Array.isArray(otherMediaData)).toBe(true)
  })

  it('should have at least one item', () => {
    expect(otherMediaData.length).toBeGreaterThan(0)
  })

  it('every item should have a non-empty id string', () => {
    otherMediaData.forEach((item) => {
      expect(typeof item.id).toBe('string')
      expect(item.id.trim().length).toBeGreaterThan(0)
    })
  })

  it('every item should have a non-empty title string', () => {
    otherMediaData.forEach((item) => {
      expect(typeof item.title).toBe('string')
      expect(item.title.trim().length).toBeGreaterThan(0)
    })
  })

  it('every item should have a non-empty description string', () => {
    otherMediaData.forEach((item) => {
      expect(typeof item.description).toBe('string')
      expect(item.description.trim().length).toBeGreaterThan(0)
    })
  })

  it('every item should have a valid date string in YYYY-MM-DD format', () => {
    otherMediaData.forEach((item) => {
      expect(item.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    })
  })

  it('every item should have a valid type', () => {
    otherMediaData.forEach((item) => {
      expect(VALID_TYPES).toContain(item.type)
    })
  })

  it('every item should have a links object', () => {
    otherMediaData.forEach((item) => {
      expect(typeof item.links).toBe('object')
      expect(item.links).not.toBeNull()
    })
  })

  it('should not contain duplicate ids', () => {
    const ids = otherMediaData.map((item) => item.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('optional duration field should be a string when present', () => {
    otherMediaData.forEach((item) => {
      if (item.duration !== undefined) {
        expect(typeof item.duration).toBe('string')
        expect(item.duration.trim().length).toBeGreaterThan(0)
      }
    })
  })

  it('optional tags field should be an array of strings when present', () => {
    otherMediaData.forEach((item) => {
      if (item.tags !== undefined) {
        expect(Array.isArray(item.tags)).toBe(true)
        item.tags.forEach((tag) => {
          expect(typeof tag).toBe('string')
          expect(tag.trim().length).toBeGreaterThan(0)
        })
      }
    })
  })

  it('the Virtual Coffee podcast entry should exist and have a primary link', () => {
    const podcast = otherMediaData.find((item) => item.id === 'virtual-coffee-podcast-2024')
    expect(podcast).toBeDefined()
    expect(podcast.type).toBe('podcast')
    expect(podcast.links.primary).toBeDefined()
  })
})
