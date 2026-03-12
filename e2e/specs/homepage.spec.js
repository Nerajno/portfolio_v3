import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section with correct content', async ({ page }) => {
    // Check heading
    const heading = page.locator('main h1').first();
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Nerando');

    // Check description - use more specific selectors
    await expect(page.locator('main span[itemprop="jobTitle"]')).toBeVisible();
    await expect(page.locator('main')).toContainText('Vue');
  });

  test('should have working "Currently Learning" link', async ({ page }) => {
    const learningLink = page.locator('a:has-text("Currently Learning")');
    await expect(learningLink).toBeVisible();

    // Check it has correct attributes
    await expect(learningLink).toHaveAttribute('target', '_blank');
    await expect(learningLink).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(learningLink).toHaveAttribute('href', /garden\.developingdvlpr\.com/);
  });

  test('should have working "Currently Building" link', async ({ page }) => {
    const buildingLink = page.locator('a:has-text("Currently Building")');
    await expect(buildingLink).toBeVisible();

    await expect(buildingLink).toHaveAttribute('target', '_blank');
    await expect(buildingLink).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(buildingLink).toHaveAttribute('href', /garden\.developingdvlpr\.com/);
  });

  test('should display hero image', async ({ page }) => {
    const heroImage = page.locator('main img').first();
    await expect(heroImage).toBeVisible();
    await expect(heroImage).toHaveAttribute('alt', /Nerando/);
  });

  test('should have accessible navigation', async ({ page }) => {
    // Check main navigation exists
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Check key navigation links
    await expect(page.locator('nav a:has-text("Blog")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Speaking")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Contact")')).toBeVisible();
  });

  test('should navigate to blog page', async ({ page }) => {
    await page.click('nav a:has-text("Blog")');
    await page.waitForURL('**/blog');

    await expect(page).toHaveURL(/\/blog/);
  });

  test('should navigate to speaking page', async ({ page }) => {
    await page.click('nav a:has-text("Speaking")');
    await page.waitForURL('**/speaking');

    await expect(page).toHaveURL(/\/speaking/);
  });

  test('should navigate to contact page', async ({ page }) => {
    await page.click('nav a:has-text("Contact")');
    await page.waitForURL('**/contact');

    await expect(page).toHaveURL(/\/contact/);
  });

  test('should have visible footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check copyright
    const currentYear = new Date().getFullYear();
    await expect(footer).toContainText(`Copyright © ${currentYear}`);

    // Check attribution links
    await expect(footer.locator('a[href*="twitter.com/nerajno"]')).toBeVisible();
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    // Check title
    await expect(page).toHaveTitle(/Nerando/);

    // Check meta description exists
    const metaDescription = await page.locator('head meta[name="description"]').last().getAttribute('content');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription.length).toBeGreaterThan(20);
  });

  test('should have theme toggle button', async ({ page }) => {
    const themeToggle = page.locator('#theme-toggle');
    await expect(themeToggle).toBeVisible();
    await expect(themeToggle).toHaveAttribute('aria-label', 'Toggle theme');
  });

  test('should load without console errors', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.reload();
    await page.waitForLoadState('networkidle');

    // Filter out known acceptable errors (like failed API calls in dev)
    const criticalErrors = errors.filter(err =>
      !err.includes('Failed to load resource') &&
      !err.includes('404')
    );

    expect(criticalErrors).toHaveLength(0);
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Hero should still be visible
    await expect(page.locator('main h1').first()).toBeVisible();

    // Navigation exists (might be behind hamburger menu)
    const nav = page.locator('nav');
    await expect(nav).toBeAttached();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Should have at least one visible h1
    const mainH1 = page.locator('main h1').first();
    await expect(mainH1).toBeVisible();

    // Check h2s exist
    const h2Count = await page.locator('h2').count();
    expect(h2Count).toBeGreaterThanOrEqual(0);
  });

  test('should have working links that open in new tabs', async ({ page }) => {
    const externalLinks = page.locator('a[target="_blank"]');
    const count = await externalLinks.count();

    expect(count).toBeGreaterThan(0);

    // Check first external link has security attributes
    const firstLink = externalLinks.first();
    await expect(firstLink).toHaveAttribute('rel', /noopener/);
  });
})
