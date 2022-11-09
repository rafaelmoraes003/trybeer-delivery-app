require('dotenv').config();
const jwt = require('jsonwebtoken');
const { CustomError } = require('./CustomError');
const { jwtKey } = require('./readTokenSecretKey');

const authToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) throw new CustomError('Token not found', 401);

  try {
    const { userData } = jwt.verify(token, jwtKey);
    if (userData.role !== 'administrator') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    next();
  } catch (err) {
    throw new CustomError('Expired or invalid token', 401);
  }
};

module.exports = { authToken };