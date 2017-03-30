const prices = {
    Cola: 1.0
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
