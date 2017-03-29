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
        const value = appraiser.appraise(coin);
        if (value > 0) {
            this._insertedAmount += value;
        } else {
            this._returnedCoins.push(coin);
        }
    }

}

function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

module.exports = VendingMachine;
