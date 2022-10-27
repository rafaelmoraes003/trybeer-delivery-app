const loginService = require('../services/login');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { code } = await loginService.login({ email, password });
  res.status(code).end();
};

module.exports = {
  login,
};