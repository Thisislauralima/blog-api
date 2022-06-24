const loginService = require('../services/login.service');
const { INVALID_FIELDS } = require('../utils/constants');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const loginReturn = await loginService.userLogin(email, password);
  if (JSON.stringify(loginReturn) === JSON.stringify(INVALID_FIELDS)) {
    return next(INVALID_FIELDS);
  }
  return res.status(200).json({ token: loginReturn });
};

module.exports = {
  login,
};
