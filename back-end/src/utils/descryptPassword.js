const md5 = require('md5');

const decryptPassword = (password) => {
  const hash = md5(password);
  return hash;
};

module.exports = { decryptPassword };