const { test } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const ProductsPage = require('../pages/productsPage');
const CartPage = require('../pages/cartPage');

test.describe("Saucedemo Automation Test", { tag: ['@smoke'] }, () => {
  test("Login Test using Standard User", async ({ page }) => {
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

test.describe("Saucedemo Automation Test", () => {
  test("Login Test using Visual User", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    // halaman login
    await loginPage.goto();
    await loginPage.verifyLoginPageVisible();
    await loginPage.login('visual_user', 'secret_sauce');

    // halaman products
    await productsPage.verifyDashboardVisible();
    await productsPage.addItemToCart();
    await productsPage.goToCart();

    // halaman cart
    await cartPage.verifyItemInCart('Sauce Labs Backpack');
  });
});