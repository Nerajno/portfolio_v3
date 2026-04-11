import { test, expect } from '@playwright/test';

const SMOKE_SLUG = 'people-skills-are-technical-skills-and-i-can-prove-it';

test.describe('Blog post body smoke test', () => {
  test('renders full body content (regression: silent empty-body failure)', async ({ page }) => {
    await page.goto(`/blog/${SMOKE_SLUG}`);

    // Title must be visible
    await expect(page.locator('h1')).toBeVisible();

    // Body must contain at least 5 headings (full article has 10+)
    const headings = page.locator('.prose h2, .prose h3');
    await expect(headings).toHaveCount(await headings.count());
    const count = await headings.count();
    expect(count).toBeGreaterThanOrEqual(5);

    // Body must NOT be empty / stuck on loading state only
    const prose = page.locator('.prose');
    const text = await prose.innerText();
    expect(text.trim().length).toBeGreaterThan(500);
    expect(text).not.toMatch(/^Loading\.\.\.\s*$/);
  });
});
