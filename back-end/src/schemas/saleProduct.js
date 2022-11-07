const joi = require('joi');

const saleProductSChema = joi.array().items({
  saleId: joi.number().required(),
  productId: joi.number().required(),
  quantity: joi.number().required(),
});

module.exports = { saleProductSChema };
