import { ApolloServer, gql } from "apollo-server-lambda";

// This is where we define the shape of our API
const schema = gql`
  type Hello {
    world: String
  }

  type Query {
    hello: Hello
  }
`;

// This is where the shape maps to functions
const resolvers = {
  Query: {
    hello: () => ({
      world: "Hello world",
    }),
  },
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

export const handler = server.createHandler({
  cors: {
    origin: "*", // Restrict this in the real world
    credentials: true,
  },
});
