const errorMiddleware = (err, _req, res, _next) => {
  console.log(err.message);

  if (!err.statusCode) {
    return res.status(500).json({ error: 'Server Error' });
  }

  const { message, statusCode } = err;
  return res.status(statusCode).json({ error: message });
};

module.exports = { errorMiddleware };