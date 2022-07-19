const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const meetupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hairColor: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
  },
  physicalAttributes: {
    type: Number,
  },
  conversation: {
    type: Number,
  },
  laughs: {
    type: Number,
  },
  butterflies: {
    type: Number,
  },
  eyeContact: {
    type: Number,
  },
  generalVibe: {
    type: String
  }
});

module.exports = meetupSchema;
