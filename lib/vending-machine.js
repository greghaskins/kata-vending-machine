class VendingMachine {

    constructor() {
        this._message = 'INSERT COIN';
        this._insertedAmount = 0.0;
    }

    get nextMessage() {
        return this._message;
    }

    insertCoin() {
        this._insertedAmount += 0.05;
        this._message = '$' + this._insertedAmount.toFixed(2);
    }

}
module.exports = VendingMachine;
