const { User } = require('../database/models');
const { CustomError } = require('../utils/CustomError');
const { validateBody } = require('../utils/validateBody');
const { decryptPassword } = require('../utils/descryptPassword');
const { loginSchema } = require('../schemas/login');
const { createToken } = require('../utils/createToken');

const login = async (userData) => {
  validateBody(userData, loginSchema);

  const { email, password } = userData;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new CustomError('User not found.', 404);
  }

  const decryptedPassword = decryptPassword(password);
  if (user.password !== decryptedPassword) {
    throw new CustomError('User not found.', 404);
  }

  const token = createToken(user);
  return { code: 200, data: { name: user.name, role: user.role, email: user.email, token } };
};  

module.exports = { login };