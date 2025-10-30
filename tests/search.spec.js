const { test, expect } = require("@playwright/test");
const HeaderPage = require("../pages/header.page");
const SearchPage = require("../pages/search.page");
const ProductDetailPage = require("../pages/productDetail.page");
const urlPaths = require("../fixtures/urlPaths.json");

test.describe("Search Page", () => {
    let headerPage;

    test.beforeEach(async ({ page }) => {
        headerPage = new HeaderPage(page);
        await page.goto(urlPaths.home);
    });

    test("Verify search results are shown when searching for 'phone'", async ({ page }) => {
        await headerPage.fillSearchField("phone");
        await headerPage.clickSearchButton();

        let searchPage = new SearchPage(page);
        await expect(searchPage.firstSearchResult).toBeVisible();
    });

    test("Verify clicking search result navigates to product page", async ({ page }) => {
        await headerPage.fillSearchField("phone");
        await headerPage.clickSearchButton();

        let searchPage = new SearchPage(page);
        await searchPage.clickFirstSearchResult();

        let productDetailPage = new ProductDetailPage(page);
        await expect(productDetailPage.productCode).toBeVisible();
        await expect(productDetailPage.brand).toBeVisible();
        await expect(productDetailPage.viewed).toBeVisible();
        await expect(productDetailPage.availability).toBeVisible();
    });
})