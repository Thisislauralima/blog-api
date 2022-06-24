const { authMiddleware } = require('./authenticateMiddleware');
const { errorMiddleware } = require('./errorMiddleware');
const { validateLogin } = require('./loginMiddleware');
const { validateFields } = require('./userMiddleware');
const { validateName } = require('./setCategoryMiddleware');
const { validateBlogPost } = require('./blogPostMiddleware');

module.exports = {
  authMiddleware,
  errorMiddleware,
  validateLogin,
  validateFields,
  validateName,
  validateBlogPost,
};
