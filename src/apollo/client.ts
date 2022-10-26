import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export const client = new ApolloClient({
  link: new HttpLink({
    fetch: fetch as any,
    // uri: "https://avax-subgraph.hyperjump.app",
    // uri: "https://api.thegraph.com/subgraphs/name/soulswapfinance/fantom-soulswap",
    // uri: 'https://api.thegraph.com/subgraphs/name/soulswapfinance/soulswap-exchange'
    // uri: 'https://api.thegraph.com/subgraphs/name/soulswapfinance/soulswap-exchange-avalanche'
    uri: 'https://api.thegraph.com/subgraphs/name/soulswapfinance/avalanche-exchange'
  }),
  cache: new InMemoryCache()
})
