import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://eawipymyipimnbmvpfir.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhd2lweW15aXBpbW5ibXZwZmlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEyNDM0NDAsImV4cCI6MjA3NjgxOTQ0MH0.7VecgMsUSHu_fKTzo8FZraqVPDucjk6bssHZaNaNlBY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
const viewCache = /* @__PURE__ */ new Map();
const RATE_LIMIT_DURATION = 6e4;
function cleanupCache() {
  const now = Date.now();
  for (const [key, timestamp] of viewCache.entries()) {
    if (now - timestamp > RATE_LIMIT_DURATION) {
      viewCache.delete(key);
    }
  }
}
if (typeof setInterval !== "undefined") {
  setInterval(cleanupCache, 5 * 60 * 1e3);
}
function isRateLimited(slug, identifier) {
  const cacheKey = `${slug}:${identifier}`;
  const lastView = viewCache.get(cacheKey);
  const now = Date.now();
  if (lastView && now - lastView < RATE_LIMIT_DURATION) {
    return true;
  }
  return false;
}
function updateRateLimitCache(slug, identifier) {
  const cacheKey = `${slug}:${identifier}`;
  viewCache.set(cacheKey, Date.now());
}
function hashIdentifier(ip) {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    const char = ip.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}
function isBot(userAgent) {
  if (!userAgent) return false;
  const ua = userAgent.toLowerCase();
  const botPatterns = [
    "bot",
    "crawler",
    "spider",
    "scraper",
    "slurp",
    "googlebot",
    "bingbot",
    "yandexbot",
    "duckduckbot",
    "baiduspider",
    "facebookexternalhit",
    "twitterbot",
    "rogerbot",
    "linkedinbot",
    "embedly",
    "quora link preview",
    "showyoubot",
    "outbrain",
    "pinterest",
    "slackbot",
    "vkshare",
    "w3c_validator",
    "headless",
    "phantom",
    "selenium",
    "puppeteer",
    "lighthouse",
    "pagespeed"
  ];
  return botPatterns.some((pattern) => ua.includes(pattern));
}
async function incrementViewCount(slug, userAgent, clientIdentifier) {
  if (userAgent && isBot(userAgent)) {
    console.log(`Bot detected for slug: ${slug}, allowing access but not counting view`);
    return getViewCount(slug);
  }
  if (clientIdentifier && isRateLimited(slug, clientIdentifier)) {
    console.log(`Rate limited for slug: ${slug}, identifier: ${clientIdentifier}`);
    return getViewCount(slug);
  }
  try {
    const { error } = await supabase.from("post_views").upsert(
      {
        post_slug: slug,
        device_id: clientIdentifier || "unknown",
        viewed_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        onConflict: "post_slug,device_id",
        ignoreDuplicates: true
        // Don't increment if already exists
      }
    );
    if (error) {
      console.error("Error incrementing view count:", error);
      return null;
    }
    if (clientIdentifier) {
      updateRateLimitCache(slug, clientIdentifier);
    }
    return getViewCount(slug);
  } catch (error) {
    console.error("Error in incrementViewCount:", error);
    return null;
  }
}
async function getViewCount(slug) {
  try {
    const { data, error } = await supabase.rpc("get_unique_view_count", { slug });
    if (error) {
      console.error("Error fetching view count:", error);
      return 0;
    }
    return data || 0;
  } catch (error) {
    console.error("Error in getViewCount:", error);
    return 0;
  }
}
async function getAllViewCounts() {
  try {
    const { data, error } = await supabase.rpc("get_all_view_counts");
    if (error) {
      console.error("Error fetching view counts:", error);
      return {};
    }
    const viewCounts = {};
    data?.forEach((item) => {
      viewCounts[item.slug] = item.count;
    });
    return viewCounts;
  } catch (error) {
    console.error("Error in getAllViewCounts:", error);
    return {};
  }
}

export { incrementViewCount as a, getAllViewCounts as b, getViewCount as g, hashIdentifier as h, isBot as i };
