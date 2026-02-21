// HeaderPage includes top header with search bar and top nav bar
class HeaderPage{
    constructor(page){
        this.page = page;
        this.logo = page.getByRole('link', { name: 'Poco Electro' });
        this.searchBarCategoryDropdown = (activeCategory = 'All Categories') => page.getByRole('button', { name: activeCategory });
        this.searchBarCategoryLink = (categoryName) => page.getByRole('link', { name: categoryName, exact: true });
        this.searchField = page.getByRole('textbox', { name: 'Search For Products' });
        this.suggestedResultByIndex = (index) => page.locator('.dropdown-menu.autocomplete li.product-thumb').nth(index);
        this.firstSuggestedResultBySearchInput = (productName) => page.locator('li.product-thumb a').filter({ hasText: productName }).first();
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.compareLink = page.getByRole('link', { name: 'Compare', exact: true });
        this.wishlistLink = page.getByRole('link', { name: 'Wishlist', exact: true });
        this.cartLink = page.getByRole('button', { name: '0' });
        this.shopByCategoryMenu = page.getByRole('button', { name: 'Shop by Category' });
        this.shopByCategoryOption = (categoryName) => page.getByRole('link', { name: categoryName, exact: true });
        this.homeNavBarLink = page.getByRole('link', { name: 'Home' });
        this.specialNavBarLink = page.getByRole('link', { name: 'Special Hot', exact: true });
        this.blogNavBarLink = page.getByRole('link', { name: 'Blog', exact: true });
        this.megaMenuNavBarHover = page.getByRole('button', { name: 'Mega Menu' });
        this.megaMenuOption = (optionName) => page.getByRole('link', { name: optionName, exact: true });
        this.addOnsNavBarHover = page.getByRole('button', { name: 'AddOns Featured' });
        this.addOnsMenuOption = (optionName) => page.getByRole('link', { name: optionName });
        this.myAccountNavBarHover = page.getByRole('button', { name: ' My account' });
        this.myAccountNavBarHoverLogin = page.getByRole('link', { name: 'Login', exact: true });
        this.myAccountNavBarHoverRegister = page.getByRole('link', { name: 'Register', exact: true });
    }

    async clickLogo(){
        await this.logo.click();
    }

    async clickSearchBarCategoryDropdown(){
        await this.searchBarCategoryDropdown().click();
    }

    async clickSearchField(){
        await this.searchField.click();
    }

    async fillSearchField(text){
        await this.searchField.fill(text);
    }

    async clickSuggestedResultByIndex(index){
        await this.suggestedResultByIndex(index).click();
    }

    async clickFirstSuggestedResultByInput(searchInput){
        await this.firstSuggestedResultBySearchInput(searchInput).click();
    }

    async clickSearchButton(){
        await this.searchButton.click();
    }

    async clickCompareLink(){
        await this.compareLink.click();
    }

    async clickWishListLink(){
        await this.wishlistLink.click();
    }

    async clickCartLink(){
        await this.cartLink.click();
    }

    async clickShopByCategoryMenu(){
        await this.shopByCategoryMenu.click();
    }

    async clickShopByCategoryOption(categoryName){
        await this.shopByCategoryMenu.click();
        await this.shopByCategoryOption(categoryName).click();
    }

    async clickHomeNavBarLink(){
        await this.homeNavBarLink.click();
    }

    async clickSpecialNavBarLink(){
        await this.specialNavBarLink.click();
    }

    async clickBlogNavBarLink(){
        await this.blogNavBarLink.click();
    }

    async clickMegaMenuNavBarLink(){
        await this.megaMenuNavBarHover.click();
    }

    async clickMegaMenuOption(optionName){
        await this.megaMenuNavBarHover.hover();
        await this.megaMenuOption(optionName).click();
    }

    async clickAddOnsOption(optionName){
        await this.addOnsNavBarHover.hover();
        await this.addOnsMenuOption(optionName).click();
    }

    async clickMyAccountNavBarLink(){
        await this.myAccountNavBarHover.click();
    }

    async clickMyAccountHoverLogin(){
        await this.myAccountNavBarHover.hover();
        await this.myAccountNavBarHoverLogin.click();
    }

    async clickMyAccountHoverRegister(){
        await this.myAccountNavBarHover.hover();
        await this.myAccountNavBarHoverRegister.click();
    }
}

module.exports = HeaderPage;