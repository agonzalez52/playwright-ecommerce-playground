const { test, expect } = require("@playwright/test");
const MyAccountPage = require("../pages/myAccount.page");
const LoginPage = require("../pages/login.page");
const urlPaths = require("../fixtures/urlPaths.json");
const accounts = require("../fixtures/accounts.json")

test.describe("My Account Page", () => {
    let loginPage;
    let myAccountPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await page.goto(urlPaths.account.login);

        await loginPage.fillEmailField(accounts.empty_state.email);
        await loginPage.fillPasswordField(accounts.empty_state.password);
        await loginPage.clickLoginButton();

        await expect(page).toHaveURL(urlPaths.account.account);
        myAccountPage = new MyAccountPage(page);
    });

    test("Log out of account", async ({ page }) => {
        await myAccountPage.clickLogoutButton();

        await expect(page).toHaveURL(urlPaths.account.logout);
    });
})
