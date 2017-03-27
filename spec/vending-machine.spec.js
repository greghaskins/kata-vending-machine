const VendingMachine = require('../lib/vending-machine');

describe('The vending machine', () => {

    it('should display INSERT COIN if no money has been inserted', () => {
        let machine = new VendingMachine();
        expect(machine.nextMessage).toEqual('INSERT COIN');
    });

});
