const { test, expect } = require("@playwright/test");

test.describe("Saucedemo Automation Test", { tag: ['@mobile']}, () => {
  test("Login Test", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/"); // masuk ke web sauce demo
    await expect(page.locator('.login_logo')).toBeVisible() // memastikan sudah masuk di login page

    await page.fill('#user-name', 'standard_user') // mengisi username menggunakan "standard_user"
    await page.fill('#password', 'secret_sauce') // mengisi password menggunakan "secret_sauce"
    await page.click('#login-button')  // click login button
    await expect(page.locator('.title')).toBeVisible() // memastikan sudah masuk ke dashboard web saucedemo

    await page.click('#add-to-cart-sauce-labs-backpack') // click barang, disini saya klik backpack
    await page.click('.shopping_cart_link') // clik keranjang
    await expect(page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack'); // memastikan barang yang sudah kita klik telah masuk di dalam keranjang

  });
});
