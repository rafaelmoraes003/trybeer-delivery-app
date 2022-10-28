const { User } = require('../database/models');

const userService = async () => {
  const user = await User.findAll();
  return user;
};

module.exports = { userService };