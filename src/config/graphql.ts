import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launchesPast: {
          keyArgs: [],
          merge(existing, incoming, { args: { offset = 0 }}: any) {
            // Slicing is necessary because the existing data is
            // immutable, and frozen in development.
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[offset + i] = incoming[i];
            }
            return merged;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache,
});

export { client };
