import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://graph.chipsfryer.world/subgraphs/name/blockartist/bsc-blocks'
  }),
  cache: new InMemoryCache()
})
