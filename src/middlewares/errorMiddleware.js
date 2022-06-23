const errorMiddleware = (error, _req, res, _next) => {
  console.log('middleware de erro, error.message -> ', error.message);
  console.log('middleware de erro, error.code -> ', error.code);
  console.log('middleware de erro, error.status -> ', error.status);
  if (error.code) {
    return res.status(error.code
      || 500).json({ message: error.message });
  }
  return res.status(error.status
    || 500).json({ message: error.message });
};
module.exports = { errorMiddleware };