'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

export default function Providers(props: React.PropsWithChildren) {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
