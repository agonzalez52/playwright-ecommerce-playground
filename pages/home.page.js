class HomePage{
    static TOP_TRENDING_CATEGORIES = {
        'Desktops': 1,
        'Laptops': 2,
        'Components': 3,
        'Tablets': 4,
        'Software': 5,
        'Phones & PDAs': 6,
        'Cameras': 7,
        'MP3 Players': 8
    };

    constructor(page){
        this.page = page;
        this.topTrendingCategoriesHeader = page.getByRole('heading', { name: 'Top Trending Categories' });
        this.topTrendingCategoriesArrow = page.getByRole('button', { name: 'Next slide' });
        this.topTrendingCategoryLink = (trendingCategoryName) => page.getByRole('group', { name: `${HomePage.TOP_TRENDING_CATEGORIES[trendingCategoryName]} / 8` }).getByRole('link');
        this.topProductsHeader = page.getByRole('heading', { name: 'Top Products' });
        this.topProductsLink = (topProductIndex) => page.locator(`#mz-product-listing-image-37218399-0-${topProductIndex}`);
        this.topProductsArrow = page.locator('.swiper-button-next').first();
    }

    async clickTopTrendingCategory(trendingCategoryName){
        if(!HomePage.TOP_TRENDING_CATEGORIES[trendingCategoryName]){
            throw new Error(`Category "${trendingCategoryName}" is not a valid category`);
        }

        await this.topTrendingCategoriesHeader.scrollIntoViewIfNeeded();

        let maxAttempts = 10;
        while(!(await this.topTrendingCategoryLink(trendingCategoryName).isVisible()) && maxAttempts > 0){
            await this.topTrendingCategoriesArrow.click();
            await this.page.waitForTimeout(300);
            maxAttempts--;
        }

        if(!(await this.topTrendingCategoryLink(trendingCategoryName).isVisible())){
            throw new Error(`Category ${trendingCategoryName} could not be scrolled into view`);
        }
        
        await this.topTrendingCategoryLink(trendingCategoryName).click();
    }

    async clickTopProduct(topProductIndex){
        await this.topProductsHeader.scrollIntoViewIfNeeded();
        
        let maxAttempts = 10;
        while(!(await this.topProductsLink(topProductIndex).isVisible()) && maxAttempts > 0){
            await this.topProductsArrow.click();
            await this.page.waitForTimeout(300);
            maxAttempts--;
        }
        
        if(!(await this.topProductsLink(topProductIndex).isVisible())){
            throw new Error(`Product at index ${topProductIndex} could not be scrolled into view`);
        }
        
        await this.topProductsLink(topProductIndex).click();
    }
}

module.exports = HomePage