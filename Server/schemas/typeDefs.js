const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    meetupCount: Int
    savedMeetups: [Meetups]
  }

  type Auth {
    token: String!
    user: User!
  }

  type Meetup {
    _id: ID!
    name: String!
    hairColor: Int
    height: Int
    physicalAttributes: Int
    conversation: Int
    laughs: Int 
    butterflies: Int
    eyeContact: Int
    smile: Int 
    generalVibe: String      
  }

  type Query {
    me:User
    meetups: [Meetup]!
    (thoughtId: ID!): Thought
  }

  type Mutation {
    
    login(email: String!, password: String!):Auth
    saveMeetup(name: String, hairColor: Int,height: Int, physicalAttributes: Int, conversation: Int, laughs: Int, butterflies: Int, eyeContact: Int, smile: Int, generalVibe: String ):User
    removeMeetup(meetupId: String!): User
    addUser(username: String!, email: String!, password: String!):Auth

  }
`;


module.exports = typeDefs;
