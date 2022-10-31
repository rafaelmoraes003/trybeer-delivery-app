require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const createToken = (userData) => {
  const jwtConfig = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ userData }, JWT_SECRET, jwtConfig);
  return token;
};

module.exports = { createToken };