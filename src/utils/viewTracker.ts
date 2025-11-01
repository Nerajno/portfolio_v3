// src/utils/viewTracker.ts
import FingerprintJS from '@fingerprintjs/fingerprintjs';

/**
 * Tracks a unique view for a blog post
 * Uses localStorage for quick checks and fingerprinting for accuracy
 * Bots are allowed but not counted
 * @param postSlug - The blog post slug
 * @returns true if view was tracked, false if already viewed or error
 */
export async function trackUniqueView(postSlug: string): Promise<boolean> {
  try {
    // Step 1: Check localStorage first (quick check to avoid unnecessary API calls)
    const viewedPosts = JSON.parse(
      localStorage.getItem('viewedPosts') || '{}'
    );

    if (viewedPosts[postSlug]) {
      console.log('Post already viewed (localStorage)');
      return false; // Already counted
    }

    // Step 2: Generate device fingerprint for unique identification
    const fp = await FingerprintJS.load();
    const result = await fp.get();
    const deviceId = result.visitorId;

    // Step 3: Send to API to track the view
    const response = await fetch('/api/track-view', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        slug: postSlug,
        deviceId: deviceId
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Failed to track view:', error);
      return false;
    }

    // Step 4: Mark as viewed in localStorage to prevent duplicate API calls
    viewedPosts[postSlug] = true;
    localStorage.setItem('viewedPosts', JSON.stringify(viewedPosts));

    console.log('View tracked successfully');
    return true;
  } catch (error) {
    console.error('Error tracking view:', error);
    return false;
  }
}

/**
 * Gets the view count for a blog post
 * @param postSlug - The blog post slug
 * @returns The view count
 */
export async function getViewCount(postSlug: string): Promise<number> {
  try {
    const response = await fetch(`/api/get-view-count?slug=${encodeURIComponent(postSlug)}`);

    if (!response.ok) {
      console.error('Failed to get view count');
      return 0;
    }

    const data = await response.json();
    return data.count || 0;
  } catch (error) {
    console.error('Error getting view count:', error);
    return 0;
  }
}
