const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const loginController = require('./controllers/login.controller');
const userController = require('./controllers/user.controller');
const categoryController = require('./controllers/category.controller');
const postController = require('./controllers/post.controller');

const middlewares = require('./middlewares');

router.post('/login', middlewares.validateLogin, rescue(loginController.login));

router.post('/user', middlewares.validateFields, rescue(userController.setUser));

router.get('/user', middlewares.authMiddleware, rescue(userController.getUsers));

router.get('/user/:id', middlewares.authMiddleware, rescue(userController.getUserById));

router.delete('/user/:me', middlewares.authMiddleware, rescue(userController.deleteUser));

router.post('/categories', middlewares.authMiddleware,
  middlewares.validateName, rescue(categoryController.setCategory));

router.get('/categories', middlewares.authMiddleware, rescue(categoryController.getCategories));

router.post('/post', middlewares.authMiddleware,
middlewares.validateBlogPost, rescue(postController.setPost));

router.get('/post', middlewares.authMiddleware, rescue(postController.getPosts));

router.get('/post/:id', middlewares.authMiddleware, rescue(postController.getPostById));

router.put('/post/:id', middlewares.authMiddleware, middlewares.validateEditedPost,
rescue(postController.editPost));

router.delete('/post/:id', middlewares.authMiddleware, rescue(postController.deletePost));

module.exports = router;
