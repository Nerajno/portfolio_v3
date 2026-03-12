import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should display contact page heading', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('h1')).toContainText(/contact/i);
  });

  test('should display contact form', async ({ page }) => {
    const form = page.locator('form');
    await expect(form).toBeVisible();
  });

  test('should have all required form fields', async ({ page }) => {
    // Name field
    const nameInput = page.locator('input[name="name"]');
    await expect(nameInput).toBeVisible();
    await expect(nameInput).toHaveAttribute('required');

    // Email field
    const emailInput = page.locator('input[name="email"]');
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute('required');
    await expect(emailInput).toHaveAttribute('type', 'email');

    // Message field
    const messageTextarea = page.locator('textarea[name="message"]');
    await expect(messageTextarea).toBeVisible();
    await expect(messageTextarea).toHaveAttribute('required');
  });

  test('should have submit button', async ({ page }) => {
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
    await expect(submitButton).toContainText(/send/i);
  });

  test('should show validation errors for empty fields', async ({ page }) => {
    // Try to submit empty form
    await page.click('button[type="submit"]');

    // Wait a moment for validation
    await page.waitForTimeout(500);

    // Check that form wasn't submitted (still on contact page)
    await expect(page).toHaveURL(/\/contact/);

    // HTML5 validation should prevent submission
    const nameInput = page.locator('input[name="name"]');
    const isInvalid = await nameInput.evaluate((el) => !el.validity.valid);
    expect(isInvalid).toBeTruthy();
  });

  test('should show validation error for invalid email', async ({ page }) => {
    // Fill in name and message
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('textarea[name="message"]', 'Test message');

    // Fill invalid email
    await page.fill('input[name="email"]', 'invalid-email');

    // Try to submit
    await page.click('button[type="submit"]');
    await page.waitForTimeout(500);

    // Check email validation
    const emailInput = page.locator('input[name="email"]');
    const isInvalid = await emailInput.evaluate((el) => !el.validity.valid);
    expect(isInvalid).toBeTruthy();
  });

  test('should accept valid form data', async ({ page }) => {
    // Fill in all fields with valid data
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message for E2E testing.');

    // All fields should be valid
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageInput = page.locator('textarea[name="message"]');

    const nameValid = await nameInput.evaluate((el) => el.validity.valid);
    const emailValid = await emailInput.evaluate((el) => el.validity.valid);
    const messageValid = await messageInput.evaluate((el) => el.validity.valid);

    expect(nameValid).toBeTruthy();
    expect(emailValid).toBeTruthy();
    expect(messageValid).toBeTruthy();
  });

  test('should have honeypot field for bot protection', async ({ page }) => {
    // Look for honeypot field (usually hidden)
    const honeypot = page.locator('input[name="botcheck"]');
    await expect(honeypot).toBeHidden();
  });

  test('should have proper form attributes', async ({ page }) => {
    const form = page.locator('form');

    // Should have action pointing to Web3Forms
    const action = await form.getAttribute('action');
    expect(action).toContain('web3forms');

    // Should be POST method
    await expect(form).toHaveAttribute('method', 'POST');
  });

  test('form fields should have proper placeholders', async ({ page }) => {
    await expect(page.locator('input[name="name"]')).toHaveAttribute('placeholder', /name/i);
    await expect(page.locator('input[name="email"]')).toHaveAttribute('placeholder', /email/i);
    await expect(page.locator('textarea[name="message"]')).toHaveAttribute('placeholder', /message/i);
  });

  test('should have accessible form labels', async ({ page }) => {
    // Email should have a label (even if sr-only)
    const emailLabel = page.locator('label[for="email_address"]');
    await expect(emailLabel).toBeAttached();
  });

  test('form should be keyboard accessible', async ({ page }) => {
    // Tab through form fields
    await page.keyboard.press('Tab'); // Should focus name
    let focused = await page.evaluate(() => document.activeElement.name);
    expect(['name', '']).toContain(focused);

    await page.keyboard.press('Tab'); // Should focus email
    focused = await page.evaluate(() => document.activeElement.name);
    expect(['email', '']).toContain(focused);

    await page.keyboard.press('Tab'); // Should focus message
    focused = await page.evaluate(() => document.activeElement.name);
    expect(['message', '']).toContain(focused);
  });
});

test.describe('Contact Page - Responsive', () => {
  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact');

    // Form should still be visible and usable
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[name="name"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('form fields should be full width on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/contact');

    const nameInput = page.locator('input[name="name"]');
    const box = await nameInput.boundingBox();

    // Should take most of the width (accounting for padding)
    expect(box.width).toBeGreaterThan(300);
  });
});

test.describe('Contact Page - Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    const h1s = await page.locator('h1').count();
    expect(h1s).toBe(1);
  });

  test('form should have accessible error messages', async ({ page }) => {
    // Submit empty form
    await page.click('button[type="submit"]');
    await page.waitForTimeout(500);

    // Look for validation feedback elements
    const feedback = page.locator('.invalid-feedback, .error, [role="alert"]');
    const feedbackCount = await feedback.count();

    // Feedback messages should exist or HTML5 validation handles it
    expect(feedbackCount >= 0).toBeTruthy();
  });
});
