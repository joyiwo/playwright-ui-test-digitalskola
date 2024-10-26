const { test } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProductsPage = require('../pages/productsPage');
const CartPage = require('../pages/cartPage');

test.describe("Saucedemo Automation Test", () => {
  test("Login Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // halaman login
    await loginPage.goto();
    await loginPage.verifyLoginPageVisible();
    await loginPage.login('standard_user', 'secret_sauce');

    // halaman products
    await productsPage.verifyDashboardVisible();
    await productsPage.addItemToCart();
    await productsPage.goToCart();

    // halaman cart
    await cartPage.verifyItemInCart('Sauce Labs Backpack');
  });
});
