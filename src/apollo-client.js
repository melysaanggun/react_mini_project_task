import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://osf-database-2.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret" : "VhfE7eEc1rDELLbfNGaxtZSWv8OQRE2ZxZWvCEoZZiR8w2TdpzYLvbelqXaLY3TD"
    }
  });

  export default client;