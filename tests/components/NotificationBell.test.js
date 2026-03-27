import { describe, it, expect, beforeEach } from 'vitest';

// ─── Pure helpers (mirrors the implementations in NotificationBell.astro) ────

const SIX_DAYS_MS        = 6 * 24 * 60 * 60 * 1000;
const FORTY_EIGHT_HOURS_MS = 48 * 60 * 60 * 1000;

function shouldShowNotificationGlow(mostRecentDate, lastDismissedStr, now = new Date()) {
  const timeSinceMostRecent = now.getTime() - mostRecentDate.getTime();
  if (!lastDismissedStr) {
    return timeSinceMostRecent < FORTY_EIGHT_HOURS_MS;
  }
  const isWithinSixDays    = timeSinceMostRecent < SIX_DAYS_MS;
  const isNewerThanDismiss = mostRecentDate > new Date(lastDismissedStr);
  return isWithinSixDays && isNewerThanDismiss;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatRelativeDate(dateStr, now = new Date()) {
  const days = Math.floor((now.getTime() - new Date(dateStr).getTime()) / 86400000);
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  return days + ' days ago';
}

function filterPostsByDismissal(posts, lastDismissedStr) {
  if (!lastDismissedStr) return posts;
  const cutoff = new Date(lastDismissedStr);
  return posts.filter(p => new Date(p.pubDate) > cutoff);
}

// ─── Date Logic ──────────────────────────────────────────────────────────────

describe('NotificationBell – Date Logic', () => {
  let mockNow;

  beforeEach(() => {
    mockNow = new Date('2025-03-15T12:00:00Z');
  });

  describe('First-time visitors (no portfolio_last_dismissed)', () => {
    it('shows glow when content is less than 48 hours old', () => {
      const d = new Date(mockNow.getTime() - 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, null, mockNow)).toBe(true);
    });

    it('shows glow when content is exactly 47 hours old', () => {
      const d = new Date(mockNow.getTime() - 47 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, null, mockNow)).toBe(true);
    });

    it('does NOT show glow when content is exactly 48 hours old', () => {
      const d = new Date(mockNow.getTime() - 48 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, null, mockNow)).toBe(false);
    });

    it('does NOT show glow when content is 3 days old', () => {
      const d = new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, null, mockNow)).toBe(false);
    });

    it('does NOT show glow when content is 7 days old', () => {
      const d = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, null, mockNow)).toBe(false);
    });
  });

  describe('Returning visitors (has portfolio_last_dismissed)', () => {
    it('shows glow when content within 6 days AND newer than last dismiss', () => {
      const d = new Date(mockNow.getTime() - 2 * 24 * 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(true);
    });

    it('shows glow when content is 5 days old and last dismissed 7 days ago', () => {
      const d = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(true);
    });

    it('does NOT show glow when content is older than 6 days', () => {
      const d = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 10 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(false);
    });

    it('does NOT show glow when content is older than last dismiss (within 6 days)', () => {
      const d = new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 1 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(false);
    });

    it('does NOT show glow when user dismissed after content published (1 h ago)', () => {
      const d = new Date(mockNow.getTime() - 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 30 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(false);
    });
  });

  describe('6-day clock reset with multiple new items', () => {
    it('shows glow when newest content is 2 days old (within 6 days)', () => {
      const d = new Date(mockNow.getTime() - 2 * 24 * 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 4 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(true);
    });

    it('shows glow when new post published today (resets 6-day window)', () => {
      const d = new Date(mockNow.getTime() - 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(true);
    });

    it('does NOT show glow when all content is older than 6 days', () => {
      const d = new Date(mockNow.getTime() - 8 * 24 * 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 10 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(false);
    });
  });

  describe('Boundary conditions', () => {
    it('does NOT show glow when content is exactly 6 days old (returning visitor)', () => {
      const d = new Date(mockNow.getTime() - 6 * 24 * 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(false);
    });

    it('shows glow when content is 5 days 23 hours old (just under 6 days)', () => {
      const d = new Date(mockNow.getTime() - (5 * 24 + 23) * 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(true);
    });
  });

  describe('Reactivation after dismiss', () => {
    it('reactivates glow when new content published after user dismissed', () => {
      const d = new Date(mockNow.getTime() - 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 2 * 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(true);
    });

    it('does NOT reactivate when user dismissed after the content was published', () => {
      const d = new Date(mockNow.getTime() - 3 * 60 * 60 * 1000);
      const dismissed = new Date(mockNow.getTime() - 60 * 60 * 1000);
      expect(shouldShowNotificationGlow(d, dismissed.toISOString(), mockNow)).toBe(false);
    });
  });
});

// ─── Time Constants ───────────────────────────────────────────────────────────

describe('NotificationBell – Time Constants', () => {
  it('SIX_DAYS_MS equals 518400000 ms', () => {
    expect(SIX_DAYS_MS).toBe(518400000);
  });

  it('FORTY_EIGHT_HOURS_MS equals 172800000 ms', () => {
    expect(FORTY_EIGHT_HOURS_MS).toBe(172800000);
  });
});

// ─── escapeHtml (Fix #7) ─────────────────────────────────────────────────────

describe('escapeHtml – XSS prevention', () => {
  it('escapes ampersands', () => {
    expect(escapeHtml('foo & bar')).toBe('foo &amp; bar');
  });

  it('escapes less-than', () => {
    expect(escapeHtml('<script>')).toBe('&lt;script&gt;');
  });

  it('escapes greater-than', () => {
    expect(escapeHtml('1 > 0')).toBe('1 &gt; 0');
  });

  it('escapes double quotes', () => {
    expect(escapeHtml('"quoted"')).toBe('&quot;quoted&quot;');
  });

  it('escapes all special characters in a post title', () => {
    expect(escapeHtml('A & B <em>"test"</em>')).toBe('A &amp; B &lt;em&gt;&quot;test&quot;&lt;/em&gt;');
  });

  it('passes through plain strings unchanged', () => {
    expect(escapeHtml('Hello World')).toBe('Hello World');
  });

  it('coerces non-strings via String()', () => {
    expect(escapeHtml(42)).toBe('42');
  });
});

// ─── formatRelativeDate ───────────────────────────────────────────────────────

describe('formatRelativeDate', () => {
  const mockNow = new Date('2025-03-15T12:00:00Z');

  it('returns "today" for a date within the last 24 hours', () => {
    const d = new Date(mockNow.getTime() - 2 * 60 * 60 * 1000); // 2 h ago
    expect(formatRelativeDate(d.toISOString(), mockNow)).toBe('today');
  });

  it('returns "yesterday" for a date 1 day ago', () => {
    const d = new Date(mockNow.getTime() - 30 * 60 * 60 * 1000); // 30 h ago
    expect(formatRelativeDate(d.toISOString(), mockNow)).toBe('yesterday');
  });

  it('returns "N days ago" for older dates', () => {
    const d = new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000);
    expect(formatRelativeDate(d.toISOString(), mockNow)).toBe('3 days ago');
  });

  it('returns "5 days ago" for a 5-day-old post', () => {
    const d = new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000);
    expect(formatRelativeDate(d.toISOString(), mockNow)).toBe('5 days ago');
  });
});

// ─── filterPostsByDismissal (Fix #6) ─────────────────────────────────────────

describe('filterPostsByDismissal – popover list filtering', () => {
  const mockNow = new Date('2025-03-15T12:00:00Z');

  const posts = [
    { title: 'Post A', slug: 'post-a', pubDate: new Date(mockNow.getTime() - 1 * 60 * 60 * 1000).toISOString() },  // 1 h ago
    { title: 'Post B', slug: 'post-b', pubDate: new Date(mockNow.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString() }, // 2 d ago
    { title: 'Post C', slug: 'post-c', pubDate: new Date(mockNow.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString() }, // 5 d ago
  ];

  it('returns all posts when lastDismissedStr is null (first-time visitor)', () => {
    expect(filterPostsByDismissal(posts, null)).toHaveLength(3);
  });

  it('returns all posts when lastDismissedStr is empty string (treated as falsy)', () => {
    expect(filterPostsByDismissal(posts, '')).toHaveLength(3);
  });

  it('returns only posts newer than the dismiss timestamp', () => {
    const dismissed = new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(); // 3 d ago
    const result = filterPostsByDismissal(posts, dismissed);
    expect(result).toHaveLength(2);
    expect(result.map(p => p.slug)).toEqual(['post-a', 'post-b']);
  });

  it('returns empty array when all posts are older than the dismiss timestamp', () => {
    const dismissed = new Date(mockNow.getTime() - 30 * 60 * 1000).toISOString(); // 30 min ago
    expect(filterPostsByDismissal(posts, dismissed)).toHaveLength(0);
  });

  it('returns all posts when dismiss timestamp is older than all posts', () => {
    const dismissed = new Date(mockNow.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(); // 7 d ago
    expect(filterPostsByDismissal(posts, dismissed)).toHaveLength(3);
  });
});
