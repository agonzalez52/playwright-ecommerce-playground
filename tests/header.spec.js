const { test, expect } = require("@playwright/test");
const HeaderPage = require("../pages/header.page");
const urlPaths = require("../fixtures/urlPaths.json");

test.describe("Header Page", () => {
    let headerPage;

    test.beforeEach(async ({ page }) => {
        headerPage = new HeaderPage(page);
        await page.goto(urlPaths.home);
    });

    test("Navigate to My account > Login", async ({ page }) => {
        await headerPage.clickMyAccountHoverLogin();

        // Check that user was redirected to login page
        await expect(page).toHaveURL(urlPaths.account.login);
    });
})