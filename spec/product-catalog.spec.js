const ProductCatalog = require('../lib/product-catalog');

describe('the product catalog', () => {

    const catalog = new ProductCatalog();

    describe('cola', () => {

        it('costs $1.00', () => {
            expect(catalog.priceOf('Cola')).toBe(1.00);
        });

    });


    describe('invalid products', () => {


        it('throw an error when you try to get their price', () => {
            expect(() => catalog.priceOf('Caviar')).toThrow(new Error('Unknown product: Caviar'));
        });


    });



});
