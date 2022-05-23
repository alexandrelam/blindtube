import { Book } from './Book';

export const resolvers = {
  Query: {
    ...Book.resolvers.queries,
  },
};
