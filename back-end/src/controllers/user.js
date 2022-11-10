const userService = require('../services/user');

const getAll = async (_req, res, next) => {
  try {
    const { code, data } = await userService.getAll();
    res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

const getSellers = async (_req, res, next) => {
  try {
    const { code, data } = await userService.getSellers();
    res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  try {
    const { code, data } = await userService.create({ name, email, password, role });
    return res.status(code).json(data);
  } catch (err) {
    next(err);
  }
};

const removeUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { code } = await userService.removeUser(id);
    return res.status(code).end();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll, create, getSellers, removeUser,
};