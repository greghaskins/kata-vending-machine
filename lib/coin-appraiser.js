class CoinAppraiser {

    appraise(coin) {
        if (isNickel(coin)) {
            return 0.05;
        } else if (isDime(coin)) {
            return 0.10;
        } else {
            return 0;
        }
    }

}

function isNickel(coin) {
    return (
        coin.mass === 5 &&
        coin.diameter === 21.21 &&
        coin.thickness === 1.95
    )
}

function isDime(coin) {
    return (
        coin.mass === 2.268 &&
        coin.diameter === 17.91 &&
        coin.thickness === 1.35
    );
}

module.exports = CoinAppraiser;
