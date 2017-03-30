const prices = {
    Cola: 1.0,
    Chips: 0.50,
    Candy: 0.65
}

class ProductCatalog {

    priceOf(productName) {
        if (productName in prices) {
            return prices[productName];
        } else {
            throw new Error('Unknown product: ' + productName);
        }
    }

}

module.exports = ProductCatalog;
