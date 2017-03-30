const prices = {
    cola: 1.0,
    chips: 0.50,
    candy: 0.65
}

class ProductCatalog {

    priceOf(productName) {
        const key = productName.toLowerCase();
        if (key in prices) {
            return prices[key];
        } else {
            throw new Error('Unknown product: ' + productName);
        }
    }

}

module.exports = ProductCatalog;
