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
exports.getSwaps = exports.get24HoursAgo = exports.getAllPairs = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const client_1 = require("../apollo/client");
const queries_1 = require("../apollo/queries");
const queries_2 = require("../blocks/queries");
const queries_3 = require("../apollo/queries");
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const getAllPairs = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const epochSecond = Math.floor(new Date().getTime() / 1000);
    const firstBlock = yield (0, queries_2.getBlockFromTimestamp)(epochSecond - 86400);
    if (!firstBlock) {
        return { error: new Error("first block was not fetched") };
    }
    const { data: { pairs }, errors: error, } = yield client_1.client.query({
        query: queries_1.TOP_PAIRS,
        variables: {
            limit: 100,
            excludeTokenIds: [""],
        },
        fetchPolicy: "cache-first",
    });
    if (error && error.length > 0) {
        console.error("Failed to fetch top pairs", error);
        return { error: new Error("Failed to fetch top pairs from the subgraph") };
    }
    const { data: { pairVolumes }, errors: yesterdayVolumeErrors, } = yield client_1.client.query({
        query: queries_1.PAIRS_VOLUME_QUERY,
        variables: {
            limit: 100,
            pairIds: pairs.map((pair) => pair.id),
            blockNumber: +firstBlock,
        },
        fetchPolicy: "no-cache",
    });
    if (yesterdayVolumeErrors && yesterdayVolumeErrors.length > 0) {
        console.error("Failed to fetch yesterday volume", yesterdayVolumeErrors);
        throw {
            error: new Error(`Failed to get volume info for 24h ago from the subgraph`),
        };
    }
    const yesterdayVolumeIndex = (_a = pairVolumes === null || pairVolumes === void 0 ? void 0 : pairVolumes.reduce((memo, pair) => {
        memo[pair.id] = {
            volumeToken0: new bignumber_js_1.default(pair.volumeToken0),
            volumeToken1: new bignumber_js_1.default(pair.volumeToken1),
        };
        return memo;
    }, {})) !== null && _a !== void 0 ? _a : {};
    const tokenPairs = pairs.map((pair) => {
        const yesterday = yesterdayVolumeIndex[pair.id];
        if (yesterday) {
            if (yesterday.volumeToken0.gt(pair.volumeToken0)) {
                return {
                    error: new Error(`Invalid subgraph response: pair ${pair.id} returned volumeToken0 < yesterday.volumeToken0`),
                };
            }
            if (yesterday.volumeToken1.gt(pair.volumeToken1)) {
                return {
                    error: new Error(`Invalid subgraph response: pair ${pair.id} returned volumeToken1 < yesterday.volumeToken1`),
                };
            }
        }
        return Object.assign(Object.assign({}, pair), { price: pair.reserve0 !== "0" && pair.reserve1 !== "0"
                ? new bignumber_js_1.default(pair.reserve1).dividedBy(pair.reserve0).toString()
                : undefined, previous24hVolumeToken0: pair.volumeToken0 && (yesterday === null || yesterday === void 0 ? void 0 : yesterday.volumeToken0)
                ? new bignumber_js_1.default(pair.volumeToken0).minus(yesterday.volumeToken0)
                : new bignumber_js_1.default(pair.volumeToken0), previous24hVolumeToken1: pair.volumeToken1 && (yesterday === null || yesterday === void 0 ? void 0 : yesterday.volumeToken1)
                ? new bignumber_js_1.default(pair.volumeToken1).minus(yesterday.volumeToken1)
                : new bignumber_js_1.default(pair.volumeToken1) });
    });
    return { pairs: tokenPairs, error };
});
exports.getAllPairs = getAllPairs;
function get24HoursAgo() {
    return Math.floor((Date.now() - DAY) / 1000);
}
exports.get24HoursAgo = get24HoursAgo;
function isSorted(tokenA, tokenB) {
    return tokenA.toLowerCase() < tokenB.toLowerCase();
}
function sortedFormatted(tokenA, tokenB) {
    return isSorted(tokenA, tokenB)
        ? [tokenA.toLowerCase(), tokenB.toLowerCase()]
        : [tokenB.toLowerCase(), tokenA.toLowerCase()];
}
function getSwaps(tokenA, tokenB) {
    return __awaiter(this, void 0, void 0, function* () {
        const _24HoursAgo = get24HoursAgo();
        const [token0, token1] = sortedFormatted(tokenA, tokenB);
        let { data: { pairs: [{ id: pairAddress }], }, } = yield client_1.client.query({
            query: queries_3.PAIR_FROM_TOKENS,
            variables: {
                token0,
                token1,
            },
        });
        const sorted = isSorted(tokenA, tokenB);
        let skip = 0;
        let results = [];
        let finished = false;
        while (!finished) {
            yield client_1.client
                .query({
                query: queries_3.SWAPS_BY_PAIR,
                variables: {
                    skip,
                    pairAddress,
                    timestamp: _24HoursAgo,
                },
            })
                .then(({ data: { swaps } }) => {
                if (!swaps || swaps.length === 0) {
                    finished = true;
                }
                else {
                    skip += swaps.length;
                    results = results.concat(swaps.map((swap) => (Object.assign(Object.assign({}, swap), { amountAIn: sorted ? swap.amount0In : swap.amount1In, amountAOut: sorted ? swap.amount0Out : swap.amount1Out, amountBIn: sorted ? swap.amount1In : swap.amount0In, amountBOut: sorted ? swap.amount1Out : swap.amount0Out }))));
                }
            });
        }
        return results;
    });
}
exports.getSwaps = getSwaps;
