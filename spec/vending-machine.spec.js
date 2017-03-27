const VendingMachine = require('../lib/vending-machine');

describe('The vending machine', () => {

    let machine;
    beforeEach(() => {
        machine = new VendingMachine();
    });

    const NICKEL = {
        mass: 5,
        diameter: 21.21,
        thickness: 1.95
    };

    it('should display INSERT COIN if no money has been inserted', () => {
        expect(machine.nextMessage).toEqual('INSERT COIN');
    });

    describe('accepting nickels', () => {

        it('should accept one', () => {
            machine.insertCoin(NICKEL);
            expect(machine.nextMessage).toEqual('$0.05');
        });

        it('should accept multiple', () => {
            machine.insertCoin(NICKEL);
            machine.insertCoin(NICKEL);
            machine.insertCoin(NICKEL);
            expect(machine.nextMessage).toEqual('$0.15');
        });

        it('should reject if mass is incorrect', () => {
            const lightNickel = copyCoin(NICKEL, { mass: 4.9 });
            const heavyNickel = copyCoin(NICKEL, { mass: 5.01 });

            machine.insertCoin(NICKEL);
            machine.insertCoin(lightNickel);
            machine.insertCoin(heavyNickel);
            expect(machine.nextMessage).toEqual('$0.05');
        });

    });


});

function copyCoin(baseCoin, updates) {
    return Object.assign({}, baseCoin, updates);
}
