const userService = require('../services.js/user.service');
const { USER_ALREADY_REGISTERED } = require('../utils/constants');

const setUser = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  const userCreation = await userService.setUser(displayName, email, password, image);
  
  if (JSON.stringify(userCreation) === JSON.stringify(USER_ALREADY_REGISTERED)) {
    return next(USER_ALREADY_REGISTERED);
  }
  return res.status(201).json({ token: userCreation });
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  console.log('requisição feita por', req.user);
  return res.status(200).json(users);
};

module.exports = {
  setUser,
  getUsers,
};
