const { User } = require('../database/models');
const { generateLoginToken } = require('../utils/loginJWT');
const { INVALID_FIELDS } = require('../utils/constants');

const userLogin = async (email, password) => {
  const user = await User.findAll({ where: { email, password } });
  if (!user.length) {
    return INVALID_FIELDS;
  }
  const token = generateLoginToken(email, password);
  return token;
};

module.exports = {
  userLogin,
};