const ProductCatalog = require('../lib/product-catalog');

describe('the product catalog', () => {

    const catalog = new ProductCatalog();

    describe('cola', () => {

        it('costs $1.00', () => {
            expect(catalog.priceOf('Cola')).toBe(1.00);
        });

    });

    describe('chips', () => {

        it('cost $0.50', () => {
            expect(catalog.priceOf('Chips')).toBe(0.50);
        });

    });

    describe('candy', () => {

        it('costs $0.50', () => {
            expect(catalog.priceOf('Candy')).toBe(0.65);
        });

    });

    describe('invalid products', () => {

        it('throw an error when you try to get their price', () => {
            expect(() => catalog.priceOf('Caviar')).toThrow(new Error('Unknown product: Caviar'));
        });

    });

    it('is case insensitive', () => {
        expect(catalog.priceOf('cOlA')).toEqual(catalog.priceOf('CoLa'));
        expect(catalog.priceOf('CHIPS')).toEqual(catalog.priceOf('chips'));
        expect(catalog.priceOf('CANdy')).toEqual(catalog.priceOf('caNDy'));
    });

});
