const FIELDS_MISSING = { code: 400, message: 'Some required fields are missing' };
const INVALID_FIELDS = { code: 400, message: 'Invalid fields' };
const MALFORMED_TOKEN = { status: 401, message: 'jwt malformed' };

module.exports = {
  FIELDS_MISSING,
  INVALID_FIELDS,
  MALFORMED_TOKEN,
};