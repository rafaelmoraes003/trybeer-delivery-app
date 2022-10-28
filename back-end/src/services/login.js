const { User } = require('../database/models');
const { decryptPassword } = require('../utils/descryptPassword');

const login = async (userData) => {
  const { email, password } = userData;
  const user = await User.findOne({ where: { email } });

  if (!user) return { code: 404 };

  const decryptedPassword = decryptPassword(password);
  if (user.password !== decryptedPassword) return { code: 404 };

  return { code: 200 };
};  

module.exports = { login };