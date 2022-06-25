const postService = require('../services/post.service');
const { CATEGORY_ID_NOT_FOUND, POST_NOT_FOUND, UNAUTHORIZED_USER } = require('../utils/constants');

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

const editPost = async (req, res, next) => {
  const { title, content } = req.body;
  const { id } = req.params;
  const { user } = req;
  const editedPost = await postService.editPost(user, title, content, id);
  if (JSON.stringify(editedPost) === JSON.stringify(UNAUTHORIZED_USER)) {
    return next(UNAUTHORIZED_USER);
  }
  return res.status(200).json(editedPost);
};

const deletePost = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req;
  const deletedPost = await postService.deletePost(id, user);
  if (JSON.stringify(deletedPost) === JSON.stringify(UNAUTHORIZED_USER)) {
    return next(UNAUTHORIZED_USER);
  }
  if (JSON.stringify(deletedPost) === JSON.stringify(POST_NOT_FOUND)) return next(POST_NOT_FOUND);
  return res.status(204).end();
};

const getPostByTerm = async (req, res, _next) => {
  const { q } = req.query;
  const searchedPost = await postService.getPostByTerm(q);
  res.status(200).json(searchedPost);
};

module.exports = {
  setPost,
  getPosts,
  getPostById,
  editPost,
  deletePost,
  getPostByTerm,
};
