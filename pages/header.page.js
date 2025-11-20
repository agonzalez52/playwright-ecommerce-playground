// HeaderPage includes top header with search bar and top nav bar
class HeaderPage{
    constructor(page){
        this.page = page;
        this.logo = page.getByRole('link', { name: 'Poco Electro' });
        this.searchBarCategoryDropdown = page.getByRole('button', { name: 'All Categories' });
        this.searchField = page.getByRole('textbox', { name: 'Search For Products' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.compareLink = page.getByRole('link', { name: 'Compare', exact: true });
        this.wishlistLink = page.getByRole('link', { name: 'Wishlist', exact: true });
        this.cartLink = page.getByRole('button', { name: '0' });
        this.shopByCategoryMenu = page.getByRole('button', { name: 'Shop by Category' });
        this.shopByCategoryComponents = page.getByRole('link', { name: 'Components' });
        this.shopByCategoryCameras = page.getByRole('link', { name: 'Cameras', exact: true });
        this.homeNavBarLink = page.getByRole('link', { name: 'Home' });
        this.specialNavBarLink = page.getByRole('link', { name: 'Special Hot', exact: true });
        this.blogNavBarLink = page.getByRole('link', { name: 'Blog', exact: true });
        this.megaMenuNavBarHover = page.getByRole('button', { name: 'Mega Menu' });
        this.addOnsNavBarHover = page.getByRole('button', { name: 'AddOns Featured' });
        this.myAccountNavBarHover = page.getByRole('button', { name: ' My account' });
        this.myAccountNavBarHoverLogin = page.getByRole('link', { name: 'Login', exact: true });
        this.myAccountNavBarHoverRegister = page.getByRole('link', { name: 'Register', exact: true });
    }

    async clickLogo(){
        await this.logo.click();
    }

    async clickSearchBarCategoryDropdown(){
        await this.searchBarCategoryDropdown.click();
    }

    async clickSearchField(){
        await this.searchField.click();
    }

    async fillSearchField(text){
        await this.searchField.fill(text);
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

    async clickShopByCategoryComponents(){
        await this.shopByCategoryComponents.click();
    }

    async clickShopByCategoryCameras(){
        await this.shopByCategoryCameras.click();
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