const Workout = require('./../models/workoutModel');

exports.getAllWorkout = (req, res) => {};

exports.createWorkout = async (req, res) => {
  try {
    console.log(req.body);
    const newWorkout = await Workout.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        workout: newWorkout
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
