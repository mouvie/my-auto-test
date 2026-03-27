import { test, expect } from '@playwright/test';

test('热门游戏-5分彩单双-下注试玩后显示投注成功', async ({ page }) => {
  await page.goto('https://test.6688hash.com/zh');
  await page.getByRole('heading', { name: '5分彩单双' }).first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: '下注试玩' }).click();
  await expect(page.getByText('投注成功').first()).toBeVisible();
});
