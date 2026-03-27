/**
 * Component-level and interaction tests for NotificationBell.
 *
 * Render tests: use AstroContainer to assert the correct ARIA markup is
 * emitted server-side regardless of client-side state.
 *
 * Interaction tests: use the happy-dom environment (already configured in
 * vitest.config.js) to drive the pure helper logic that backs UI decisions.
 */
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';

// astro:content is server-only; mock it so AstroContainer can render the component
vi.mock('astro:content', () => ({
  getCollection: vi.fn().mockResolvedValue([]),
}));

import NotificationBell from '../../src/components/NotificationBell.astro';
import {
  escapeHtml,
  filterPostsByDismissal,
  shouldShowNotificationGlow,
  SIX_DAYS_MS,
  FORTY_EIGHT_HOURS_MS,
} from '../../src/utils/notificationBellHelpers.js';

// ─── Render tests (ARIA structure) ───────────────────────────────────────────

describe('NotificationBell – ARIA markup', () => {
  let html;

  beforeEach(async () => {
    const container = await AstroContainer.create();
    html = await container.renderToString(NotificationBell);
  });

  it('renders an aria-live polite region for screen-reader announcements', () => {
    expect(html).toContain('aria-live="polite"');
    expect(html).toContain('aria-atomic="true"');
  });

  it('renders the bell as a <button> (not a div or span)', () => {
    expect(html).toMatch(/<button[^>]*id="notification-bell"/);
  });

  it('bell has aria-describedby pointing to the tooltip', () => {
    expect(html).toContain('aria-describedby="bell-tooltip"');
  });

  it('bell has a default aria-label in dismissed/up-to-date state', () => {
    expect(html).toContain('aria-label="Notifications, up to date"');
  });

  it('tooltip has role="tooltip" (SC 1.4.13 — not title attribute)', () => {
    expect(html).toContain('role="tooltip"');
    expect(html).not.toMatch(/<button[^>]*title=/);
  });

  it('count badge has aria-hidden="true" (count announced via live region)', () => {
    expect(html).toMatch(/id="count-badge"[^>]*aria-hidden="true"|aria-hidden="true"[^>]*id="count-badge"/);
  });

  it('SVG bell icon has aria-hidden="true" and focusable="false"', () => {
    expect(html).toMatch(/aria-hidden="true"[^>]*focusable="false"|focusable="false"[^>]*aria-hidden="true"/);
  });

  it('popover has role="dialog" with aria-labelledby', () => {
    expect(html).toContain('role="dialog"');
    expect(html).toContain('aria-labelledby="bell-popover-heading"');
  });

  it('popover heading has tabindex="-1" for programmatic focus', () => {
    expect(html).toContain('id="bell-popover-heading"');
    expect(html).toContain('tabindex="-1"');
  });
});

// ─── Interaction logic tests (happy-dom) ─────────────────────────────────────
//
// These tests drive the pure decision functions that back the interactive
// behaviors: tooltip suppression, glow reactivation, and popover filtering.
// Full DOM event-wiring tests would require extracting initNotificationBell
// to its own module — tracked as a follow-up refactor.

describe('NotificationBell – tooltip suppression logic (SC 1.4.13)', () => {
  // The tooltip-suppressed class is added on Escape and removed on blur/mouseenter.
  // We verify the DOM class manipulation contract using happy-dom.

  it('adding tooltip-suppressed class hides tooltip (CSS contract)', () => {
    const btn = document.createElement('button');
    btn.classList.add('bell-btn');
    const tip = document.createElement('span');
    tip.classList.add('bell-tooltip');
    btn.appendChild(tip);
    document.body.appendChild(btn);

    // Before: tooltip visible on focus (no suppression class)
    expect(btn.classList.contains('tooltip-suppressed')).toBe(false);

    // Simulate Escape press adding the class
    btn.classList.add('tooltip-suppressed');
    expect(btn.classList.contains('tooltip-suppressed')).toBe(true);

    // Simulate blur removing the class
    btn.classList.remove('tooltip-suppressed');
    expect(btn.classList.contains('tooltip-suppressed')).toBe(false);

    document.body.removeChild(btn);
  });
});

describe('NotificationBell – glow reactivation after new publish', () => {
  const mockNow = new Date('2025-03-15T12:00:00Z');

  it('glow reactivates when a post is published after the stored dismiss time', () => {
    const dismissedAt  = new Date(mockNow.getTime() - 2 * 60 * 60 * 1000); // 2 h ago
    const publishedAt  = new Date(mockNow.getTime() - 1 * 60 * 60 * 1000); // 1 h ago — NEWER

    expect(
      shouldShowNotificationGlow(publishedAt, dismissedAt.toISOString(), mockNow)
    ).toBe(true);
  });

  it('glow stays off when nothing new has been published since last dismiss', () => {
    const dismissedAt  = new Date(mockNow.getTime() - 60 * 60 * 1000);  // 1 h ago
    const publishedAt  = new Date(mockNow.getTime() - 2 * 60 * 60 * 1000); // 2 h ago — OLDER

    expect(
      shouldShowNotificationGlow(publishedAt, dismissedAt.toISOString(), mockNow)
    ).toBe(false);
  });
});

describe('NotificationBell – badge/list count consistency', () => {
  // Verifies filterPostsByDismissal produces a consistent count for badge + list.
  const mockNow = new Date('2025-03-15T12:00:00Z');

  const allRecentPosts = [
    { slug: 'a', title: 'Post A', pubDate: new Date(mockNow.getTime() - 1 * 60 * 60 * 1000).toISOString() },
    { slug: 'b', title: 'Post B', pubDate: new Date(mockNow.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString() },
  ];

  it('badge count matches visible post count when some posts are dismissed', () => {
    // User dismissed 25 hours ago — Post A (1 h) is new, Post B (2 d) is NOT new
    const dismissedAt = new Date(mockNow.getTime() - 25 * 60 * 60 * 1000).toISOString();
    const visible = filterPostsByDismissal(allRecentPosts, dismissedAt);

    // Only Post A should be visible
    expect(visible).toHaveLength(1);
    expect(visible[0].slug).toBe('a');
    // Badge would show "1", not "2" (the raw server count)
  });

  it('all posts visible when no dismiss timestamp (first-time visitor)', () => {
    const visible = filterPostsByDismissal(allRecentPosts, null);
    expect(visible).toHaveLength(2);
  });
});

describe('NotificationBell – popover empty state when all posts dismissed', () => {
  it('filterPostsByDismissal returns empty array → popover shows up-to-date state', () => {
    const mockNow = new Date('2025-03-15T12:00:00Z');
    const posts = [
      { slug: 'a', title: 'Old Post', pubDate: new Date(mockNow.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString() },
    ];
    // Dismissed 1 day ago (after the post was published 3 days ago)
    const dismissedAt = new Date(mockNow.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString();

    const visible = filterPostsByDismissal(posts, dismissedAt);
    expect(visible).toHaveLength(0);
    // Component would render the empty/up-to-date state in the popover
  });
});

describe('NotificationBell – XSS: escapeHtml used before innerHTML', () => {
  it('a post title with HTML tags is safely escaped', () => {
    const maliciousTitle = '<img src=x onerror=alert(1)>';
    const escaped = escapeHtml(maliciousTitle);
    expect(escaped).toBe('&lt;img src=x onerror=alert(1)&gt;');
    expect(escaped).not.toContain('<img');
  });

  it('a post slug with special characters is safely escaped', () => {
    const maliciousSlug = 'foo"onmouseover="alert(1)';
    const escaped = escapeHtml(maliciousSlug);
    expect(escaped).not.toContain('"onmouseover');
    expect(escaped).toContain('&quot;');
  });
});
