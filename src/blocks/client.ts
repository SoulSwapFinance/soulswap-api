import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch: fetch as any,
    uri: 'https://api.thegraph.com/subgraphs/name/matthewlilley/avalanche-blocks'
  }),
  cache: new InMemoryCache()
})