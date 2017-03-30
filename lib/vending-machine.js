const CoinAppraiser = require('./coin-appraiser');
const ProductCatalog = require('./product-catalog');

const appraiser = new CoinAppraiser();
const productCatalog = new ProductCatalog();

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

    selectProduct(name) {
        const price = productCatalog.priceOf(name);
        if (this._insertedAmount >= price) {
            this._insertedAmount -= price;
            this._productChute.push(name);
            this._specialMessages.push('THANK YOU');
        } else {
            this._specialMessages.push('PRICE ' + formatCurrency(price));
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
