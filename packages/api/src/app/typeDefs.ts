import { gql } from 'apollo-server-express';
import { Book } from './Book';

export const typeDefs = gql`
  ${Book.types}
  
  type Query {
    ${Book.queries}
  }
`;
