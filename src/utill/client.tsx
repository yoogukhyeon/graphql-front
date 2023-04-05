import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'https://graphql-express-server.vercel.app/graphql',
  cache: new InMemoryCache(),
});

export default client;
