const express = require('express');
const workoutController = require('./../controllers/workoutController');

const router = express.Router();

router
  .route('/')
  .get(workoutController.getAllWorkout)
  .post(workoutController.createWorkout);

module.exports = router;
