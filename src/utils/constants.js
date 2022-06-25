const FIELDS_MISSING = { code: 400, message: 'Some required fields are missing' };
const INVALID_FIELDS = { code: 400, message: 'Invalid fields' };
const TOKEN_NOT_FOUND = { status: 401, message: 'Token not found' };
const INVALID_TOKEN = { status: 401, message: 'Expired or invalid token' };
const DISPLAY_NAME_MIN_LENGTH = { code: 400,
  message: '"displayName" length must be at least 8 characters long' };
const INVALID_EMAIL = { code: 400,
  message: '"email" must be a valid email' };
const PASSWORD_MIN_LENGTH = { code: 400,
  message: '"password" length must be at least 6 characters long' };
const USER_ALREADY_REGISTERED = { code: 409, message: 'User already registered' };
const USER_NOT_FOUND = { code: 404, message: 'User does not exist' };
const NAME_NOT_FOUND = { code: 400, message: '"name" is required' };
const CATEGORY_ID_NOT_FOUND = { code: 400, message: '"categoryIds" not found' };
const POST_NOT_FOUND = { code: 404, message: 'Post does not exist' };
const UNAUTHORIZED_USER = { code: 401, message: 'Unauthorized user' };

const EMAIL_REGEX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

module.exports = {
  FIELDS_MISSING,
  INVALID_FIELDS,
  TOKEN_NOT_FOUND,
  DISPLAY_NAME_MIN_LENGTH,
  EMAIL_REGEX,
  INVALID_EMAIL,
  PASSWORD_MIN_LENGTH,
  USER_ALREADY_REGISTERED,
  INVALID_TOKEN,
  USER_NOT_FOUND,
  NAME_NOT_FOUND,
  CATEGORY_ID_NOT_FOUND,
  POST_NOT_FOUND,
  UNAUTHORIZED_USER,
};