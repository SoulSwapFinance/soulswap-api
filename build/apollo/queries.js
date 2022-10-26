"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAIR_FROM_NAME = exports.PAIR_FROM_TOKENS = exports.SWAPS_BY_PAIR = exports.PAIR_RESERVES_BY_TOKENS = exports.TOP_PAIRS = exports.PAIRS_VOLUME_QUERY = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
exports.PAIRS_VOLUME_QUERY = (0, graphql_tag_1.default) `
  query PairsVolume($limit: Int!, $pairIds: [ID!]!, $blockNumber: Int!) {
    pairVolumes: pairs(
      first: $limit
      where: { id_in: $pairIds }
      block: { number: $blockNumber }
    ) {
      id
      volumeToken0
      volumeToken1
    }
  }
`;
// gets the top 1K pairs by USD reserves
exports.TOP_PAIRS = (0, graphql_tag_1.default) `
  fragment TokenInfo on Token {
    id
    symbol
    name
  }

  query TopPairs($limit: Int!, $excludeTokenIds: [String!]!) {
    pairs(
      first: $limit
      orderBy: reserveUSD
      orderDirection: desc
      where: {
        token0_not_in: $excludeTokenIds
        token1_not_in: $excludeTokenIds
      }
    ) {
      id
      token0 {
        ...TokenInfo
      }
      token1 {
        ...TokenInfo
      }
      reserve0
      reserve1
      volumeToken0
      volumeToken1
    }
  }
`;
exports.PAIR_RESERVES_BY_TOKENS = (0, graphql_tag_1.default) `
  query PairReserves($token0: String!, $token1: String!) {
    pairs(where: { token0: $token0, token1: $token1 }) {
      reserve0
      reserve1
    }
  }
`;
exports.SWAPS_BY_PAIR = (0, graphql_tag_1.default) `
  query SwapsByPair($skip: Int!, $timestamp: BigInt!, $pairAddress: String!) {
    swaps(
      skip: $skip
      where: { timestamp_gte: $timestamp, pair: $pairAddress }
      orderBy: timestamp
      orderDirection: asc
    ) {
      id
      timestamp
      amount0In
      amount0Out
      amount1In
      amount1Out
    }
  }
`;
exports.PAIR_FROM_TOKENS = (0, graphql_tag_1.default) `
  query SwapsByTokens($token0: String!, $token1: String!) {
    pairs(where: { token0: $token0, token1: $token1 }) {
      id
    }
  }
`;
exports.PAIR_FROM_NAME = (0, graphql_tag_1.default) `
  query PairFromName($name: String!) {
    pairs(where: { name: $name }) {
      id
      timestamp
      reserve0
      reserve1
      token0 {
        id
      }
      token1 {
        id
      }
    }
  }
`;
