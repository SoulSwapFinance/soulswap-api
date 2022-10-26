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
exports.getBlockFromTimestamp = exports.GET_BLOCK = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const client_1 = require("./client");
exports.GET_BLOCK = (0, graphql_tag_1.default) `
  query blocks($timestamp: BigInt!) {
    blocks(first: 1, orderBy: timestamp, orderDirection: asc, where: { timestamp_gt: $timestamp }) {
      id
      number
      timestamp
    }
  }
`;
/**
 * Returns the block corresponding to a given epoch timestamp (seconds)
 * @param timestamp epoch timestamp in seconds
 */
function getBlockFromTimestamp(timestamp) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client_1.blockClient.query({
            query: exports.GET_BLOCK,
            variables: {
                timestamp: '' + timestamp
            },
            fetchPolicy: 'cache-first'
        });
        return (_c = (_b = (_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.blocks) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.number;
    });
}
exports.getBlockFromTimestamp = getBlockFromTimestamp;
