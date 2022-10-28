const userService = require('../services/user');

const user = async (req, res) => {
  const user = await userService.user();
  res.status(200).json(user);
};

module.exports = {
  user,
};