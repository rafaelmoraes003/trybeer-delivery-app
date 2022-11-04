const jwt = require('jsonwebtoken');
const { CustomError } = require('../utils/CustomError');
const { jwtKey } = require('../utils/readTokenSecretKey');

const auth = (req, _res, next) => {
  const token = req.headers.authorization;
  
  if (!token) throw new CustomError('Token not found', 404);

  try {
    jwt.verify(token, jwtKey);
    next();
  } catch (err) {
    throw new CustomError(err.message, 401);
  }
};

module.exports = { auth };