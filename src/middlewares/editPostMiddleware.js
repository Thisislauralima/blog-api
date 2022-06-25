const { FIELDS_MISSING } = require('../utils/constants');

const validateEditedPost = (req, _res, next) => {
  const { title, content } = req.body;
  if (!title || !content) next(FIELDS_MISSING);
  next(); 
};

module.exports = { validateEditedPost };