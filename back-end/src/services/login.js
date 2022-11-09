const { User } = require('../database/models');
const { CustomError } = require('../utils/CustomError');
const { validateBody } = require('../utils/validations/validateBody');
const decryptPassword = require('../utils/descryptPassword');
const { loginSchema } = require('../schemas/login');
const { createToken } = require('../utils/createToken');

const login = async (userData) => {
  validateBody(userData, loginSchema);

  const { email, password } = userData;
  const user = await User.findOne({ where: { email } });

  if (!user) {
    throw new CustomError('User not found', 404);
  }
  const decryptedPassword = decryptPassword.decryptPassword(password);
  if (user.password !== decryptedPassword) {
    throw new CustomError('User not found', 404);
  }

  const token = createToken(user);
  const { id, name, email: userEmail, role } = user;
  return { code: 200, data: { id, name, role, email: userEmail, token } };
};  

module.exports = { login };