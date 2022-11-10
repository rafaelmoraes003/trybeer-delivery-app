const { User } = require('../../database/models');
const { CustomError } = require('../CustomError');

const validateUser = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (user) {
    throw new CustomError('User already exists.', 409);
  }
};

const validateIfUserExists = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    throw new CustomError('User does not exists.', 409);
  }
};

module.exports = { validateUser, validateIfUserExists };