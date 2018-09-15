const User = `
  type User {
    _id: String!
    money: Int
    lastDaily: Int
    personalText: String
    blacklisted: Boolean
    favColor: String
    lastRep: Int
    rep: Int
  }
`

module.exports = User;