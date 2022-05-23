const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A video must have a name'],
    unique: true
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
  thumbnail2x: {
    type: String
  },
  category: {
    type: String
  }
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
