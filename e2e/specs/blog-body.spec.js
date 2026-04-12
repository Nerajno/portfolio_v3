import { test, expect } from '@playwright/test';

test.describe('Blog post body smoke test', () => {
  test('renders full body content (regression: silent empty-body failure)', async ({ page }) => {
    await page.goto('/blog');

    const firstPostLink = page.locator('a[href^="/blog/"]').first();
    await expect(firstPostLink).toBeVisible();

    const postHref = await firstPostLink.getAttribute('href');
    expect(postHref).toBeTruthy();

    await page.goto(postHref);

    // Title must be visible
    await expect(page.locator('h1')).toBeVisible();

    // Body must NOT be empty / stuck on loading state only
    const prose = page.locator('.prose');
    await expect(prose).toBeVisible();
    const text = await prose.innerText();
    expect(text.trim().length).toBeGreaterThan(0);
    expect(text).not.toMatch(/^Loading\.\.\.\s*$/);
  });
});
