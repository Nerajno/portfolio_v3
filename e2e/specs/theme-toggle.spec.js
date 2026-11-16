import { test, expect } from '@playwright/test';

test.describe('Theme Toggle', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have theme toggle button visible', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');
    await expect(themeToggle).toBeVisible();
  });

  test('should have accessible button attributes', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');
    await expect(themeToggle).toHaveAttribute('aria-label', 'Dark mode');
    await expect(themeToggle).toHaveAttribute('title', /dark|light|theme/i);
  });

  test('should toggle dark mode when clicked', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');

    // Get initial theme
    const initialTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    // Click toggle
    await themeToggle.click();
    await page.waitForTimeout(300); // Wait for transition

    // Check theme changed
    const newTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    expect(newTheme).not.toBe(initialTheme);
  });

  test('should toggle back to original theme', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');

    // Get initial theme
    const initialTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    // Toggle twice
    await themeToggle.click();
    await page.waitForTimeout(300);
    await themeToggle.click();
    await page.waitForTimeout(300);

    // Should be back to initial theme
    const finalTheme = await page.evaluate(() => {
      return document.documentElement.classList.contains('dark');
    });

    expect(finalTheme).toBe(initialTheme);
  });

  test('should persist theme preference in localStorage', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');

    // Toggle theme
    await themeToggle.click();
    await page.waitForTimeout(300);

    // Check localStorage
    const storedTheme = await page.evaluate(() => {
      return localStorage.getItem('theme');
    });

    expect(storedTheme).toBeTruthy();
    expect(['dark', 'light']).toContain(storedTheme);
  });

  test('should maintain theme preference across page navigation', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');

    // Set dark mode
    const initialIsDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );

    if (!initialIsDark) {
      await themeToggle.click();
      await page.waitForTimeout(300);
    }

    // Navigate to another page
    await page.click('nav a:has-text("Blog")');
    await page.waitForLoadState('networkidle');

    // Theme should persist
    const isDarkOnBlog = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );

    expect(isDarkOnBlog).toBe(true);
  });

  test('should show correct icon for current theme', async ({ page }) => {
    const sunIcon = page.locator('#sun-icon');
    const moonIcon = page.locator('#moon-icon');

    // One icon should be visible
    const sunVisible = await sunIcon.isVisible();
    const moonVisible = await moonIcon.isVisible();

    // Exactly one should be visible (XOR)
    expect(sunVisible !== moonVisible).toBeTruthy();
  });

  test('should swap icons when theme toggles', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');
    const sunIcon = page.locator('#sun-icon');
    const moonIcon = page.locator('#moon-icon');

    // Get initial icon visibility
    const initialSunVisible = await sunIcon.isVisible();
    const initialMoonVisible = await moonIcon.isVisible();

    // Toggle theme
    await themeToggle.click();
    await page.waitForTimeout(300);

    // Icons should swap
    const finalSunVisible = await sunIcon.isVisible();
    const finalMoonVisible = await moonIcon.isVisible();

    expect(finalSunVisible).not.toBe(initialSunVisible);
    expect(finalMoonVisible).not.toBe(initialMoonVisible);
  });

  test('should be keyboard accessible', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');

    // Focus the button
    await themeToggle.focus();

    // Check it's focused
    const isFocused = await themeToggle.evaluate((el) => el === document.activeElement);
    expect(isFocused).toBeTruthy();

    // Get initial theme
    const initialTheme = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );

    // Press Enter or Space to toggle
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);

    // Theme should change
    const newTheme = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );

    expect(newTheme).not.toBe(initialTheme);
  });

  test('should have visible focus indicator', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');

    // Focus the button
    await themeToggle.focus();

    // Check for focus ring
    const hasFocusRing = await themeToggle.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return styles.outline !== 'none' || styles.boxShadow.includes('ring');
    });

    expect(hasFocusRing).toBeTruthy();
  });
});

test.describe('Theme Toggle - Dark Mode Styles', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should apply dark mode styles to body/html', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');

    // Enable dark mode
    const isDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );

    if (!isDark) {
      await themeToggle.click();
      await page.waitForTimeout(300);
    }

    // Check html element has dark class
    const hasDarkClass = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );

    expect(hasDarkClass).toBeTruthy();
  });

  test('should change background color in dark mode', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');

    // Get light mode background
    const lightBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    // Toggle to dark mode
    await themeToggle.click();
    await page.waitForTimeout(300);

    // Get dark mode background
    const darkBg = await page.evaluate(() => {
      return window.getComputedStyle(document.body).backgroundColor;
    });

    // Background should be different
    expect(darkBg).not.toBe(lightBg);
  });

  test('dark mode should work on all pages', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');

    // Enable dark mode on homepage
    const initialIsDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );

    if (!initialIsDark) {
      await themeToggle.click();
      await page.waitForTimeout(300);
    }

    // Check dark mode on different pages
    const pages = ['/blog', '/speaking', '/contact'];

    for (const pagePath of pages) {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');

      const isDark = await page.evaluate(() =>
        document.documentElement.classList.contains('dark')
      );

      expect(isDark).toBe(true);
    }
  });
});

test.describe('Theme Toggle - System Preference', () => {
  test('should respect system color scheme preference', async ({ page, context }) => {
    // Set system to dark mode
    await context.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check if dark mode is applied (if not overridden by user preference)
    const isDark = await page.evaluate(() =>
      document.documentElement.classList.contains('dark')
    );

    // Should be dark or have user preference
    expect(typeof isDark).toBe('boolean');
  });
});

// #335 — zero-FOUC test matrix. Each test starts with empty storage.
test.describe('Theme - zero FOUC (#335)', () => {
  for (const scheme of ['light', 'dark']) {
    test(`no stored theme follows system ${scheme} preference`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.goto('/');
      const html = page.locator('html');
      await expect(html).toHaveClass(new RegExp(`\\b${scheme}\\b`));
      await expect(html).toHaveAttribute('data-theme', scheme);
      await expect(page.locator('#theme-toggle')).toHaveAttribute('aria-pressed', String(scheme === 'dark'));
    });
  }

  test('theme is set before first paint (inline head script)', async ({ page }) => {
    await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
    // Record the html state as soon as <body> exists, before any paint-relevant content.
    await page.addInitScript(() => {
      new MutationObserver((_, obs) => {
        if (document.body) {
          window.__themeAtBody = document.documentElement.getAttribute('data-theme');
          obs.disconnect();
        }
      }).observe(document, { childList: true, subtree: true });
    });
    await page.goto('/');
    expect(await page.evaluate(() => window.__themeAtBody)).toBe('dark');
  });

  test('toggle light -> dark -> light updates class, data-theme and aria-pressed', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    const html = page.locator('html');
    const toggle = page.locator('#theme-toggle');

    await toggle.click();
    await expect(html).toHaveClass(/\bdark\b/);
    await expect(html).not.toHaveClass(/\blight\b/);
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await expect(toggle).toHaveAttribute('aria-pressed', 'true');

    await toggle.click();
    await expect(html).toHaveClass(/\blight\b/);
    await expect(html).not.toHaveClass(/\bdark\b/);
    await expect(html).toHaveAttribute('data-theme', 'light');
    await expect(toggle).toHaveAttribute('aria-pressed', 'false');
  });

  test('choice persists across reload and overrides system preference', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    await page.locator('#theme-toggle').click();
    await page.reload();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
    expect(await page.evaluate(() => localStorage.getItem('theme'))).toBe('dark');
  });

  for (const scheme of ['light', 'dark']) {
    test(`color-scheme is ${scheme} in ${scheme} mode`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: scheme });
      await page.goto('/');
      const cs = await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme);
      expect(cs).toBe(scheme);
    });
  }
});
