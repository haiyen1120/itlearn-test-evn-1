import { test, expect } from "@playwright/test";
test("Assertions ITLearn", async ({ page }) => {
 await page.goto('https://baitap.itlearn.edu.vn/exercise.php?id=1');
  await expect(page.getByRole('link', { name: "Quay lại mục lục" })).toBeVisible();
  await expect(page.getByRole('heading', { name: "Bài 1" })).toBeVisible();
  await expect(page.getByText('Dễ')).toBeVisible();
  await expect(page.getByText('#form')).toBeVisible();
  await expect(page.getByText('#login')).toBeVisible();
  await expect(page.getByText('#validation')).toBeVisible();
  await expect(page.getByText('#captcha')).toBeVisible();
  await expect(page.getByRole('tab', { name: "Đề bài" })).toBeVisible();
  await expect(page.getByRole('tab', { name: "Form thực hành" })).toBeVisible();
  await expect(page.getByRole('tab', { name: "Nộp bài" })).toBeVisible();
  await expect(page.getByRole('tabpanel').filter({ hasText: 'Đăng nhập để xem tiếp' })).toBeVisible();
});

//Yêu cầu 1: Tìm xpath 
//h1[contains(text(),'Phòng thực hành kiểm thử')] 
//img[contains(@alt,'ITLearn')]
//a[contains(@href,'exercise.php?id=1')]
//a[contains(@href,'exercise.php?id=2')]
//a[contains(@href,'login.php')]

//Yêu cầu 2: 
//a[contains(text(),'Quay lại mục lục')]
//h1[contains(text(),'Bài 1')]
//*[text()='Dễ']
//*[contains(text(),'#form')]
//*[contains(text(),'#login')]
//*[contains(text(),'#validation')]
//*[contains(text(),'#captcha')]
//button[contains(text(),'Đề bài')]
//button[contains(text(),'Form thực hành')]
//button[contains(text(),'Nộp bài')]
//div[@id='tab-description']
