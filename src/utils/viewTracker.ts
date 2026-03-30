// src/utils/viewTracker.ts

/**
 * Tracks a unique view for a blog post
 * Uses localStorage for quick checks and server-side bot detection
 * @param postSlug - The blog post slug
 * @returns true if view was tracked, false if already viewed or error
 */
export async function trackUniqueView(postSlug: string): Promise<boolean> {
  try {
    // Step 1: Check localStorage first (quick check to avoid unnecessary API calls)
    let viewedPosts: Record<string, boolean> = {};
    try {
      const raw = localStorage.getItem('viewedPosts');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (
          typeof parsed === 'object' &&
          parsed !== null &&
          !Array.isArray(parsed)
        ) {
          viewedPosts = parsed;
        }
      }
    } catch (e) {
      // If parsing fails, default to empty object
      viewedPosts = {};
    }

    if (viewedPosts[postSlug]) {
      console.log('Post already viewed (localStorage)');
      return false; // Already counted
    }

    // Step 2: Send to API to track the view (server handles bot detection and rate limiting)
    const response = await fetch(`/api/views/${postSlug}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Failed to track view:', error);
      return false;
    }

    // Step 3: Mark as viewed in localStorage to prevent duplicate API calls
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
    const response = await fetch(`/api/views/${postSlug}`);

    if (!response.ok) {
      console.error('Failed to get view count');
      return 0;
    }

    const data = await response.json();
    return data.count|| 0;
  } catch (error) {
    console.error('Error getting view count:', error);
    return 0;
  }
}
