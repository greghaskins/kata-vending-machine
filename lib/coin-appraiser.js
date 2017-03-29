class CoinAppraiser {

    appraise(coin) {
        return (
            coin.mass === 5 &&
            coin.diameter === 21.21 &&
            coin.thickness === 1.95
        ) ? 0.05 : 0;
    }

}

module.exports = CoinAppraiser;
