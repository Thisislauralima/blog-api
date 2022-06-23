const { authenticateMiddleware } = require('./authenticateMiddleware');
const { errorMiddleware } = require('./errorMiddleware');
const { validateLogin } = require('./loginMiddleware');

module.exports = {
  authenticateMiddleware,
  errorMiddleware,
  validateLogin,
};
