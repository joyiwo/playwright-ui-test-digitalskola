const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.pageTitle = '.title';
    this.addToCartBackpackButton = '#add-to-cart-sauce-labs-backpack';
    this.cartIcon = '.shopping_cart_link';
  }

  async verifyDashboardVisible() {
    await expect(this.page.locator(this.pageTitle)).toBeVisible();
  }

  async addItemToCart() {
    await this.page.click(this.addToCartBackpackButton);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = ProductsPage;