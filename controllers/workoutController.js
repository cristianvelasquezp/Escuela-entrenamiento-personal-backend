const Workout = require('./../models/workoutModel');

exports.getAllWorkout = async (req, res) => {
  try {
    const query = Workout.find();

    const workouts = await query;

    res.status(200).json({
      status: 'success',
      data: {
        workouts
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getWorkout = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        workout
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

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

exports.updateWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        workout
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteWorkout = async (req, res) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
