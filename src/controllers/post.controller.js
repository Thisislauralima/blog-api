const postService = require('../services/post.service');
const { CATEGORY_ID_NOT_FOUND, POST_NOT_FOUND } = require('../utils/constants');

const setPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;
  const post = await postService.setPost(title, content, categoryIds, user);
  if (JSON.stringify(post) === JSON.stringify(CATEGORY_ID_NOT_FOUND)) {
    return next(CATEGORY_ID_NOT_FOUND);
  }
  return res.status(201).json(post);
};

const getPosts = async (_req, res, _next) => {
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res, next) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  if (JSON.stringify(post) === JSON.stringify(POST_NOT_FOUND)) {
    return next(POST_NOT_FOUND);
  }
  return res.status(200).json(post);
};

module.exports = {
  setPost,
  getPosts,
  getPostById,
};
