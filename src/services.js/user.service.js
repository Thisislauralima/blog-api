const { User } = require('../database/models');
const { USER_ALREADY_REGISTERED } = require('../utils/constants');
const { generateLoginToken } = require('../utils/loginJWT');

const setUser = async (displayName, email, password, image) => {
  const searchUser = await User.findAll({
    where: { displayName, email },
  });
  
  if (!searchUser.length) {
    await User.create({ displayName, email, password, image });
  
    const token = generateLoginToken(displayName, email, image);

    return token;
  }
  return USER_ALREADY_REGISTERED;
};

module.exports = {
  setUser,
};
