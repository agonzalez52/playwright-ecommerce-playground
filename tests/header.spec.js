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

    test.describe("Mega Menu", () => {
        test("Verify user can click into Mega Menu > Mobiles > Apple", async({ page }) => {
            await headerPage.clickMegaMenuOption('Apple');
            await expect(page).toHaveURL(urlPaths.product.manufacturer.apple);
        });

        test("Verify user can click into Mega Menu > Computer > Printer", async({ page }) => {
            await headerPage.clickMegaMenuOption('Printer');
            await expect(page).toHaveURL(urlPaths.product.category.printer);
        });
    })
    

    test.describe("Shop by Category Menu", () => {
        test("Verify user can click Shop by Category > Components", async({ page }) => {
            await headerPage.clickShopByCategoryOption('Components');
            await expect(page).toHaveURL(urlPaths.product.category.components);
        });

        test("Verify user can click Shop by Category > Cameras", async({ page }) => {
            await headerPage.clickShopByCategoryOption('Cameras');
            await expect(page).toHaveURL(urlPaths.product.category.cameras);
        });
    })
})