import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Ganti dengan URL endpoint GraphQL Anda
});

export default client;
