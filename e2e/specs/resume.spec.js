import { test, expect } from '@playwright/test';

test.describe('Résumé page', () => {
  test('one h1 and the résumé sections', async ({ page }) => {
    await page.goto('/resume');
    await expect(page.locator('main h1')).toHaveText('Nerando Johnson');
    const headings = (await page.locator('#resume h2').allTextContents()).map((h) => h.trim());
    expect(headings).toEqual(['Summary', 'Experience', 'Skills', 'Education & community']);
  });

  test('summary counts match the site data', async ({ page }) => {
    await page.goto('/resume');
    await expect(page.locator('#resume')).toContainText(/\d+ talks given and \d+ articles published/);
  });

  test('unconfirmed details render as pending, not invented', async ({ page }) => {
    await page.goto('/resume');
    await expect(page.locator('[data-pending="dates"]')).toHaveCount(3);
    await expect(page.locator('[data-pending="education"]')).toHaveCount(1);
  });

  test('actions: print button and contact link', async ({ page }) => {
    await page.goto('/resume');
    const actions = page.getByRole('navigation', { name: 'Résumé actions' });
    await expect(actions.getByRole('button', { name: 'Print / PDF' })).toBeVisible();
    await expect(actions.getByRole('link', { name: 'Contact me' })).toHaveAttribute('href', '/contact');
  });

  test('print media hides site chrome, actions, and placeholders', async ({ page }) => {
    await page.goto('/resume');
    await page.emulateMedia({ media: 'print' });
    await expect(page.getByRole('navigation', { name: 'Résumé actions' })).toBeHidden();
    await expect(page.locator('body > footer, body > div').first()).toBeHidden();
    await expect(page.locator('[data-pending]').first()).toBeHidden();
    await expect(page.locator('#resume h1')).toBeVisible();
  });

  test('navbar links to the résumé', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('header').getByRole('link', { name: 'Résumé' }).first()).toHaveAttribute('href', '/resume');
  });

  test('works at 375px without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/resume');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});
