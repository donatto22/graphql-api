import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// server setup
const server = new ApolloServer({

})

const url = await startStandaloneServer(server, {
    lister: { port: 4000 }
})

console.log("Server ready at port 4000")