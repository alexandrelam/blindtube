import { gql } from 'apollo-server';

export const types = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
  }
`;
