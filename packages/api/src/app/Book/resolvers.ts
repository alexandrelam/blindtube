import { ValidationError } from 'apollo-server';

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
  {
    title: 'The Book of Trees',
    author: 'Umberto Eco',
  },
];

export const resolvers = {
  queries: {
    books: () => books,
    book: (_parent, args) => {
      if (args.index < 0 || args.index >= books.length)
        throw new ValidationError('Book does not exist');

      return books[args.index];
    },
  },
};
