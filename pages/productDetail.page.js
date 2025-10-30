class ProductDetailPage {
    constructor(page) {
        this.page = page;
        this.productCode = page.getByText('Product Code:');
        this.brand = page.getByText('Brand:');
        this.viewed = page.getByText('Viewed:');
        this.availability = page.getByText('Availability:');
    }
}

module.exports = ProductDetailPage;