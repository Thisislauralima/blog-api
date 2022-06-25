const { BlogPost, PostCategory, Category, User } = require('../database/models');
const { CATEGORY_ID_NOT_FOUND, POST_NOT_FOUND, UNAUTHORIZED_USER } = require('../utils/constants');

const checkIdsOnDb = async (categoryIds) => {
  const isIdRegistered = Promise.all(categoryIds.map((el) => 
    Category.findAll({
      where: { id: el },
    })));
  return isIdRegistered;
};

const verifyIdLength = async (categoryIds) => {
  const isIdRegistered = await checkIdsOnDb(categoryIds);
  return isIdRegistered.map((el) => el.length);
};

const createdPost = async (title, content, categoryIds, user) => {
  const post = await BlogPost.create({
    title,
    content,
    userId: user.userId,
  });

  Promise.all(categoryIds.map((el) =>
    PostCategory.create({
      categoryId: el,
      postId: post.dataValues.id,
    })));

  return {
    id: post.dataValues.id,
    title,
    content,
    userId: user.userId,
    updated: post.dataValues.updated,
    published: post.dataValues.updated,
  };
};

const setPost = async (title, content, categoryIds, user) => {
  const isIdRegisteredTest = await verifyIdLength(categoryIds);
  if (isIdRegisteredTest.includes(0)) return CATEGORY_ID_NOT_FOUND;

  return createdPost(title, content, categoryIds, user);
};

const getPosts = () => BlogPost.findAll({
  include: [
    {
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    },
    {
      model: Category,
      as: 'categories',
      through: {
        attributes: [],
      },
    },
  ],
});

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      }, { 
      model: Category,
      as: 'categories',
      through: { attributes: [] },
      },
    ],
  });
  if (post === null) return POST_NOT_FOUND;
  return post;
};

const editPost = async (userId, title, content, postId) => {
  const post = await BlogPost.findByPk(postId);
  if (post.dataValues.userId !== userId.userId) {
    return UNAUTHORIZED_USER;
  }
  await BlogPost.update({ title, content }, { where: { userId: userId.userId } });
  const editedPost = await getPostById(postId);
  return editedPost;
};

module.exports = {
  setPost,
  getPosts,
  getPostById,
  editPost,
};