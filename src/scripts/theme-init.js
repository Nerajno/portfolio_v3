/**
 * theme-init.js
 * Place this file at: src/scripts/theme-init.js
 *
 * PURPOSE: Runs synchronously before first paint to set the correct
 * theme class on <html>. This prevents Flash of Unstyled Content (FOUC)
 * when a user has a saved dark mode preference.
 *
 * HOW IT WORKS:
 *  1. Reads localStorage for a saved "theme" value
 *  2. Falls back to the OS-level prefers-color-scheme if no saved value
 *  3. Applies .dark or .light to <html> BEFORE the page renders
 *  4. The global.css rule `html:not(.light):not(.dark) { visibility: hidden }`
 *     acts as a safety net — the page stays invisible until this script fires
 *     and adds one of those classes, then `visibility: visible` kicks in.
 *
 * USAGE in Layout.astro:
 *   Import this as an inline script — it MUST be inline (not deferred/async)
 *   so it runs synchronously in <head> before any HTML is painted.
 */

(function () {
  const STORAGE_KEY = "theme";
  const DARK  = "dark";
  const LIGHT = "light";

  function getPreferredTheme() {
    // 1. Check localStorage first (user's explicit choice wins)
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === DARK || saved === LIGHT) return saved;
    } catch (_) {
      // localStorage blocked (private browsing, permissions) — fall through
    }

    // 2. Fall back to OS preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? DARK
      : LIGHT;
  }

  const theme = getPreferredTheme();
  const html  = document.documentElement;

  // Remove both classes first to avoid stacking, then apply the correct one
  html.classList.remove(DARK, LIGHT);
  html.classList.add(theme);

  // Also set data-theme for any components that use that selector
  html.setAttribute("data-theme", theme);
})();
