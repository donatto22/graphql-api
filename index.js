import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// types
import { typeDefs } from './schema.js'

// resolver
import { resolvers } from './resolvers.js'

// server setup
const server = new ApolloServer({ typeDefs, resolvers })

// eslint-disable-next-line no-unused-vars
const { url } = await startStandaloneServer(server, {
    lister: { port: 4000 }
})

console.log("Server ready at port 4000")
