const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { USER_ALREADY_REGISTERED } = require('../utils/constants');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const setUser = async (displayName, email, password, image) => {
  const searchUser = await User.findAll({
    where: { displayName, email },
  });
  
  if (!searchUser.length) {
    await User.create({ displayName, email, password, image });

    const token = jwt.sign({ displayName, email, image }, TOKEN_SECRET, jwtConfig);
    return token;
  }
  return USER_ALREADY_REGISTERED;
};

const getUsers = () => User.findAll({
  attributes: ['id', 'displayName', 'email', 'image'],
});

module.exports = {
  setUser,
  getUsers,
};
