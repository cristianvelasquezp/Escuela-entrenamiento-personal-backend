const Category = require('./../models/categoryModel');

exports.getAllCategory = async (req, res) => {
  try {
    const query = Category.find();

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

exports.createCategory = async (req, res) => {
  try {
    console.log(req.body);
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        workout: newCategory
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};
