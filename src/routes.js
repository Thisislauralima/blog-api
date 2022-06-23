const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const blogController = require('./controllers/blog.controller');
const middlewares = require('./middlewares');

router.post('/login', middlewares.validateLogin, rescue(blogController.login));

module.exports = router;