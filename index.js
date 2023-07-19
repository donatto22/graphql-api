import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// types
import { typeDefs } from './schema'

// resolver
import { resolvers } from './resolvers'

// server setup
const server = new ApolloServer({ typeDefs, resolvers })

const url = await startStandaloneServer(server, {
    lister: { port: 4000 }
})

console.log("Server ready at port 4000")
