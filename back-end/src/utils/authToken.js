require('dotenv').config();
const jwt = require('jsonwebtoken');
const CustomError = require('./CustomError');

const { JWT_SECRET } = process.env;

const authToken = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) throw new CustomError('Token not found', 401);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.email = decoded;
    // console.log(decoded);
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = { authToken };