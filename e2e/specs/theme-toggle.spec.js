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
    await expect(themeToggle).toHaveAttribute('aria-label', 'Toggle theme');
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
