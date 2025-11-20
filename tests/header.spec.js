const { test, expect } = require("@playwright/test");
const HeaderPage = require("../pages/header.page");
const urlPaths = require("../fixtures/urlPaths.json");

test.describe("Header Page", () => {
    let headerPage;

    test.beforeEach(async ({ page }) => {
        headerPage = new HeaderPage(page);
        await page.goto(urlPaths.home);
    });

    test("Verify user can navigate to My account > Login", async ({ page }) => {
        await headerPage.clickMyAccountHoverLogin();

        // Check that user was redirected to login page
        await expect(page).toHaveURL(urlPaths.account.login);
    });

    test("Verify user can navigate to My Account > Register", async({ page }) => {
        await headerPage.clickMyAccountHoverRegister();

        await expect(page).toHaveURL(urlPaths.account.register);
    });

    test("Verify user can click into main Header navigations", async({ page }) => {
        await headerPage.clickHomeNavBarLink();
        await expect(page).toHaveURL(urlPaths.home);

        await headerPage.clickSpecialNavBarLink();
        await expect(page).toHaveURL(urlPaths.product.special);

        await headerPage.clickBlogNavBarLink();
        await expect(page).toHaveURL(urlPaths.blog);

        await headerPage.clickMegaMenuNavBarLink();
        await expect(page).toHaveURL(urlPaths.aboutUs);

        // Note: AddOns dropdown is not clickable

        await headerPage.clickMyAccountNavBarLink();
        await expect(page).toHaveURL(urlPaths.account.login);
    });

    // navigate to mega menu options

    // navigate to shop by category options
    test("Verify user can click Shop by Category links", async({ page }) => {
        await headerPage.clickShopByCategoryMenu();
        await headerPage.clickShopByCategoryComponents();
        await expect(page).toHaveURL(urlPaths.product.componentsCategory);

        await headerPage.clickShopByCategoryMenu();
        await headerPage.clickShopByCategoryCameras();
        await expect(page).toHaveURL(urlPaths.product.camerasCategory);
    });
})