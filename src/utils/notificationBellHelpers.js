/**
 * Shared pure helpers for NotificationBell.
 * Imported by both src/components/NotificationBell.astro <script> and tests.
 */

export const SIX_DAYS_MS        = 6 * 24 * 60 * 60 * 1000;
export const FORTY_EIGHT_HOURS_MS = 48 * 60 * 60 * 1000;

/**
 * Escape a string for safe insertion via innerHTML.
 * @param {unknown} str
 * @returns {string}
 */
export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Return a human-readable relative date string.
 * @param {string} dateStr  - ISO date string
 * @param {Date}   [now]    - injectable for tests
 * @returns {string}
 */
export function formatRelativeDate(dateStr, now = new Date()) {
  const days = Math.floor((now.getTime() - new Date(dateStr).getTime()) / 86400000);
  if (days === 0) return 'today';
  if (days === 1) return 'yesterday';
  return days + ' days ago';
}

/**
 * Filter posts to only those newer than the last-dismissed timestamp.
 * Returns the full list when lastDismissedStr is falsy (first-time visitor).
 * @param {Array<{pubDate: string}>} posts
 * @param {string|null} lastDismissedStr
 * @returns {Array}
 */
export function filterPostsByDismissal(posts, lastDismissedStr) {
  if (!lastDismissedStr) return posts;
  const cutoff = new Date(lastDismissedStr);
  return posts.filter(p => new Date(p.pubDate) > cutoff);
}

/**
 * Determine whether the notification glow should be shown.
 * @param {Date}        mostRecentDate   - Most recent blog post publishDate
 * @param {string|null} lastDismissedStr - ISO string from portfolio_last_dismissed
 * @param {Date}        [now]            - injectable for tests
 * @returns {boolean}
 */
export function shouldShowNotificationGlow(mostRecentDate, lastDismissedStr, now = new Date()) {
  const timeSinceMostRecent = now.getTime() - mostRecentDate.getTime();
  if (!lastDismissedStr) {
    return timeSinceMostRecent < FORTY_EIGHT_HOURS_MS;
  }
  const isWithinSixDays    = timeSinceMostRecent < SIX_DAYS_MS;
  const isNewerThanDismiss = mostRecentDate > new Date(lastDismissedStr);
  return isWithinSixDays && isNewerThanDismiss;
}
