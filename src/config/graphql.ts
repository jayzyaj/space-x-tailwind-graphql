import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launchesPast: {
          keyArgs: [],
          merge(existing, incoming) {
            // Slicing is necessary because the existing data is
            // immutable, and frozen in development.
            const merged = existing ? existing.slice(0) : [];
            return [...merged, ...incoming];
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
