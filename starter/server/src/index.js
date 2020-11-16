require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const app = express();
const path = '/api/graphql';
const port = process.env.PORT || 8383;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => ({
    req,
    res,
  }),
});

server.applyMiddleware({ app, path });

app.listen(
  {
    port,
  },
  () => console.log(`Server started on http://localhost:${port}`)
);
