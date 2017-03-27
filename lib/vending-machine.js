class VendingMachine {

    constructor() {
        this._insertedAmount = 0.0;
    }

    get nextMessage() {
        return this._insertedAmount ? formatCurrency(this._insertedAmount) : 'INSERT COIN';
    }

    insertCoin(coin) {
        if (validateCoin(coin)) {
            this._insertedAmount += 0.05;
        }
    }

}

function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

function validateCoin(coin) {
    return coin.mass === 5.0;
}

module.exports = VendingMachine;
