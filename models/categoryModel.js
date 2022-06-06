const mongoose = require('mongoose');
const slugify = require('slugify');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Category must have a name'],
    unique: true
  },
  slug: String,
  thumbnail: {
    type: String
  },
  thumbnail2x: {
    type: String
  },
  icon: {
    type: String
  },
  Position: {
    type: Number
  },
  inHome: {
    type: Boolean,
    default: false
  },
  createAt: {
    type: Date,
    default: Date.now(),
    select: false
  },
  videoUrl: {
    type: String
  }
});

categorySchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
