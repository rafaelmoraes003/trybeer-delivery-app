const joi = require('joi');

const saleProductSchema = joi.object({
  saleId: joi.number().positive().required(),
  productId: joi.number().positive().required(),
  quantity: joi.number().positive().required(),
});

module.exports = { saleProductSchema };