const { NAME_NOT_FOUND } = require('../utils/constants');

const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name) next(NAME_NOT_FOUND);
  next();
};

module.exports = {
  validateName,
};