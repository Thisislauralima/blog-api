const { authMiddleware } = require('./authenticateMiddleware');
const { errorMiddleware } = require('./errorMiddleware');
const { validateLogin } = require('./loginMiddleware');
const { validateFields } = require('./userMiddleware');

module.exports = {
  authMiddleware,
  errorMiddleware,
  validateLogin,
  validateFields,
};
