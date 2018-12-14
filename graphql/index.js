const express = require('express')
const { ApolloServer } = require('apollo-server-express')

// construye un schema, usando GraphQL
const typeDefs = require('./schema')

// provee resolvers para nuestro esquema
const resolvers = {
  Query: {
    cursos: () => []
  }
}

// inicializar apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

// inicializar express
const app = express()

// aplicar middleware de apollo en express
server.applyMiddleware({
  app
})

// iniciar el servidor
app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)
