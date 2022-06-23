const jwt = require('jsonwebtoken');
const { MALFORMED_TOKEN } = require('./constants');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateLoginToken = (email, password) =>
  jwt.sign({ email, password }, TOKEN_SECRET, jwtConfig);

const authenticateToken = (token) => {
  if (!token) {
    throw MALFORMED_TOKEN;
  }
  try {
    const validate = jwt.verify(token, TOKEN_SECRET);
    return validate;
  } catch (error) {
    console.log('erro no jwt no utils', error);
    throw MALFORMED_TOKEN;
  }
};

module.exports = {
  generateLoginToken,
  authenticateToken,
};
