const md5 = require('md5');
const { User } = require('../database/models');
const CustomError = require('../middlewares/CustomError');

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const create = async ({ name, email, password, role }) => {
  const checkEmail = await User.findOne({ where: { email } });
  const checkName = await User.findOne({ where: { name } });

  if (checkEmail || checkName) throw new CustomError(409, 'User already registered');
  const cryptPassword = md5(password);

  const response = await User.create(({ name, email, password: cryptPassword, role }));
  return response;
};

module.exports = { getAll, create };