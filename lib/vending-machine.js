const CoinAppraiser = require('./coin-appraiser');
const appraiser = new CoinAppraiser();

class VendingMachine {

    constructor() {
        this._insertedAmount = 0.0;
        this._returnedCoins = [];
    }

    get nextMessage() {
        return this._insertedAmount ? formatCurrency(this._insertedAmount) : 'INSERT COIN';
    }

    get coinReturn() {
        return this._returnedCoins;
    }

    clearCoinReturn() {
        this._returnedCoins = [];
    }

    insertCoin(coin) {
        if (validateCoin(coin)) {
            this._insertedAmount += 0.05;
        } else {
            this._returnedCoins.push(coin);
        }
    }

}

function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

function validateCoin(coin) {
    return appraiser.appraise(coin) > 0;
}

module.exports = VendingMachine;
