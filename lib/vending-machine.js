class VendingMachine {

    constructor() {
        this._insertedAmount = 0.0;
    }

    get nextMessage() {
        return this._insertedAmount ? formatCurrency(this._insertedAmount) : 'INSERT COIN';
    }

    insertCoin() {
        this._insertedAmount += 0.05;
    }

}

function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

module.exports = VendingMachine;
