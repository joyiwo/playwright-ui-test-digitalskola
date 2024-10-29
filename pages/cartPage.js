const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.itemName = '.inventory_item_name';
  }

  async verifyItemInCart(itemName) {
    await expect(this.page.locator(this.itemName)).toContainText(itemName);
    await expect(this.page).toHaveScreenshot('cart-page.png', {maxDiffPixelRatio: 0.1})
  }
}

module.exports = CartPage;
