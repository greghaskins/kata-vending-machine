const VendingMachine = require('../lib/vending-machine');

describe('The vending machine', () => {

    it('should display INSERT COIN if no money has been inserted', () => {
        let machine = new VendingMachine();
        expect(machine.nextMessage).toEqual('INSERT COIN');
    });

    it('should accept nickels', () => {
        let machine = new VendingMachine();
        machine.insertCoin({
            mass: 5,
            diameter: 21.21,
            thickness: 1.95
        });

        expect(machine.nextMessage).toEqual('$0.05');
    });


});
