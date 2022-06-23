const { generateLoginToken } = require('../utils/loginJWT');
const { MALFORMED_TOKEN } = require('../utils/constants');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    const userToken = generateLoginToken(token);
    if (!userToken) {
        next(MALFORMED_TOKEN);
    }
    // res.locals.user vai ser o que foi postado (um objeto)
    console.log('res.locals no middleware de auth', res.locals);
    // res.locals.user = userToken;
    next();
};

module.exports = { authMiddleware };