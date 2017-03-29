const VendingMachine = require('../lib/vending-machine');
const { NICKEL, DIME, QUARTER } = require('./coins');

describe('The vending machine', () => {

    let machine;
    beforeEach(() => {
        machine = new VendingMachine();
    });

    it('should display INSERT COIN if no money has been inserted', () => {
        expect(machine.nextMessage).toEqual('INSERT COIN');
    });

    describe('accepting coins', () => {

        it('should accept one nickel', () => {
            machine.insertCoin(NICKEL);
            expect(machine.nextMessage).toEqual('$0.05');
        });

        it('should accept one dime', () => {
            machine.insertCoin(DIME);
            expect(machine.nextMessage).toEqual('$0.10');
        });

        it('should accept one quarter', () => {
            machine.insertCoin(QUARTER);
            expect(machine.nextMessage).toEqual('$0.25');
        });

        it('should accept multiple coins', () => {
            machine.insertCoin(NICKEL);
            machine.insertCoin(QUARTER);
            machine.insertCoin(DIME);
            machine.insertCoin(QUARTER);
            expect(machine.nextMessage).toEqual('$0.65');
        });

        it('should reject a penny', () => {
            const penny = {
                mass: 2.5,
                diameter: 19.05,
                thickness: 1.52
            };

            machine.insertCoin(penny);
            expect(machine.nextMessage).toEqual('INSERT COIN');
            expect(machine.coinReturn).toContain(penny);
        });

        it('should reject if diameter is incorrect', () => {
            const bigNickel = copyCoin(NICKEL, { diameter: 23 });
            const smallNickel = copyCoin(NICKEL, { diameter: 20 });

            machine.insertCoin(NICKEL);
            machine.insertCoin(bigNickel);
            machine.insertCoin(NICKEL);
            machine.insertCoin(smallNickel);
            expect(machine.nextMessage).toEqual('$0.10');
        });

        it('should reject if thickness is incorrect', () => {
            const thickNickel = copyCoin(NICKEL, { thickness: 2.0 });
            const thinNickel = copyCoin(NICKEL, { thickness: 1.9 });

            machine.insertCoin(thickNickel);
            machine.insertCoin(thinNickel);
            expect(machine.nextMessage).toEqual('INSERT COIN');
        });

    });


    describe('coin return', () => {

        const bogusCoin1 = copyCoin(NICKEL, { mass: 0.1 });
        const bogusCoin2 = copyCoin(NICKEL, { mass: 0.2 });

        beforeEach(() => {
            machine.insertCoin(bogusCoin1);
            machine.insertCoin(bogusCoin2);
        });

        it('should keep invalid coins in there', () => {
            expect(machine.coinReturn).toContain(bogusCoin1);
            expect(machine.coinReturn).toContain(bogusCoin2);
        });

        it('should be able to clear', () => {
            machine.clearCoinReturn();
            expect(machine.coinReturn.length).toBe(0);
        });
    });



});

function copyCoin(baseCoin, updates) {
    return Object.assign({}, baseCoin, updates);
}
