import { InMemoryCache, makeVar } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    SessionResponse: {
      keyFields: ["uuid"]
    },
    Homework: {
      keyFields: ["uuid"]
    }
  }
});

export const isLoggedInVar = makeVar(false);