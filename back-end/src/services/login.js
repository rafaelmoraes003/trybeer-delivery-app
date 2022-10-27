const { User } = require('../database/models');

const login = async (userData) => {
  const { email, password } = userData;
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { code: 404 };
  return { code: 200 };
};  

module.exports = { login };