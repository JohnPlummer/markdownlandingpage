import { ApolloServer, gql } from "apollo-server-lambda";
import { updateUser } from "./mutations";

// This is where we define the shape of our API
const schema = gql`
  type Hello {
    world: String
  }

  type Query {
    hello: Hello
  }

  type User {
    userId: String
    createdAt: String
    lastSignedInAt: String
  }

  type Mutation {
    updateUser(userId: String): User
  }
`;

// This is where the shape maps to functions
const resolvers = {
  Query: {
    hello: () => ({
      world: "Hello world",
    }),
  },
  Mutation: {
    updateUser,
  },
};

const server = new ApolloServer({ typeDefs: schema, resolvers });

export const handler = server.createHandler({
  cors: {
    origin: "*", // Restrict this in the real world
    credentials: true,
  },
});
