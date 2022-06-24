const jwt = require('jsonwebtoken'); 

const { TOKEN_NOT_FOUND, INVALID_TOKEN } = require('../utils/constants');

const TOKEN_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    next(TOKEN_NOT_FOUND);
  }
  try {
    // descriptografa o token e valida se ele bate com a senha secreta
    // essa função por si se só já levanta um erro sozinha se der uma inconsistência entre o token e o segredo
    const decoded = jwt.verify(authorization, TOKEN_SECRET);
    const user = decoded.email;
    req.user = user;
    next();
  } catch (e) {
    next(INVALID_TOKEN);
  }
};

module.exports = {
  authMiddleware,
};
