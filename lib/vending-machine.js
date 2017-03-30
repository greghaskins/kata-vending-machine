const CoinAppraiser = require('./coin-appraiser');
const appraiser = new CoinAppraiser();

class VendingMachine {

    constructor() {
        this._insertedAmount = 0.0;
        this._returnedCoins = [];
        this._productChute = [];
        this._specialMessages = [];
    }

    get nextMessage() {
        return this._specialMessages.shift() || defaultMessage(this._insertedAmount);
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

    selectProduct() {
        if (this._insertedAmount >= 1) {
            this._insertedAmount -= 1;
            this._productChute.push('Cola');
            this._specialMessages.push('THANK YOU');
        } else {
            this._specialMessages.push('PRICE ' + formatCurrency(1));
        }
    }

    get productChute() {
        return this._productChute;
    }

}

function formatCurrency(amount) {
    return '$' + amount.toFixed(2);
}

function defaultMessage(insertedAmount) {
    return insertedAmount ? formatCurrency(insertedAmount) : 'INSERT COIN';
}

module.exports = VendingMachine;
