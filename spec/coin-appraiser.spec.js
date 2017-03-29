const CoinAppraiser = require('../lib/coin-appraiser');

describe('the coin appraiser', () => {

    const appraiser = new CoinAppraiser();

    describe('with nickels', () => {

        const NICKEL = {
            mass: 5,
            diameter: 21.21,
            thickness: 1.95
        };

        it('values them at $0.05', () => {
            expect(appraiser.appraise(NICKEL)).toBe(0.05);
        });

        it('values them at $0 when mass is incorrect', () => {
            const lightNickel = copyCoin(NICKEL, { mass: 4.9 });
            const heavyNickel = copyCoin(NICKEL, { mass: 5.01 });

            expect(appraiser.appraise(lightNickel)).toEqual(0.0);
            expect(appraiser.appraise(heavyNickel)).toEqual(0.0);
        });

        it('values them at $0 when diameter is incorrect', () => {
            const bigNickel = copyCoin(NICKEL, { diameter: 21.22 });
            const smallNickel = copyCoin(NICKEL, { diameter: 21.20 });

            expect(appraiser.appraise(bigNickel)).toBe(0.0);
            expect(appraiser.appraise(smallNickel)).toBe(0.0);
        });

        it('values them at $0 when thickness is incorrect', () => {
            const thickNickel = copyCoin(NICKEL, { thickness: 1.96 });
            const thinNickel = copyCoin(NICKEL, { thickness: 1.94 });

            expect(appraiser.appraise(thickNickel)).toBe(0.0);
            expect(appraiser.appraise(thinNickel)).toBe(0.0);
        });

    });

    describe('with dimes', () => {

        const DIME = {
            mass: 2.268,
            diameter: 17.91,
            thickness: 1.35
        };

        it('values them at $0.10', () => {
            expect(appraiser.appraise(DIME)).toBe(0.10);
        });

        it('values them at $0 when mass is incorrect', () => {
            const lightDime = copyCoin(DIME, { mass: 2.267 });
            const heavyDime = copyCoin(DIME, { mass: 2.269 });

            expect(appraiser.appraise(lightDime)).toEqual(0.0);
            expect(appraiser.appraise(heavyDime)).toEqual(0.0);
        });

        it('values them at $0 when diameter is incorrect', () => {
            const bigDime = copyCoin(DIME, { diameter: 17.92 });
            const smallDime = copyCoin(DIME, { diameter: 17.90 });

            expect(appraiser.appraise(bigDime)).toBe(0.0);
            expect(appraiser.appraise(smallDime)).toBe(0.0);
        });

        it('values them at $0 when thickness is incorrect', () => {
            const thickDime = copyCoin(DIME, { thickness: 1.36 });
            const thinDime = copyCoin(DIME, { thickness: 1.34 });

            expect(appraiser.appraise(thickDime)).toBe(0.0);
            expect(appraiser.appraise(thinDime)).toBe(0.0);
        });

    });

});

function copyCoin(baseCoin, updates) {
    return Object.assign({}, baseCoin, updates);
}
