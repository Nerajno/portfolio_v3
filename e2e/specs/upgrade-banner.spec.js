import { test, expect } from '@playwright/test';

// #488. The dev server reads PUBLIC_SHOW_UPGRADE_BANNER (playwright.config.ts defaults it to "true").
// Run once more with PUBLIC_SHOW_UPGRADE_BANNER=false (fresh dev server) to cover the "off" state.
const bannerOn = (process.env.PUBLIC_SHOW_UPGRADE_BANNER ?? 'true') === 'true';

test.describe('Upgrade banner (#488)', () => {
  if (bannerOn) {
    test('shows below the navbar with a status role', async ({ page }) => {
      await page.goto('/');
      const banner = page.getByRole('status').filter({ hasText: 'Site upgrade in progress.' });
      await expect(banner).toBeVisible();
      await expect(banner).toContainText('a few pages may look off for a bit.');
      // Sits between the navbar and <main>.
      await expect(page.locator('main#main-content [data-testid="upgrade-banner"]')).toHaveCount(0);
    });

    test('appears on inner pages too', async ({ page }) => {
      await page.goto('/contact');
      await expect(page.getByTestId('upgrade-banner')).toBeVisible();
    });

    test('home meta line reads "Upgrade in progress"', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('site-meta')).toHaveText('Upgrade in progress — November 2026');
    });

    test('skip link is still the first tab stop', async ({ page }) => {
      await page.goto('/');
      await page.keyboard.press('Tab');
      await expect(page.locator(':focus')).toHaveText('Skip to main content');
    });

    for (const width of [320, 768, 1280]) {
      test(`no horizontal overflow at ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: 800 });
        await page.goto('/');
        const banner = page.getByTestId('upgrade-banner');
        await expect(banner).toBeVisible();
        const box = await banner.boundingBox();
        expect(box.x + box.width).toBeLessThanOrEqual(width);
      });
    }
  } else {
    test('renders nothing when the flag is off', async ({ page }) => {
      await page.goto('/');
      await expect(page.getByTestId('upgrade-banner')).toHaveCount(0);
      await expect(page.getByTestId('site-meta')).toHaveText('Last updated: April 2026');
    });
  }
});
