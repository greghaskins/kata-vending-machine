class VendingMachine {

    constructor() {
        this._message = 'INSERT COIN';
    }

    get nextMessage() {
        return this._message;
    }

    insertCoin() {
        this._message = '$0.05';
    }

}
module.exports = VendingMachine;
