// @vitest-environment node
// posts.ts imports astro:content, which Astro only allows server-side.
import { describe, it, expect } from 'vitest';
import { isVisible } from './posts';

const now = new Date('2026-06-01T00:00:00Z');
const past = new Date('2026-01-01T00:00:00Z');
const future = new Date('2026-12-01T00:00:00Z');

const post = (draft: boolean, preview: boolean, publishDate = past) => ({
  draft,
  preview,
  publishDate,
});

describe('isVisible', () => {
  describe('production', () => {
    const opts = { isProd: true, now };

    it('shows published posts with a past date', () => {
      expect(isVisible(post(false, false), opts)).toBe(true);
    });
    it('hides published posts with a future date (scheduled)', () => {
      expect(isVisible(post(false, false, future), opts)).toBe(false);
    });
    it('hides drafts', () => {
      expect(isVisible(post(true, false), opts)).toBe(false);
    });
    it('hides previews', () => {
      expect(isVisible(post(false, true), opts)).toBe(false);
    });
    it('hides posts with both flags', () => {
      expect(isVisible(post(true, true), opts)).toBe(false);
    });
  });

  describe('dev', () => {
    const opts = { isProd: false, now };

    it('shows published posts with a past date', () => {
      expect(isVisible(post(false, false), opts)).toBe(true);
    });
    it('hides published posts with a future date (scheduled)', () => {
      expect(isVisible(post(false, false, future), opts)).toBe(false);
    });
    it('hides drafts', () => {
      expect(isVisible(post(true, false), opts)).toBe(false);
    });
    it('shows previews', () => {
      expect(isVisible(post(false, true), opts)).toBe(true);
    });
    it('shows previews with a future date', () => {
      expect(isVisible(post(false, true, future), opts)).toBe(true);
    });
    it('treats posts with both flags as drafts', () => {
      expect(isVisible(post(true, true), opts)).toBe(false);
    });
  });
});
