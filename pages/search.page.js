class SearchPage{
    constructor(page){
        this.page = page;
        this.firstSearchResult = page.locator('.product-layout').first();
    }

    async clickFirstSearchResult(){
        await this.firstSearchResult.click();
    }
}

module.exports = SearchPage;