"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const address_1 = require("@ethersproject/address");
const utils_1 = require("../utils");
const client_1 = require("../apollo/client");
const queries_1 = require("../apollo/queries");
const computeBidsAsks_1 = require("../utils/computeBidsAsks");
const getPairs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pairs, error } = yield (0, utils_1.getAllPairs)();
    if (error) {
        return res.status(404).json({
            error: JSON.stringify(error),
        });
    }
    const tokenPairs = pairs.map((pair) => {
        return {
            ticker_id: pair.token0.symbol + "_" + pair.token1.symbol,
            base: pair.token0.symbol,
            target: pair.token1.symbol,
        };
    });
    return res.status(200).json(tokenPairs);
});
const getTickers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pairs, error } = yield (0, utils_1.getAllPairs)();
    if (error) {
        return res.status(404).json({
            message: JSON.stringify(error),
        });
    }
    const tickers = pairs.map((pair) => {
        const bidAsks = (0, computeBidsAsks_1.computeBidsAsks)(new bignumber_js_1.default(pair.reserve0), new bignumber_js_1.default(pair.reserve1));
        return {
            ticker_id: pair.token0.symbol + "_" + pair.token1.symbol,
            base_currrency: pair.token0.symbol,
            target_currency: pair.token1.symbol,
            last_price: pair.price,
            base_volume: pair.previous24hVolumeToken0.toString(),
            target_volume: pair.previous24hVolumeToken1.toString(),
            bid: Math.max(...bidAsks.bids.map((bid) => Number(bid[1]))),
            ask: Math.min(...bidAsks.asks.map((ask) => Number(ask[1]))),
        };
    });
    return res.status(200).json(tickers);
});
const getOrderbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { data: { pairs }, errors: error, } = yield client_1.client.query({
        query: queries_1.PAIR_FROM_NAME,
        variables: {
            name: (_a = req.query.ticker_id) === null || _a === void 0 ? void 0 : _a.toString().replace("_", "-"),
        },
        fetchPolicy: "cache-first",
    });
    if (error && error.length > 0) {
        return res.status(404).json({
            error: JSON.stringify(error),
        });
    }
    const bidAsks = (0, computeBidsAsks_1.computeBidsAsks)(new bignumber_js_1.default(pairs[0].reserve0), new bignumber_js_1.default(pairs[0].reserve1), Number(req.query.depth) === 0 ? 1000 : Number(req.query.depth) / 2);
    const pairInfo = Object.assign({ ticker_id: req.query.ticker_id, timestamp: pairs[0].timestamp }, bidAsks);
    return res.status(200).json(pairInfo);
});
const getHistoricalTrades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const { data: { pairs }, errors: error, } = yield client_1.client.query({
        query: queries_1.PAIR_FROM_NAME,
        variables: {
            name: (_b = req.query.ticker_id) === null || _b === void 0 ? void 0 : _b.toString().replace("_", "-"),
        },
        fetchPolicy: "cache-first",
    });
    if (error && error.length > 0) {
        return res.status(404).json({
            error: JSON.stringify(error),
        });
    }
    const swaps = yield (0, utils_1.getSwaps)(pairs[0].token0.id, pairs[0].token1.id);
    const results = swaps.slice(0, Number(req.query.limit)).map((swap) => {
        const aIn = swap.amountAIn !== "0";
        const aOut = swap.amountAOut !== "0";
        const bIn = swap.amountBIn !== "0";
        const bOut = swap.amountBOut !== "0";
        // a is the base so if the pair sends a and not b then it's a 'buy'
        const isBuy = aOut && bIn && !aIn && !bOut;
        const isSell = !aOut && !bIn && aIn && bOut;
        const isBorrowBoth = aOut && bOut && aIn && bIn;
        const type = isBuy
            ? "buy"
            : isSell
                ? "sell"
                : isBorrowBoth
                    ? "borrow-both"
                    : "???";
        const baseAmount = aOut ? swap.amountAOut : swap.amountAIn;
        const quoteAmount = bOut ? swap.amountBOut : swap.amountBIn;
        return {
            trade_id: swap.id,
            base_volume: baseAmount,
            target_volume: quoteAmount,
            type,
            trade_timestamp: swap.timestamp,
            price: baseAmount !== "0"
                ? new bignumber_js_1.default(quoteAmount)
                    .dividedBy(new bignumber_js_1.default(baseAmount))
                    .toString()
                : undefined,
        };
    });
    return res.status(200).json(results);
});
const getAssets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { pairs, error } = yield (0, utils_1.getAllPairs)();
    if (error) {
        return res.status(404).json({
            message: JSON.stringify(error),
        });
    }
    const results = pairs.reduce((memo, pair) => {
        for (let token of [pair.token0, pair.token1]) {
            const id = (0, address_1.getAddress)(token.id);
            if (memo[id])
                continue;
            memo[id] = {
                id,
                name: token.name,
                symbol: token.symbol,
                maker_fee: "0",
                taker_fee: "0.003",
            };
        }
        return memo;
    }, {});
    return res.status(200).json(results);
});
exports.default = {
    getPairs,
    getTickers,
    getOrderbook,
    getHistoricalTrades,
    getAssets,
};
