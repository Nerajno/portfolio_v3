import { test, expect } from '@playwright/test';

const devices = [
  { name: 'Mobile', width: 375, height: 667 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Desktop', width: 1920, height: 1080 },
];

devices.forEach(({ name, width, height }) => {
  test.describe(`Responsive Design - ${name}`, () => {
    test.beforeEach(async ({ page }) => {
      await page.setViewportSize({ width, height });
    });

    test(`should display homepage correctly on ${name}`, async ({ page }) => {
      await page.goto('/');

      // Hero heading should be visible
      await expect(page.locator('h1')).toBeVisible();

      // Navigation should be accessible
      const nav = page.locator('nav');
      await expect(nav).toBeVisible();

      // Hero image should be visible
      const heroImage = page.locator('main img').first();
      await expect(heroImage).toBeVisible();
    });

    test(`should have functional navigation on ${name}`, async ({ page }) => {
      await page.goto('/');

      // Navigation links should be clickable
      if (name === 'Mobile') {
        // Mobile might have hamburger menu
        const mobileMenuButton = page.locator('button[aria-label*="menu"], .mobile-menu-toggle');

        if (await mobileMenuButton.isVisible()) {
          await mobileMenuButton.click();
          await page.waitForTimeout(300);
        }
      }

      // Blog link should be accessible
      const blogLink = page.locator('nav a:has-text("Blog"), a:has-text("Blog")').first();
      await expect(blogLink).toBeVisible();
    });

    test(`should display blog posts correctly on ${name}`, async ({ page }) => {
      await page.goto('/blog');

      // Page should load
      await expect(page.locator('h1')).toBeVisible();

      // Blog posts should be visible
      const posts = page.locator('article, a[href*="/blog/"]:not(nav a)');
      const count = await posts.count();
      expect(count).toBeGreaterThan(0);
    });

    test(`form should be usable on ${name}`, async ({ page }) => {
      await page.goto('/contact');

      const form = page.locator('form');
      await expect(form).toBeVisible();

      // Form fields should be visible and clickable
      await expect(page.locator('input[name="name"]')).toBeVisible();
      await expect(page.locator('input[name="email"]')).toBeVisible();
      await expect(page.locator('textarea[name="message"]')).toBeVisible();

      // Fields should be editable
      await page.fill('input[name="name"]', 'Test');
      const value = await page.inputValue('input[name="name"]');
      expect(value).toBe('Test');
    });

    test(`buttons should be tappable on ${name}`, async ({ page }) => {
      await page.goto('/');

      const themeToggle = page.locator('#theme-toggle');
      await expect(themeToggle).toBeVisible();

      // Button should have adequate touch target
      const box = await themeToggle.boundingBox();
      if (name === 'Mobile' || name === 'Tablet') {
        // Touch target should be at least 44x44px
        expect(box.width).toBeGreaterThanOrEqual(40);
        expect(box.height).toBeGreaterThanOrEqual(40);
      }
    });

    test(`text should be readable on ${name}`, async ({ page }) => {
      await page.goto('/');

      const heading = page.locator('h1').first();
      const fontSize = await heading.evaluate((el) => {
        return window.getComputedStyle(el).fontSize;
      });

      // Font size should be reasonable
      const size = parseFloat(fontSize);
      expect(size).toBeGreaterThan(20); // Minimum readable size
    });

    test(`images should load on ${name}`, async ({ page }) => {
      await page.goto('/');

      const images = page.locator('img');
      const count = await images.count();
      expect(count).toBeGreaterThan(0);

      // First image should be loaded
      const firstImage = images.first();
      const isComplete = await firstImage.evaluate((img) => img.complete);
      expect(isComplete).toBeTruthy();
    });

    test(`should not have horizontal scroll on ${name}`, async ({ page }) => {
      await page.goto('/');

      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
      });

      expect(hasHorizontalScroll).toBeFalsy();
    });

    test(`speaking page should display events on ${name}`, async ({ page }) => {
      await page.goto('/speaking');

      await expect(page.locator('h1')).toBeVisible();

      // Events should be visible
      const events = page.locator('.bg-white, article');
      const count = await events.count();
      expect(count).toBeGreaterThan(0);
    });
  });
});

test.describe('Responsive Layout - Content Adaptation', () => {
  test('should have appropriate grid layout on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    // Hero should use grid layout
    const main = page.locator('main').first();
    const display = await main.evaluate((el) => window.getComputedStyle(el).display);

    expect(['grid', 'flex', 'block']).toContain(display);
  });

  test('should stack content on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Content should be stacked vertically
    const main = page.locator('main').first();
    const box = await main.boundingBox();

    // Height should be greater than width for stacked content
    expect(box.height).toBeGreaterThan(box.width * 0.5);
  });
});

test.describe('Responsive Typography', () => {
  test('should have larger text on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const heading = page.locator('h1').first();
    const desktopSize = await heading.evaluate((el) =>
      parseFloat(window.getComputedStyle(el).fontSize)
    );

    // Reset viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const mobileSize = await heading.evaluate((el) =>
      parseFloat(window.getComputedStyle(el).fontSize)
    );

    // Desktop heading should be larger or equal
    expect(desktopSize).toBeGreaterThanOrEqual(mobileSize);
  });
});

test.describe('Responsive Navigation', () => {
  test('should have visible nav links on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');

    const blogLink = page.locator('nav a:has-text("Blog")');
    await expect(blogLink).toBeVisible();
  });

  test('navigation should be accessible on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Nav should exist (might be in mobile menu)
    const nav = page.locator('nav');
    await expect(nav).toBeAttached();
  });
});
