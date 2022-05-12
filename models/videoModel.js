const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A video must have a name']
  },
  hardness: {
    type: String,
    required: [true, 'A video must have a hardness']
  },
  date: {
    type: Date,
    default: Date.now()
  },
  thumbnail: {
    type: String
  },
  category: {
    type: String
  }
});

module.exports = videoSchema;
