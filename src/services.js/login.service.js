const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const { INVALID_FIELDS } = require('../utils/constants');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const userLogin = async (email, password) => {
  const user = await User.findAll({ where: { email, password } });
  if (!user.length) {
    return INVALID_FIELDS;
  }
  const token = jwt.sign({ email }, TOKEN_SECRET, jwtConfig);
  return token;
};

module.exports = {
  userLogin,
};