// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// =============================================================================
// RATE LIMITING - In-memory cache to prevent spam from same device
// =============================================================================
const viewCache = new Map<string, number>();
const RATE_LIMIT_DURATION = 60000; // 1 minute in milliseconds

/**
 * Cleans up old entries from the view cache
 */
function cleanupCache() {
  const now = Date.now();
  for (const [key, timestamp] of viewCache.entries()) {
    if (now - timestamp > RATE_LIMIT_DURATION) {
      viewCache.delete(key);
    }
  }
}

// Run cleanup every 5 minutes to prevent memory leaks
if (typeof setInterval !== 'undefined') {
  setInterval(cleanupCache, 5 * 60 * 1000);
}

/**
 * Checks if a view should be rate limited
 * @param slug - The blog post slug
 * @param identifier - Unique identifier (device ID)
 * @returns true if should be rate limited, false if allowed
 */
export function isRateLimited(slug: string, identifier: string): boolean {
  const cacheKey = `${slug}:${identifier}`;
  const lastView = viewCache.get(cacheKey);
  const now = Date.now();

  if (lastView && now - lastView < RATE_LIMIT_DURATION) {
    return true; // Still within rate limit window
  }
  return false;
}

/**
 * Updates the rate limit cache after a successful view increment
 * @param slug - The blog post slug
 * @param identifier - Unique identifier (device ID)
 */
export function updateRateLimitCache(slug: string, identifier: string): void {
  const cacheKey = `${slug}:${identifier}`;
  viewCache.set(cacheKey, Date.now());
}

/**
 * Generates a simple hash from IP address for privacy
 * @param ip - The IP address
 * @returns A hashed identifier
 */
export function hashIdentifier(ip: string): string {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
}

// =============================================================================
// BOT DETECTION - Bots can access content but won't be counted as views
// =============================================================================

/**
 * Checks if a user agent string belongs to a bot/crawler
 * Bots are ALLOWED to access content, just not counted as views
 * @param userAgent - The user agent string from the request
 * @returns true if it's a bot, false otherwise
 */
export function isBot(userAgent: string): boolean {
  if (!userAgent) return false;

  const ua = userAgent.toLowerCase();
  const botPatterns = [
    'bot',
    'crawler',
    'spider',
    'scraper',
    'slurp',
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'baiduspider',
    'facebookexternalhit',
    'twitterbot',
    'rogerbot',
    'linkedinbot',
    'embedly',
    'quora link preview',
    'showyoubot',
    'outbrain',
    'pinterest',
    'slackbot',
    'vkshare',
    'w3c_validator',
    'headless',
    'phantom',
    'selenium',
    'puppeteer',
    'lighthouse',
    'pagespeed',
  ];

  return botPatterns.some(pattern => ua.includes(pattern));
}

// =============================================================================
// VIEW TRACKING FUNCTIONS
// =============================================================================

/**
 * Increments the view count for a blog post (only for non-bots)
 * Bots can access the content but won't increment the counter
 * @param slug - The blog post slug
 * @param userAgent - User agent string to check for bots
 * @param clientIdentifier - Client identifier (device ID) for rate limiting
 * @returns The current view count, or null if failed
 */
export async function incrementViewCount(
  slug: string,
  userAgent?: string,
  clientIdentifier?: string
): Promise<number | null> {
  // IMPORTANT: Bots are allowed to access content, we just don't count them
  if (userAgent && isBot(userAgent)) {
    console.log(`Bot detected for slug: ${slug}, allowing access but not counting view`);
    return getViewCount(slug); // Return current count without incrementing
  }

  // Check rate limiting for non-bot users
  if (clientIdentifier && isRateLimited(slug, clientIdentifier)) {
    console.log(`Rate limited for slug: ${slug}, identifier: ${clientIdentifier}`);
    return getViewCount(slug); // Return current count without incrementing
  }

  try {
    // Insert unique view record (upsert prevents duplicates)
    const { error } = await supabase
      .from('post_views')
      .upsert(
        {
          post_slug: slug,
          device_id: clientIdentifier || 'unknown',
          viewed_at: new Date().toISOString()
        },
        {
          onConflict: 'post_slug,device_id',
          ignoreDuplicates: true // Don't increment if already exists
        }
      );

    if (error) {
      console.error('Error incrementing view count:', error);
      return null;
    }

    // Update rate limit cache only after successful increment
    if (clientIdentifier) {
      updateRateLimitCache(slug, clientIdentifier);
    }

    // Get updated count
    return getViewCount(slug);
  } catch (error) {
    console.error('Error in incrementViewCount:', error);
    return null;
  }
}

/**
 * Gets the current view count for a blog post
 * @param slug - The blog post slug
 * @returns The view count
 */
export async function getViewCount(slug: string): Promise<number> {
  try {
    const { data, error } = await supabase
      .rpc('get_unique_view_count', { slug });

    if (error) {
      console.error('Error fetching view count:', error);
      return 0;
    }

    return data || 0;
  } catch (error) {
    console.error('Error in getViewCount:', error);
    return 0;
  }
}

/**
 * Gets view counts for all blog posts in a single query
 * @returns Object with slug as key and view count as value
 */
export async function getAllViewCounts(): Promise<Record<string, number>> {
  try {
    const { data, error } = await supabase
      .rpc('get_all_view_counts');

    if (error) {
      console.error('Error fetching view counts:', error);
      return {};
    }

    const viewCounts: Record<string, number> = {};
    data?.forEach((item: { slug: string; count: number }) => {
      viewCounts[item.slug] = item.count;
    });

    return viewCounts;
  } catch (error) {
    console.error('Error in getAllViewCounts:', error);
    return {};
  }
}
