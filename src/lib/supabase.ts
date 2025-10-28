// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// =============================================================================
// RATE LIMITING
// =============================================================================
// In-memory cache to prevent spam from the same user viewing the same post
// Key format: "slug:identifier" (e.g., "my-post:192.168.1.1")
const viewCache = new Map<string, number>();
const RATE_LIMIT_DURATION = 60000; // 1 minute in milliseconds

/**
 * Cleans up old entries from the view cache (older than rate limit duration)
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
 * @param identifier - Unique identifier (IP, user ID, etc.)
 * @returns true if should be rate limited, false if allowed
 */
export function isRateLimited(slug: string, identifier: string): boolean {
  const cacheKey = `${slug}:${identifier}`;
  const lastView = viewCache.get(cacheKey);
  const now = Date.now();

  if (lastView && now - lastView < RATE_LIMIT_DURATION) {
    // Still within rate limit window
    return true;
  }

  // Don't update cache here - will be updated after successful increment
  return false;
}

/**
 * Updates the rate limit cache after a successful view increment
 * @param slug - The blog post slug
 * @param identifier - Unique identifier (IP, user ID, etc.)
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
  // Simple hash function for privacy (consider using crypto.subtle in production)
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
}

// Type definitions for your views table
export interface ViewsTable {
  id?: number;
  slug: string;
  view_count: number;
  created_at?: string;
  updated_at?: string;
}

/**
 * Checks if a user agent string belongs to a bot/crawler
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
    'vkShare',
    'W3C_Validator',
    'headless',
    'phantom',
    'selenium',
    'puppeteer',
    'lighthouse',
    'pagespeed',
  ];

  return botPatterns.some(pattern => ua.includes(pattern));
}

/**
 * Increments the view count for a blog post
 * @param slug - The blog post slug
 * @param userAgent - Optional user agent string to check for bots
 * @param clientIdentifier - Optional client identifier (IP hash) for rate limiting
 * @returns The new view count, or null if failed
 */
export async function incrementViewCount(
  slug: string,
  userAgent?: string,
  clientIdentifier?: string
): Promise<number | null> {
  // Skip incrementing if this is a bot
  if (userAgent && isBot(userAgent)) {
    console.log(`Bot detected for slug: ${slug}, skipping increment`);
    return getViewCount(slug);
  }

  // Check rate limiting if identifier provided
  if (clientIdentifier && isRateLimited(slug, clientIdentifier)) {
    console.log(`Rate limited for slug: ${slug}, identifier: ${clientIdentifier}`);
    return getViewCount(slug);
  }
  try {
    const { data, error } = await supabase.rpc('update_views', {
      input_slug: slug
    });

    if (error) {
      console.error('Error incrementing view count:', error);
      return null;
    }

    // Update rate limit cache only after successful increment
    if (clientIdentifier && data) {
      updateRateLimitCache(slug, clientIdentifier);
    }

    // RPC function returns the count directly (not in an array)
    return typeof data === 'number' ? data : data?.count || null;
  } catch (error) {
    console.error('Error in incrementViewCount:', error);
    return null;
  }
}

export async function getViewCount(slug: string): Promise<number> {
  try {
    const { data, error } = await supabase
      .from('views')
      .select('view_count')
      .eq('slug', slug)
      .single();

    if (error) {
      // If no record exists, return 0
      if (error.code === 'PGRST116') {
        return 0;
      }
      console.error('Error fetching view count:', error);
      return 0;
    }

    return data?.view_count || 0;
  } catch (error) {
    console.error('Error in getViewCount:', error);
    return 0;
  }
}

export async function getAllViewCounts(): Promise<Record<string, number>> {
  try {
    const { data, error } = await supabase
      .from('views')
      .select('slug, view_count');

    if (error) {
      console.error('Error fetching all view counts:', error);
      return {};
    }

    // Convert array to object for easier access
    const viewCounts: Record<string, number> = {};
    data?.forEach(item => {
      viewCounts[item.slug] = item.view_count;
    });

    return viewCounts;
  } catch (error) {
    console.error('Error in getAllViewCounts:', error);
    return {};
  }
}
