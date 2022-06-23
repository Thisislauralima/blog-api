const blogService = require('../services.js/blog.service');
const { INVALID_FIELDS } = require('../utils/constants');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const loginReturn = await blogService.userLogin(email, password);
  if (JSON.stringify(loginReturn) === JSON.stringify(INVALID_FIELDS)) {
    return next(INVALID_FIELDS);
  }
  return res.status(200).json({ token: loginReturn });
};

module.exports = {
  login,
};
