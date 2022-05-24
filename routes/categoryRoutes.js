const express = require('express');
const categoryController = require('./../controllers/categoryController');

const router = express.Router();

router
  .route('/')
  .get(categoryController.getAllCategory)
  .post(categoryController.createCategory);

router.route('/:id').patch(categoryController.updateCategory);

module.exports = router;
