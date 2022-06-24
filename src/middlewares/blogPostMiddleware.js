const { FIELDS_MISSING } = require('../utils/constants');

const validateBlogPost = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) next(FIELDS_MISSING);
  next();
};

module.exports = {
  validateBlogPost,
};
