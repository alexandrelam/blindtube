import { BookModel } from './schema';

export const resolvers = {
  queries: {
    books: async () => await BookModel.find(),
    book: async (_parent, args) => await BookModel.findById(args.id),
  },
};
