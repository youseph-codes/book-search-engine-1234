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

type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

input InputBook {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
}

type Mutation {
    login(email: String, password: String): Auth
    addUser(username: String!, email: password: String): Auth
    saveBook(newBook: InputBook): User
    removeBook(bookId: ID): User
}`;

module.exports = typeDefs;