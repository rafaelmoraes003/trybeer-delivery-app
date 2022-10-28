const userService = require('../services/user');

const userController = async (req, res) => {
  const user = await userService.user();
  res.status(200).json(user);
};

module.exports = {
  userController,
};