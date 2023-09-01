const { gql } = require("apollo-server");

const typeDefs = gql`
  type Client {
    id: ID!
    name: String!
    email: String!
    phone: String!
  }

  type Project {
    id: ID!
    client: Client!
    name: String!
    description: String!
    completed: Boolean!
  }

  type Query {
    clients: [Client!]!
    client(id: ID!): Client!
    projects: [Project!]!
    project(id: ID!): Project!
  }
`;

module.exports = typeDefs;
