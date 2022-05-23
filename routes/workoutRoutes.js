const express = require('express');
const workoutController = require('./../controllers/workoutController');

const router = express.Router();

router
  .route('/')
  .get(workoutController.getAllWorkout)
  .post(workoutController.createWorkout);

router
  .route('/:id')
  .get(workoutController.getWorkout)
  .patch(workoutController.updateWorkout)
  .delete(workoutController.deleteWorkout);

module.exports = router;
