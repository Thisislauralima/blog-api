const { authMiddleware } = require('./authenticateMiddleware');
const { errorMiddleware } = require('./errorMiddleware');
const { validateLogin } = require('./loginMiddleware');

module.exports = {
  authMiddleware,
  errorMiddleware,
  validateLogin,
};
