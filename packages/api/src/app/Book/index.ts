import { queries } from './queries';
import { resolvers } from './resolvers';
import { types } from './types';
import { BookModel } from './schema';

export const Book = { BookModel, queries, resolvers, types };
