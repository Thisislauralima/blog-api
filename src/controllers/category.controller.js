const categoryService = require('../services/category.service');

const setCategory = async (req, res, _next) => {
  const { name } = req.body;
  const category = await categoryService.setCategory(name);
  return res.status(201).json(category);
};

const getCategories = async (_req, res, _next) => {
  const categories = await categoryService.getCategories();
  return res.status(200).json(categories);
};

module.exports = {
  setCategory,
  getCategories,
};