const {
  DISPLAY_NAME_MIN_LENGTH,
  EMAIL_REGEX,
  INVALID_EMAIL,
  PASSWORD_MIN_LENGTH } = require('../utils/constants');

const validateFields = (req, _res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) next(DISPLAY_NAME_MIN_LENGTH);
  if (!EMAIL_REGEX.test(email)) next(INVALID_EMAIL);
  if (password.length < 6) next(PASSWORD_MIN_LENGTH);
  next();
};

module.exports = {
  validateFields,
};