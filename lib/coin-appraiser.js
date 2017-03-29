class CoinAppraiser {

    appraise(coin) {
        if (isNickel(coin)) {
            return 0.05;
        } else if (isDime(coin)) {
            return 0.10;
        } else if (isQuarter(coin)) {
            return 0.25;
        } else {
            return 0.0;
        }
    }

}

function isNickel(coin) {
    return (
        coin.mass === 5 &&
        coin.diameter === 21.21 &&
        coin.thickness === 1.95
    );
}

function isDime(coin) {
    return (
        coin.mass === 2.268 &&
        coin.diameter === 17.91 &&
        coin.thickness === 1.35
    );
}

function isQuarter(coin) {
    return (
        coin.mass === 5.670 &&
        coin.diameter === 24.26 &&
        coin.thickness === 1.75
    );
}

module.exports = CoinAppraiser;
