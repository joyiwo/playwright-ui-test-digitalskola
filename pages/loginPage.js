const { expect } = require("@playwright/test")

class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameInput = "#user-name"
        this.passwordInput = "#password"
        this.loginButton = "#login-button"
        this.loginLogo = ".login_logo"
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/')
    }

    async verifyLoginPageVisible() {
        await expect(this.page.locator(this.loginLogo)).toBeVisible()
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username)
        await this.page.fill(this.passwordInput, password)
        await this.page.click(this.loginButton)
    }
}

module.exports = LoginPage