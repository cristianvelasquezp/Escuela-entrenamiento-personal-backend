const Category = require('./../models/categoryModel');

exports.getAllCategory = async (req, res) => {
  try {
    const query = Category.find();

    const categories = await query;

    res.status(200).json({
      status: 'success',
      data: {
        categories
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
    const newCategory = await Category.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        category: newCategory
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(201).json({
      status: 'success',
      data: {
        category: category
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getCategoriesHome = async (req, res) => {
  try {
    const query = Category.find({ inHome: true });

    const categories = await query;

    res.status(200).json({
      status: 'success',
      data: {
        categories
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
