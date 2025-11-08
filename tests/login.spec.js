const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/login.page");
const urlPaths = require("../fixtures/urlPaths.json");
const accounts = require("../fixtures/accounts.json")

test.describe("Login Page", () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto(urlPaths.account.login);
    });

    test("Login with existing account", async ({ page }) => {
        await loginPage.fillEmailField(accounts.empty_state.email);
        await loginPage.fillPasswordField(accounts.empty_state.password);
        await loginPage.clickLoginButton();

        await expect(page).toHaveURL(urlPaths.account.account);
    });
})