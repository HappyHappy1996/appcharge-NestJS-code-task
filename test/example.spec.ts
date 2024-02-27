import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('https://playwright.dev/');
  });

  test('main navigation', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});


// you need to generate playwright-auth.json file to run tests below
test.describe('readly', () => {
  test.use({
    storageState: 'test/playwright-auth.json',
  })

  test('test', async ({ page }) => {
    await page.goto('https://readly.ru/');
    await expect(page.locator('.profile-img--wrapper')).toBeVisible();
    await expect(page.locator('#header')).toContainText('Мои книги');
  });
});
