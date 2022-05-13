const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category must have a name'],
    unique: true
  },
  thumbnail: {
    type: String
  }
});

module.exports = categorySchema;
