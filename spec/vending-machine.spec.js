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

        it('should reject bogus coins mixed with valid coins', () => {
            const bogusCoin = {
                mass: 3,
                diameter: 18,
                thickness: 1.5
            };

            machine.insertCoin(bogusCoin);
            machine.insertCoin(DIME);
            machine.insertCoin(QUARTER);
            machine.insertCoin(bogusCoin);
            machine.insertCoin(NICKEL);
            machine.insertCoin(NICKEL);

            expect(machine.nextMessage).toEqual('$0.45');
            expect(machine.coinReturn).toContain(bogusCoin);
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


    describe('selecting a cola', () => {

        describe('when you have inserted sufficient money', () => {

            beforeEach(() => {
                machine.insertCoin(QUARTER);
                machine.insertCoin(QUARTER);
                machine.insertCoin(QUARTER);
                machine.insertCoin(QUARTER);
            });

            it('dispenses a cola', () => {
                machine.selectProduct('Cola');
                expect(machine.productChute).toContain('Cola');
            });

            it('should display THANK YOU');
            it('should deduct $1.00 from your balance');

        });

        describe('when you have NOT inserted sufficient money', () => {

            beforeEach(() => {
                machine.insertCoin(QUARTER);
                machine.insertCoin(QUARTER);
                machine.insertCoin(QUARTER);
                machine.insertCoin(DIME);
                machine.insertCoin(DIME);
            });

            it('dispenses nothing', () => {
                machine.selectProduct('Cola');
                expect(machine.productChute).toEqual([]);
            });

        });


    });


});

function copyCoin(baseCoin, updates) {
    return Object.assign({}, baseCoin, updates);
}
