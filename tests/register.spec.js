const { test, expect } = require("@playwright/test");
const RegisterPage = require("../pages/register.page");
const urlPaths = require("../fixtures/urlPaths.json");

test.describe("Register Page", () => {
    let registerPage;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await registerPage.go();
    });

    test("Register user - Happy path", async ({ page }) => {
        let date = Date.now();
        let registrationEmail = "agauto+"+date+"@gmail.com";

        // Complete registration
        await registerPage.fillRegisterFields("Angel","Auto",registrationEmail, "12345678900","password","password");
        await registerPage.clickYesNewsletter();
        await registerPage.checkAgreePrivacyPolicy();
        await registerPage.clickContinueButton();

        // Check that user was redirected to success page
        await expect(page).toHaveURL(urlPaths.account.registerSuccess);
    });
})