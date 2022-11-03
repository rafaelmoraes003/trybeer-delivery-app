const { User } = require('../database/models');
const { decryptPassword } = require('../utils/descryptPassword');
const { validateBody } = require('../utils/validateBody');
const { validateUser } = require('../utils/validateUser');
const { userSchema } = require('../schemas/user');

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return { code: 200, data: users };
};

const getSellers = async () => {
  const sellers = await User
  .findAll({ where: { role: 'seller' }, attributes: { exclude: 'password' } });
  return { code: 200, data: sellers };
};

// const getById = async () => {
//   const user = await User.findOne()
// }

const create = async (userData) => {
  validateBody(userData, userSchema);
  await validateUser(userData.email);
  const cryptedPassword = decryptPassword(userData.password);
  const newUser = await User.create({ ...userData, password: cryptedPassword });
  return { code: 201, data: newUser };
};

module.exports = { getAll, create, getSellers };