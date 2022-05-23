import { ApolloServer } from 'apollo-server';
import { typeDefs } from './app/typeDefs';
import { resolvers } from './app/resolvers';
import mongoose from 'mongoose';
import { Book } from './app/Book';

async function startApolloServer(typeDefs, resolvers) {
  await mongoose.connect('mongodb://localhost:27017/blindtube');

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer(typeDefs, resolvers);
