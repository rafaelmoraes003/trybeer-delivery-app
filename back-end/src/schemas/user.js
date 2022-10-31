const joi = require('joi');

const userSchema = joi.object({
  name: joi.string().min(12).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  role: joi.string(),
});

module.exports = { userSchema };