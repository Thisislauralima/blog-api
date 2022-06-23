const FIELDS_MISSING = { code: 400, message: 'Some required fields are missing' };
const INVALID_FIELDS = { code: 400, message: 'Invalid fields' };
const MALFORMED_TOKEN = { status: 401, message: 'jwt malformed' };
const DISPLAY_NAME_MIN_LENGTH = { code: 400,
  message: '"displayName" length must be at least 8 characters long' };
const INVALID_EMAIL = { code: 400,
  message: '"email" must be a valid email' };
const PASSWORD_MIN_LENGTH = { code: 400,
  message: '"password" length must be at least 6 characters long' };
const USER_ALREADY_REGISTERED = { code: 409, message: 'User already registered' };

const EMAIL_REGEX = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

module.exports = {
  FIELDS_MISSING,
  INVALID_FIELDS,
  MALFORMED_TOKEN,
  DISPLAY_NAME_MIN_LENGTH,
  EMAIL_REGEX,
  INVALID_EMAIL,
  PASSWORD_MIN_LENGTH,
  USER_ALREADY_REGISTERED,
};