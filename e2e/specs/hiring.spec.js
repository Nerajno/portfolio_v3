import { test, expect } from '@playwright/test';

test.describe('Recruiter fast lane', () => {
  test('one h1, facts grid, and pending placeholders for unconfirmed facts', async ({ page }) => {
    await page.goto('/recruiters');
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('#facts dl')).toHaveCount(3);
    for (const key of ['target-roles', 'availability', 'work-auth']) {
      await expect(page.locator(`#facts [data-pending="${key}"]`)).toHaveCount(1);
    }
    await expect(page.locator('#facts')).toContainText(/\d+ talks · \d+ articles/);
  });

  test('three featured projects, each with a link', async ({ page }) => {
    await page.goto('/recruiters');
    const items = page.locator('#three-things li');
    await expect(items).toHaveCount(3);
    for (const li of await items.all()) await expect(li.getByRole('link')).toHaveCount(1);
  });

  test('blurb copies to the clipboard', async ({ page, context, browserName }) => {
    test.skip(browserName !== 'chromium', 'clipboard permissions are Chromium-only in Playwright');
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/recruiters');
    await page.locator('[data-copy-target="recruiter-blurb"]').click();
    await expect(page.locator('#recruiter-blurb-status')).toHaveText('Copied to clipboard');
    const copied = await page.evaluate(() => navigator.clipboard.readText());
    expect(copied).toBe(await page.locator('#recruiter-blurb').innerText());
  });

  test('links to refer, contact, and résumé', async ({ page }) => {
    await page.goto('/recruiters');
    await expect(page.locator('main a[href="/refer"]')).toHaveCount(1);
    await expect(page.getByRole('link', { name: 'Get in touch' }).last()).toHaveAttribute('href', '/contact');
    await expect(page.locator('main a[href="/resume"]').first()).toBeVisible();
  });
});

test.describe('Referral kit', () => {
  test('one-liner and intro copy blocks plus share links', async ({ page }) => {
    await page.goto('/refer');
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('[data-copy-block]')).toHaveCount(2);
    await expect(page.locator('#refer-intro')).toContainText('[NAME]');
    // the email intro keeps its three lines
    expect((await page.locator('#refer-intro').innerText()).split('\n').filter(Boolean)).toHaveLength(3);
    for (const href of ['/resume', '/portfolio', '/recruiters']) {
      await expect(page.locator(`main a[href="${href}"]`).first()).toBeVisible();
    }
    await expect(page.locator('[data-pending="target-roles"]')).toHaveCount(1);
    await expect(page.getByRole('link', { name: 'Tell me' })).toHaveAttribute('href', '/contact');
  });
});

for (const path of ['/recruiters', '/refer']) {
  test(`${path} works at 375px without horizontal scroll`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(path);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}
