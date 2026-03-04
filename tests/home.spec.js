const { test, expect } = require("@playwright/test");
const HomePage = require("../pages/home.page");
const urlPaths = require("../fixtures/urlPaths.json");

test.describe("Home Page", () => {
    let homePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await page.goto(urlPaths.home);
    });

    test.describe("Top Trending Categories", () => {
        // first category
        test("Verify clicking Desktops Trending Category", async ({ page }) => {
            await homePage.clickTopTrendingCategory("Desktops");

            await expect(page).toHaveURL(urlPaths.product.category.desktops);
        });

        // last category
        test("Verify clicking MP3 Players Trending Category", async ({ page }) => {
            await homePage.clickTopTrendingCategory("MP3 Players");

            await expect(page).toHaveURL(urlPaths.product.category.mp3Players);
        })
    })

    test.describe("Top Products", () => {
        // first product
        test("Verify clicking first Top Products link", async ({ page }) => {
            await homePage.clickTopProduct(0);

            await expect(page).toHaveURL("?route=product/product&product_id=107");
        });

        // last product
        test("Verify clicking last Top Products link", async ({ page }) => {
            await homePage.clickTopProduct(9);

            await expect(page).toHaveURL("?route=product/product&product_id=98");
        });
    })
})