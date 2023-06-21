import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink } from '@apollo/client/link/core';
import { onError } from '@apollo/client/link/error';
import { Apollo } from 'apollo-angular';

const uri = 'YOUR_GRAPHQL_API_ENDPOINT';

export function createApollo(httpLink: HttpLink): ApolloClient<unknown> {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    // Handle errors
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.error(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }

    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
    }
  });

  const httpLinkHandler = httpLink.create({ uri });

  const link = ApolloLink.from([errorLink, httpLinkHandler]);

  return new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });
}

export const apolloProvider = {
  provide: Apollo,
  useFactory: createApollo,
  deps: [HttpLink],
};
