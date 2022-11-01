require('dotenv').config();
const jwt = require('jsonwebtoken');
const { jwtKey } = require('./readTokenSecretKey');
// const { JWT_SECRET } = process.env;

const createToken = (userData) => {
  // const jwtConfig = {
  //   expiresIn: '3d',
  //   algorithm: 'HS256',
  // };
  const token = jwt.sign({ userData }, jwtKey);
  return token;
};

module.exports = { createToken };