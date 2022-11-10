const { Op } = require('sequelize');
const { User } = require('../database/models');
const { decryptPassword } = require('../utils/descryptPassword');
const { validateBody } = require('../utils/validations/validateBody');
const { validateUser, validateIfUserExists } = require('../utils/validations/validateUser');
const { userSchema } = require('../schemas/user');
const { createToken } = require('../utils/createToken');

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: 'password' },
    where: {
      role: {
        [Op.not]: 'administrator',
      },
    },
  });
  return { code: 200, data: users };
};

const getSellers = async () => {
  const sellers = await User
  .findAll({ where: { role: 'seller' }, attributes: { exclude: 'password' } });
  return { code: 200, data: sellers };
};

const create = async (userData) => {
  validateBody(userData, userSchema);
  await validateUser(userData.email);
  const cryptedPassword = decryptPassword(userData.password);
  const newUser = await User.create({ ...userData, password: cryptedPassword });
  const token = createToken(newUser);
  return { code: 201, data: { ...newUser.dataValues, token } };
};

const removeUser = async (id) => {
  await validateIfUserExists(id);
  await User.destroy({ where: { id } });
  return { code: 204 };
};

module.exports = { getAll, create, getSellers, removeUser };