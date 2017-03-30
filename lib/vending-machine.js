const CoinAppraiser = require('./coin-appraiser');
const appraiser = new CoinAppraiser();

class VendingMachine {

    constructor() {
        this._insertedAmount = 0.0;
        this._returnedCoins = [];
        this._productChute = [];
    }

    get nextMessage() {
        if (this._specialMessage) {
            const message = this._specialMessage;
            this._specialMessage = null;
            return message;
        } else {
            return defaultMessage(this._insertedAmount);
        }
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
        if (this._insertedAmount === 1) {
            this._insertedAmount -= 1;
            this._productChute.push('Cola');
            this._specialMessage = 'THANK YOU';
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
