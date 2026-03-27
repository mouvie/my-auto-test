import { test, expect } from '@playwright/test';

test.describe('6688hash smoke', () => {
  test('home page loads and renders basic structure', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/zh\/?$/);
    await expect(page).toHaveTitle(/.+/);
    await expect(page.locator('body')).toBeVisible();
  });

  test('key home entry points are visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('一键登录').first()).toBeVisible();
    await expect(page.getByText('热门游戏').first()).toBeVisible();
    await expect(page.getByRole('heading', { name: '5分彩单双', exact: true }).first()).toBeVisible();
  });
});
