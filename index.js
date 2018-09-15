const {Guild, User} = require('schemas/index.js')

const typeDefs = `
  type Query {
    user(_id: String): User
    Guild(_id: String): Guild
  }
`