import { describe, it, expect, beforeEach } from 'vitest';

const SIX_DAYS_MS        = 6 * 24 * 60 * 60 * 1000;
const FORTY_EIGHT_HOURS_MS = 48 * 60 * 60 * 1000;

/**
 * Determine if the notification glow should be shown.
 *
 * @param {Date}        mostRecentDate    - Most recent blog post publishDate
 * @param {string|null} lastDismissedStr  - ISO string from portfolio_last_dismissed
 * @param {Date}        now               - Current date/time (injectable for tests)
 * @returns {boolean}
 */
function shouldShowNotificationGlow(mostRecentDate, lastDismissedStr, now = new Date()) {
  const timeSinceMostRecent = now.getTime() - mostRecentDate.getTime();

  if (!lastDismissedStr) {
    // First-time visitor (no dismiss timestamp): glow only if content < 48 h old
    return timeSinceMostRecent < FORTY_EIGHT_HOURS_MS;
  }

  // Returning visitor: glow if content is within 6 days AND newer than last dismiss
  const isWithinSixDays    = timeSinceMostRecent < SIX_DAYS_MS;
  const isNewerThanDismiss = mostRecentDate > new Date(lastDismissedStr);

  return isWithinSixDays && isNewerThanDismiss;
}

// ---------------------------------------------------------------------------

describe('NotificationBell – Date Logic', () => {
  let mockNow;

  beforeEach(() => {
    mockNow = new Date('2025-03-15T12:00:00Z');
  });

  describe('First-time visitors (no portfolio_last_dismissed)', () => {
    it('shows glow when content is less than 48 hours old', () => {
      const mostRecentDate = new Date(mockNow.getTime() - 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, null, mockNow)).toBe(true);
    });

    it('shows glow when content is exactly 47 hours old', () => {
      const mostRecentDate = new Date(mockNow.getTime() - 47 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, null, mockNow)).toBe(true);
    });

    it('does NOT show glow when content is exactly 48 hours old', () => {
      const mostRecentDate = new Date(mockNow.getTime() - 48 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, null, mockNow)).toBe(false);
    });

    it('does NOT show glow when content is 3 days old', () => {
      const mostRecentDate = new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, null, mockNow)).toBe(false);
    });

    it('does NOT show glow when content is 7 days old', () => {
      const mostRecentDate = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, null, mockNow)).toBe(false);
    });
  });

  describe('Returning visitors (has portfolio_last_dismissed)', () => {
    it('shows glow when content within 6 days AND newer than last dismiss', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 2 * 24 * 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(true);
    });

    it('shows glow when content is 5 days old and last dismissed 7 days ago', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(true);
    });

    it('does NOT show glow when content is older than 6 days', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 10 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(false);
    });

    it('does NOT show glow when content is older than last dismiss (within 6 days)', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 1 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(false);
    });

    it('does NOT show glow when user dismissed after content published (1 h ago)', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 30 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(false);
    });
  });

  describe('6-day clock reset with multiple new items', () => {
    it('shows glow when newest content is 2 days old (within 6 days)', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 2 * 24 * 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 4 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(true);
    });

    it('shows glow when new post published today (resets 6-day window)', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(true);
    });

    it('does NOT show glow when all content is older than 6 days', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 8 * 24 * 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 10 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(false);
    });
  });

  describe('Boundary conditions', () => {
    it('does NOT show glow when content is exactly 6 days old (returning visitor)', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 6 * 24 * 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(false);
    });

    it('shows glow when content is 5 days 23 hours old (just under 6 days)', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - (5 * 24 + 23) * 60 * 60 * 1000);
      const lastDismissed   = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(true);
    });
  });

  describe('Reactivation after dismiss', () => {
    it('reactivates glow when new content published after user dismissed', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 60 * 60 * 1000);      // 1 h ago
      const lastDismissed   = new Date(mockNow.getTime() - 2 * 60 * 60 * 1000);  // 2 h ago
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(true);
    });

    it('does NOT reactivate when user dismissed after the content was published', () => {
      const mostRecentDate  = new Date(mockNow.getTime() - 3 * 60 * 60 * 1000);  // 3 h ago
      const lastDismissed   = new Date(mockNow.getTime() - 60 * 60 * 1000);      // 1 h ago
      expect(shouldShowNotificationGlow(mostRecentDate, lastDismissed.toISOString(), mockNow)).toBe(false);
    });
  });
});

// ---------------------------------------------------------------------------

describe('NotificationBell – Time Constants', () => {
  it('SIX_DAYS_MS equals 518400000 ms', () => {
    expect(SIX_DAYS_MS).toBe(518400000);
  });

  it('FORTY_EIGHT_HOURS_MS equals 172800000 ms', () => {
    expect(FORTY_EIGHT_HOURS_MS).toBe(172800000);
  });
});
