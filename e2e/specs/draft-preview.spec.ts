import { test, expect } from '@playwright/test';

// Runs against `npm run dev` (see playwright.config webServer), so preview posts are visible.
const PREVIEW = '/blog/e2e-preview-fixture';
const DRAFT = '/blog/e2e-draft-fixture';

test.describe('Draft and preview posts (dev)', () => {
  test('preview post renders at its real URL with a banner', async ({ page }) => {
    const res = await page.goto(PREVIEW);
    expect(res?.status()).toBe(200);
    // Role locator: the Astro dev toolbar injects its own <h1>s in dev
    await expect(page.getByRole('heading', { level: 1, name: 'E2E Preview Fixture' })).toBeVisible();
    await expect(page.getByTestId('preview-banner')).toContainText('PREVIEW');
  });

  test('draft post does not render', async ({ page }) => {
    const res = await page.goto(DRAFT);
    expect(res?.status()).toBe(404);
  });

  test('/drafts lists drafts and previews with status', async ({ page }) => {
    const res = await page.goto('/drafts');
    expect(res?.status()).toBe(200);

    const preview = page.getByTestId('drafts-item').filter({ hasText: 'E2E Preview Fixture' });
    await expect(preview).toContainText('Preview');
    await expect(preview.locator(`a[href="${PREVIEW}"]`)).toBeVisible();

    const draft = page.getByTestId('drafts-item').filter({ hasText: 'E2E Draft Fixture' });
    await expect(draft).toContainText('Draft');
    await expect(draft.locator('a')).toHaveCount(0);
  });
});
