import { test, expect } from '@playwright/test';

test.describe('Index Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4321/');
  });

  test('should render container components', async ({ page }) => {
    // Check if Hero component is rendered
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('h1')).toContainText('Hi, I am Nerando');

    // Check if Features component is rendered
    const features = page.locator('.mt-16');
    await expect(features).toBeVisible();

    // Verify all feature cards are present
    const featureCards = page.locator('.flex.flex-col.gap-4');
    await expect(featureCards).toHaveCount(5); // Based on the 5 features in features.astro

    // Check if Logos component is rendered
    const logos = page.locator('.mt-24');
    await expect(logos).toBeVisible();

    // Verify technology icons are present
    const techIcons = page.locator('.h-8.md\\:h-12');
    await expect(techIcons).toHaveCount(13); // Total number of tech icons
  });

  test('should have correct layout structure', async ({ page }) => {
    // Check if Layout component is wrapping everything
    await expect(page.locator('body')).toBeVisible();

    // Check if Container component is present
    const container = page.locator('.max-w-screen-xl');
    await expect(container).toBeVisible();
  });

  test('should handle dark mode toggle', async ({ page }) => {
    // Find the theme toggle button
    const themeToggle = page.locator('#themeToggle');
    await expect(themeToggle).toBeVisible();

    // Click the theme toggle and verify dark mode class is added
    await themeToggle.click();
    await expect(page.locator('html')).toHaveClass(/dark/);

    // Click again and verify dark mode class is removed
    await themeToggle.click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });
});
