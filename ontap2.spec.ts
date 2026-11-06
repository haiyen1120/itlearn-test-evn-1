import { test, expect } from "@playwright/test";
test("Assertions ITLearn", async ({ page }) => {
  await page.goto('https://baitap.itlearn.edu.vn/login.php');
  await expect(page.getByRole('heading', { name: 'Đăng nhập' })).toBeVisible();
  await expect(page.getByLabel('Email')).toBeVisible();
  await expect(page.getByLabel('Mật khẩu')).toBeVisible();
  await expect(page.getByLabel('Captcha')).toBeVisible()
  await expect(page.getByRole('button', { name: 'Đăng nhập' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Đăng ký ngay' })).toBeVisible();
});

//input[@id='lgEmail']
//input[@id='lgPassword']
//button[text()='Đăng nhập']
//a[text()='Đăng ký ngay']
//button[text()='Đăng nhập']/ancestor::form 
