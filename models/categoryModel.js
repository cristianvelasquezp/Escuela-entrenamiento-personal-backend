const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category must have a name'],
    unique: true
  },
  thumbnail: {
    type: String
  },
  thumbnail2x: {
    type: String
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
