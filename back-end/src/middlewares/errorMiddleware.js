const errorMiddleware = (err, _req, res, _next) => {
  if (!err.statusCode) {
    err.statusCode = 500;
  }

  const { message, statusCode } = err;
  return res.status(statusCode).json({ error: message });
};

module.exports = { errorMiddleware };