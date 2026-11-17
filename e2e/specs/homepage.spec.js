import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display hero section with correct content', async ({ page }) => {
    // Check positioning headline and greeting
    const heading = page.locator('main h1').first();
    await expect(heading).toBeVisible();
    await expect(heading).toContainText(/software engineer who ships, writes, and teaches/i);
    await expect(page.locator('main').getByText('Hi, I am Nerando')).toBeVisible();

    // Check description - use more specific selectors
    await expect(page.locator('main span[itemprop="jobTitle"]')).toBeVisible();
    await expect(page.locator('main')).toContainText('Vue');
  });

  test('should show hero CTA row: Work with me, See my work, Résumé placeholder', async ({ page }) => {
    const hero = page.locator('section[aria-labelledby="hero-heading"]');
    await expect(hero.getByRole('link', { name: 'Work with me' })).toHaveAttribute('href', '/contact');
    await expect(hero.getByRole('link', { name: 'See my work' })).toHaveAttribute('href', '/portfolio');
    await expect(hero.locator('[data-pending="resume"]')).toBeVisible();
  });

  test('should have exactly one h1, the positioning headline', async ({ page }) => {
    const h1s = page.locator('main h1');
    await expect(h1s).toHaveCount(1);
    await expect(h1s).toContainText(/software engineer who ships/i);
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
    await expect(themeToggle).toHaveAttribute('aria-label', 'Dark mode');
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
    expect(h2Count).toBeGreaterThan(0);
  });

  test('should show a hiring CTA above the fold', async ({ page }) => {
    const cta = page.locator('main a[href="/contact"]', { hasText: 'Work with me' });

    // Desktop: visible without scrolling
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(cta).toBeInViewport();

    // Mobile: text-first hero keeps the CTA above the fold
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(cta).toBeInViewport();
  });

  test('should show proof strip numbers counted from data', async ({ page }) => {
    const strip = page.locator('section[aria-label="By the numbers"]');
    const talks = strip.locator('dl > div', { hasText: 'Talks given' }).locator('dd a');
    const articles = strip.locator('dl > div', { hasText: 'Articles published' }).locator('dd a');
    await expect(talks).toHaveText(/^\d+$/);
    await expect(talks).toHaveAttribute('href', '/speaking');
    await expect(articles).toHaveText(/^\d+$/);
    await expect(articles).toHaveAttribute('href', '/blog');
  });

  test('should show three featured project cards', async ({ page }) => {
    const cards = page.locator('section[aria-labelledby="featured-heading"] article[data-project]');
    await expect(cards).toHaveCount(3);
    await expect(page.getByRole('link', { name: 'All projects →' })).toHaveAttribute('href', '/portfolio');
  });

  test('should list latest writing and talks with working links', async ({ page }) => {
    const posts = page.locator('section[aria-labelledby="writing-heading"] li a');
    const talks = page.locator('section[aria-labelledby="speaking-heading"] li a');
    await expect(posts).toHaveCount(3);
    await expect(talks).toHaveCount(3);

    const postHref = await posts.first().getAttribute('href');
    expect(postHref).toMatch(/^\/blog\/[^/]+$/);
    const postRes = await page.request.get(postHref);
    expect(postRes.status()).toBe(200);

    const talkHref = await talks.first().getAttribute('href');
    expect(talkHref).toMatch(/^\/events\/[^/]+$/);
    const talkRes = await page.request.get(talkHref);
    expect(talkRes.status()).toBe(200);
  });

  test('should show the CTA band linking to contact', async ({ page }) => {
    const band = page.locator('section[aria-labelledby="cta-heading"]');
    await expect(band.getByRole('link', { name: 'Get in touch' })).toHaveAttribute('href', '/contact');
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
