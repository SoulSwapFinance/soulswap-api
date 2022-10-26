"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const apollo_client_1 = require("apollo-client");
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const apollo_link_http_1 = require("apollo-link-http");
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.client = new apollo_client_1.ApolloClient({
    link: new apollo_link_http_1.HttpLink({
        fetch: node_fetch_1.default,
        uri: "https://api.thegraph.com/subgraphs/name/soulswapfinance/avalanche-exchange",
    }),
    cache: new apollo_cache_inmemory_1.InMemoryCache(),
});
