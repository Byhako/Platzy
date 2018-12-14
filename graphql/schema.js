const { gql } = require('apollo-server-express')

// creamos los esquemas
const schema = gql`
  type Curso {
    id: ID!
    titulo: String!
  }

  type Query {
    cursos: [Curso]
  }
`

module.exports = schema
