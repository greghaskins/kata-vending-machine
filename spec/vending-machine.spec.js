const VendingMachine = require('../lib/vending-machine');

describe('The vending machine', () => {

    const NICKEL = {
        mass: 5,
        diameter: 21.21,
        thickness: 1.95
    };

    it('should display INSERT COIN if no money has been inserted', () => {
        let machine = new VendingMachine();
        expect(machine.nextMessage).toEqual('INSERT COIN');
    });

    describe('accepting nickels', () => {

        it('should accept one', () => {
            let machine = new VendingMachine();
            machine.insertCoin(NICKEL);
            expect(machine.nextMessage).toEqual('$0.05');
        });

        it('should accept multiple', () => {
            let machine = new VendingMachine();
            machine.insertCoin(NICKEL);
            machine.insertCoin(NICKEL);
            machine.insertCoin(NICKEL);
            expect(machine.nextMessage).toEqual('$0.15');
        });

    });


});
