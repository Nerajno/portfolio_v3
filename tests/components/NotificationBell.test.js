import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';

// Date comparison logic extracted for testing
const SIX_DAYS_MS = 6 * 24 * 60 * 60 * 1000;
const FORTY_EIGHT_HOURS_MS = 48 * 60 * 60 * 1000;

/**
 * Determine if notification glow should be shown
 * @param {Date} mostRecentDate - Most recent content publish date
 * @param {string|null} lastSeenStr - ISO string of last seen timestamp from localStorage
 * @param {Date} now - Current date/time
 * @returns {boolean} - Whether to show the glow
 */
function shouldShowNotificationGlow(mostRecentDate, lastSeenStr, now = new Date()) {
  const timeSinceMostRecent = now.getTime() - mostRecentDate.getTime();
  const isFirstTimeVisitor = !lastSeenStr;

  if (isFirstTimeVisitor) {
    // First-time visitor: show glow only if content is less than 48 hours old
    return timeSinceMostRecent < FORTY_EIGHT_HOURS_MS;
  } else {
    // Returning visitor: show glow if content is within 6 days AND newer than last seen
    const lastSeenDate = new Date(lastSeenStr);
    const isWithinSixDays = timeSinceMostRecent < SIX_DAYS_MS;
    const isNewerThanLastSeen = mostRecentDate > lastSeenDate;

    return isWithinSixDays && isNewerThanLastSeen;
  }
}

describe('NotificationBell - Date Logic', () => {
  let mockNow;

  beforeEach(() => {
    // Set a fixed "now" for consistent testing
    mockNow = new Date('2025-03-15T12:00:00Z');
  });

  describe('First-time visitors (no localStorage)', () => {
    it('should show glow when content is less than 48 hours old', () => {
      // Content published 24 hours ago
      const mostRecentDate = new Date(mockNow.getTime() - 24 * 60 * 60 * 1000);
      const lastSeenStr = null; // First-time visitor

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(true);
    });

    it('should show glow when content is exactly 47 hours old', () => {
      // Content published 47 hours ago (just under 48)
      const mostRecentDate = new Date(mockNow.getTime() - 47 * 60 * 60 * 1000);
      const lastSeenStr = null;

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(true);
    });

    it('should NOT show glow when content is exactly 48 hours old', () => {
      // Content published exactly 48 hours ago
      const mostRecentDate = new Date(mockNow.getTime() - 48 * 60 * 60 * 1000);
      const lastSeenStr = null;

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(false);
    });

    it('should NOT show glow when content is 3 days old', () => {
      // Content published 3 days ago
      const mostRecentDate = new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000);
      const lastSeenStr = null;

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(false);
    });

    it('should NOT show glow when content is 7 days old', () => {
      // Content published 7 days ago
      const mostRecentDate = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      const lastSeenStr = null;

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(false);
    });
  });

  describe('Returning visitors (has localStorage)', () => {
    it('should show glow when content is within 6 days AND newer than last seen', () => {
      // Content published 2 days ago
      const mostRecentDate = new Date(mockNow.getTime() - 2 * 24 * 60 * 60 * 1000);
      // User last visited 5 days ago
      const lastSeenDate = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(true);
    });

    it('should show glow when content is 5 days old and last seen was 7 days ago', () => {
      // Content published 5 days ago
      const mostRecentDate = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      // User last visited 7 days ago
      const lastSeenDate = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(true);
    });

    it('should NOT show glow when content is older than 6 days', () => {
      // Content published 7 days ago
      const mostRecentDate = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      // User last visited 10 days ago
      const lastSeenDate = new Date(mockNow.getTime() - 10 * 24 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(false);
    });

    it('should NOT show glow when content is older than last seen (even if within 6 days)', () => {
      // Content published 3 days ago
      const mostRecentDate = new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000);
      // User visited yesterday (after content was published)
      const lastSeenDate = new Date(mockNow.getTime() - 1 * 24 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(false);
    });

    it('should NOT show glow when user visited today (content is 1 hour old)', () => {
      // Content published 1 hour ago
      const mostRecentDate = new Date(mockNow.getTime() - 60 * 60 * 1000);
      // User visited 30 minutes ago (after content)
      const lastSeenDate = new Date(mockNow.getTime() - 30 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(false);
    });
  });

  describe('Edge case: 6-day clock reset with multiple new items', () => {
    it('should show glow when newest content is 2 days old (within 6 days)', () => {
      // Multiple posts published, but tracking the most recent (2 days ago)
      const mostRecentDate = new Date(mockNow.getTime() - 2 * 24 * 60 * 60 * 1000);
      // User last visited 4 days ago
      const lastSeenDate = new Date(mockNow.getTime() - 4 * 24 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(true);
    });

    it('should show glow when new post published today (resets the 6-day window)', () => {
      // Brand new content published 1 hour ago
      const mostRecentDate = new Date(mockNow.getTime() - 1 * 60 * 60 * 1000);
      // User last visited 5 days ago
      const lastSeenDate = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(true);
    });

    it('should NOT show glow when all content is older than 6 days', () => {
      // Oldest tracked content is 8 days old
      const mostRecentDate = new Date(mockNow.getTime() - 8 * 24 * 60 * 60 * 1000);
      // User last visited 10 days ago
      const lastSeenDate = new Date(mockNow.getTime() - 10 * 24 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(false);
    });
  });

  describe('Edge case: Exactly at boundary conditions', () => {
    it('should NOT show glow when content is exactly 6 days old (returning visitor)', () => {
      // Content published exactly 6 days ago
      const mostRecentDate = new Date(mockNow.getTime() - 6 * 24 * 60 * 60 * 1000);
      // User last visited 7 days ago
      const lastSeenDate = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(false);
    });

    it('should show glow when content is 5 days 23 hours old (just under 6 days)', () => {
      // Content published 5 days and 23 hours ago
      const mostRecentDate = new Date(mockNow.getTime() - (5 * 24 + 23) * 60 * 60 * 1000);
      // User last visited 7 days ago
      const lastSeenDate = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(true);
    });
  });

  describe('Reactivation after dismiss', () => {
    it('should reactivate glow when new content is published after user dismissed notification', () => {
      // Content published 1 hour ago
      const mostRecentDate = new Date(mockNow.getTime() - 1 * 60 * 60 * 1000);
      // User dismissed notification 2 hours ago (before new content)
      const lastSeenDate = new Date(mockNow.getTime() - 2 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(true);
    });

    it('should NOT reactivate when user dismissed after the content was published', () => {
      // Content published 3 hours ago
      const mostRecentDate = new Date(mockNow.getTime() - 3 * 60 * 60 * 1000);
      // User dismissed 1 hour ago (after content)
      const lastSeenDate = new Date(mockNow.getTime() - 1 * 60 * 60 * 1000);
      const lastSeenStr = lastSeenDate.toISOString();

      const result = shouldShowNotificationGlow(mostRecentDate, lastSeenStr, mockNow);

      expect(result).toBe(false);
    });
  });
});

describe('NotificationBell - Time Constants', () => {
  it('should have 6 days defined as 518400000 milliseconds', () => {
    expect(SIX_DAYS_MS).toBe(6 * 24 * 60 * 60 * 1000);
    expect(SIX_DAYS_MS).toBe(518400000);
  });

  it('should have 48 hours defined as 172800000 milliseconds', () => {
    expect(FORTY_EIGHT_HOURS_MS).toBe(48 * 60 * 60 * 1000);
    expect(FORTY_EIGHT_HOURS_MS).toBe(172800000);
  });
});
