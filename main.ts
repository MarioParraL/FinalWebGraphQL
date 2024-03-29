import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { load } from "https://deno.land/std@0.204.0/dotenv/mod.ts";
import { typeDefs } from "./gql/schema.ts";
import { Mutation } from "./resolvers/mutation.ts";
import { Query } from "./resolvers/query.ts";

const env = await load();
const MONGO_URL = env.MONGO_URL || Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  console.log("No mongo URL found");
  Deno.exit(-1);
}

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,  
  },
});

const { url } = await startStandaloneServer(server);
console.info(`🚀 Server ready at ${url}`);