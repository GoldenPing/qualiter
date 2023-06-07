import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('localhost:8100/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('http://localhost:8100/home')
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:8100/');
  await page.goto('http://localhost:8100/home');
  await page.getByRole('textbox', { name: 'Things' }).click();
  await page.getByRole('textbox', { name: 'Things' }).fill('yolo');
  await page.getByRole('button', { name: 'Add Things' }).click();
  await page.getByRole('button', { name: 'Add Things' }).click();
});
