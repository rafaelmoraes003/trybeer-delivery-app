const loginService = require('../services/login');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { code, data } = await loginService.login({ email, password });
    res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { login };