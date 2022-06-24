const postService = require('../services/post.service');
const { CATEGORY_ID_NOT_FOUND } = require('../utils/constants');

const setPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  const { user } = req;
  const post = await postService.setPost(title, content, categoryIds, user);
  if (JSON.stringify(post) === JSON.stringify(CATEGORY_ID_NOT_FOUND)) {
    return next(CATEGORY_ID_NOT_FOUND);
  }
  return res.status(201).json(post);
};

module.exports = {
  setPost,
};
