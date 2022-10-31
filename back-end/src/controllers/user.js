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
 
    await userService.create({ name, email, password, role });
    return res.status(201).json({ message: 'Created' });
};

module.exports = {
  getAll, create,
};