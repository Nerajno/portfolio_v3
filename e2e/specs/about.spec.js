import { test, expect } from '@playwright/test';

test.describe('About page', () => {
  test('one h1 and the artboard sections in order', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('main h1')).toHaveCount(1);
    const headings = await page.locator('main h2').allTextContents();
    expect(headings.map((h) => h.trim())).toEqual([
      'Press & talks',
      'What people say',
      'The everyday stack',
      'Quick facts',
      'Want the two-minute version instead?',
    ]);
  });

  test('press strip lists real events and links to the talk catalog', async ({ page }) => {
    await page.goto('/about');
    expect(await page.locator('#press-strip li').count()).toBeGreaterThan(0);
    await expect(page.getByRole('link', { name: 'Full talk catalog →' })).toHaveAttribute('href', '/speaking');
  });

  test('unfilled content shows as pending, never invented', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('[data-pending="testimonial"]')).toHaveCount(2);
    await expect(page.getByRole('link', { name: 'View my résumé →' })).toHaveAttribute('href', '/resume');
    await expect(page.getByRole('link', { name: 'Recruiter fast lane' })).toHaveAttribute('href', '/recruiters');
  });

  test('CTA band links to contact', async ({ page }) => {
    await page.goto('/about');
    await expect(page.getByRole('link', { name: 'Get in touch' }).last()).toHaveAttribute('href', '/contact');
  });

  test('works at 375px without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/about');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
});

test('social links read with spaces between them', async ({ page }) => {
  await page.goto('/about');
  await expect(page.locator('main p', { hasText: 'Find me on' })).toHaveText(/GitHub, Twitter, and LinkedIn\./);
});
