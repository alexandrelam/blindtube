import { BookModel } from './schema';

export const queries = `
    books: [Book]
    book(id: ID!): Book
`;

export const mutations = `
    createBook(title: String!, author: String!): Book
`;

export const resolvers = {
  queries: {
    books: async () => await BookModel.find(),
    book: async (_parent, args) => {
      const book = await BookModel.findById(args.id);
      if (!book) throw new Error('Book not found');
      return book;
    },
  },
  mutations: {
    createBook: async (_parent, args) => {
      const book = new BookModel(args);
      return await book.save();
    },
  },
};
