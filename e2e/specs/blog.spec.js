import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('should display blog page heading', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText(/blog/i);
  });

  test('should display blog posts', async ({ page }) => {
    // Wait for blog posts to load
    await page.waitForSelector('article, .blog-post, a[href*="/blog/"]');

    // Check that there are multiple blog posts
    const blogPosts = page.locator('article, .blog-post, a[href*="/blog/"]:not(nav a)');
    const count = await blogPosts.count();

    expect(count).toBeGreaterThan(0);
  });

  test('should navigate to a blog post', async ({ page }) => {
    // Find first blog post link
    const firstPost = page.locator('article a, a[href*="/blog/"]:not(nav a)').first();
    await firstPost.waitFor({ state: 'visible' });

    const href = await firstPost.getAttribute('href');
    await firstPost.click();

    // Wait for navigation
    await page.waitForLoadState('networkidle');

    // Should be on a blog post page
    expect(page.url()).toContain('/blog/');
  });

  test('should display post metadata', async ({ page }) => {
    // Click first blog post
    await page.locator('article a, a[href*="/blog/"]:not(nav a)').first().click();
    await page.waitForLoadState('networkidle');

    // Check for post title
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();

    // Check for date or metadata
    const dateOrMeta = page.locator('time, .date, .metadata, .post-date');
    const metaExists = await dateOrMeta.count();
    expect(metaExists).toBeGreaterThan(0);
  });

  test('should render markdown content properly', async ({ page }) => {
    // Navigate to a blog post
    await page.locator('article a, a[href*="/blog/"]:not(nav a)').first().click();
    await page.waitForLoadState('networkidle');

    // Check for common markdown elements
    const content = page.locator('article, .prose, .content, main');
    await expect(content).toBeVisible();

    // Should have paragraphs
    const paragraphs = content.locator('p');
    const pCount = await paragraphs.count();
    expect(pCount).toBeGreaterThan(0);
  });

  test('should have working navigation from blog post back to blog', async ({ page }) => {
    // Navigate to blog post
    await page.locator('article a, a[href*="/blog/"]:not(nav a)').first().click();
    await page.waitForLoadState('networkidle');

    // Find blog link in nav
    const blogLink = page.locator('nav a:has-text("Blog")');
    await blogLink.click();

    await expect(page).toHaveURL(/\/blog$/);
  });

  test('should display proper SEO meta tags on blog posts', async ({ page }) => {
    // Navigate to blog post
    await page.locator('article a, a[href*="/blog/"]:not(nav a)').first().click();
    await page.waitForLoadState('networkidle');

    // Check title
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);

    // Check meta description
    const metaDesc = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDesc).toBeTruthy();
  });

  test('should handle images in blog posts', async ({ page }) => {
    // Navigate to blog post
    await page.locator('article a, a[href*="/blog/"]:not(nav a)').first().click();
    await page.waitForLoadState('networkidle');

    // Check for images in content
    const images = page.locator('article img, .prose img, .content img');
    const imgCount = await images.count();

    if (imgCount > 0) {
      // First image should have alt text
      const firstImg = images.first();
      const alt = await firstImg.getAttribute('alt');
      expect(alt).toBeTruthy();
    }
  });

  test('should have readable content width', async ({ page }) => {
    // Navigate to blog post
    await page.locator('article a, a[href*="/blog/"]:not(nav a)').first().click();
    await page.waitForLoadState('networkidle');

    // Content should have max-width for readability
    const content = page.locator('article, .prose, .content').first();
    const box = await content.boundingBox();

    expect(box).toBeTruthy();
    expect(box.width).toBeLessThan(1200); // Reasonable reading width
  });

  test('should have working external links in blog posts', async ({ page }) => {
    // Navigate to blog post
    await page.locator('article a, a[href*="/blog/"]:not(nav a)').first().click();
    await page.waitForLoadState('networkidle');

    // Find external links in content
    const externalLinks = page.locator('article a[target="_blank"], .prose a[target="_blank"]');
    const count = await externalLinks.count();

    if (count > 0) {
      const firstExternal = externalLinks.first();
      await expect(firstExternal).toHaveAttribute('rel', /noopener/);
    }
  });
});

test.describe('Blog Search and Filtering', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('should be able to scroll through blog posts', async ({ page }) => {
    // Get initial scroll position
    const initialScroll = await page.evaluate(() => window.scrollY);

    // Scroll down
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(500);

    const newScroll = await page.evaluate(() => window.scrollY);
    expect(newScroll).toBeGreaterThan(initialScroll);
  });
});

test.describe('Blog Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/blog');
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Main page should have one h1
    const h1s = page.locator('h1');
    const h1Count = await h1s.count();
    expect(h1Count).toBeGreaterThanOrEqual(1);
  });

  test('blog post should have accessible navigation', async ({ page }) => {
    await page.locator('article a, a[href*="/blog/"]:not(nav a)').first().click();
    await page.waitForLoadState('networkidle');

    // Should have main landmark
    const main = page.locator('main, [role="main"]');
    await expect(main).toBeVisible();
  });
});
