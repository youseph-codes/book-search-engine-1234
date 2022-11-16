const { gql } = require("apollo-server-express");
const typeDefs = gql`

type Query {
    me: User
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

`

module.exports = typeDefs;