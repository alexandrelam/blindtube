import { queries, mutations, resolvers } from './resolvers';
import { types } from './types';
import { BookModel } from './schema';

export const Book = { BookModel, queries, mutations, resolvers, types };
