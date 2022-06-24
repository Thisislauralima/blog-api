const { Category } = require('../database/models');

const setCategory = async (category) => {
  const newCategory = await Category.create({ name: category });
  const categoryObj = {
    id: newCategory.dataValues.id,
    name: newCategory.dataValues.name,
  };
  
  return categoryObj;
};

const getCategories = () => Category.findAll();

module.exports = {
  setCategory,
  getCategories,
};