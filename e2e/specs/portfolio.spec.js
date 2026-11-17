import { test, expect } from '@playwright/test';

test.describe('Portfolio Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio');
  });

  test('should display portfolio page heading', async ({ page }) => {
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main h1')).toContainText(/projects/i);
  });

  test('should display project cards in the grid', async ({ page }) => {
    const projectItems = page.locator('#projects-grid .project-item');
    const count = await projectItems.count();
    expect(count).toBeGreaterThan(0);
    await expect(projectItems.first()).toBeVisible();
  });

  test('should filter projects by tag and clear filters', async ({ page }) => {
    const firstFilter = page.locator('.tag-filter-btn').first();
    const projectItems = page.locator('#projects-grid .project-item');
    const totalCount = await projectItems.count();

    // Activate a tag filter
    await firstFilter.click();
    await expect(firstFilter).toHaveClass(/active/);

    // Every visible project should match; none should exceed the total
    const visibleItems = page.locator('#projects-grid .project-item:not(.hidden)');
    const visibleAfterFilter = await visibleItems.count();
    expect(visibleAfterFilter).toBeGreaterThan(0);
    expect(visibleAfterFilter).toBeLessThanOrEqual(totalCount);

    // Clear filters restores everything
    await page.locator('#clear-filters').click();
    await expect(firstFilter).not.toHaveClass(/active/);
    const visibleAfterClear = await visibleItems.count();
    expect(visibleAfterClear).toBe(totalCount);
  });

  test('should toggle the learning projects showcase', async ({ page }) => {
    const toggle = page.locator('#toggle-learning-showcase');
    const showcase = page.locator('#learning-showcase-section');

    // Hidden by default
    await expect(showcase).toBeHidden();
    await expect(toggle).toContainText(/show learning projects/i);

    // Click reveals it and flips the label
    await toggle.click();
    await expect(showcase).toBeVisible();
    await expect(toggle).toContainText(/hide learning projects/i);

    // Click again hides it
    await toggle.click();
    await expect(showcase).toBeHidden();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('#projects-grid')).toBeAttached();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });

  test('filter chips expose state with aria-pressed and All resets', async ({ page }) => {
    const all = page.locator('#clear-filters');
    const chip = page.locator('.tag-filter-btn').first();
    await expect(all).toHaveAttribute('aria-pressed', 'true');
    await expect(chip).toHaveAttribute('aria-pressed', 'false');

    await chip.focus();
    await page.keyboard.press('Enter');
    await expect(chip).toHaveAttribute('aria-pressed', 'true');
    await expect(all).toHaveAttribute('aria-pressed', 'false');
    await expect(page.locator('#filter-status')).toHaveText(/Showing \d+ of \d+ projects/);

    await all.click();
    await expect(chip).toHaveAttribute('aria-pressed', 'false');
    await expect(all).toHaveAttribute('aria-pressed', 'true');
  });

  test('learning toggle reports aria-expanded', async ({ page }) => {
    const toggle = page.locator('#toggle-learning-showcase');
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  });
});
