import { ApolloServer } from 'apollo-server';
import { typeDefs } from './app/typeDefs';
import { resolvers } from './app/resolvers';

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);
}

startApolloServer(typeDefs, resolvers);
