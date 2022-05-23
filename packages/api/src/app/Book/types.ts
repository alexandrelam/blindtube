import { gql } from 'apollo-server';

export const types = gql`
  type Book {
    title: String
    author: String
  }
`;
