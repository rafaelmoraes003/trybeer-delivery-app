const userService = require('../services/user');

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
  }
};

const create = async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(req.body);
  // try {
    await userService.create(name, email, password, role);
    return res.status(201).json({ message: 'Created' });
  // } catch (err) {
    // console.log(err);
    // throw new Error();
  // }
};

module.exports = {
  getAll, create,
};