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
  },
};
