const userService = require('../services.js/user.service');
const { USER_ALREADY_REGISTERED, USER_NOT_FOUND } = require('../utils/constants');

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

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  
  console.log('requisição feita por', req.user);

  if (JSON.stringify(user) === JSON.stringify(USER_NOT_FOUND)) {
    return next(USER_NOT_FOUND);
  }

  return res.status(200).json(user[0]);
};

const setCategory = async (req, res, _next) => {
  const { name } = req.body;
  const category = await userService.setCategory(name);
  return res.status(201).json(category);
};

module.exports = {
  setUser,
  getUsers,
  getUserById,
  setCategory,
};
