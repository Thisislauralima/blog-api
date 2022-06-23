const { FIELDS_MISSING } = require('../utils/constants');

const validateLogin = (req, _res, next) => {
  const { email, password } = req.body;
  if (!email || !password) next(FIELDS_MISSING);
  next();
};

module.exports = {
  validateLogin,
};