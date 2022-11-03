const joi = require('joi');

const salesSchema = joi.object({
  userId: joi.number().required(),
  sellerId: joi.number().require(),
  totalPrice: joi.number().positive().required(),
  deliveryAddress: joi.string().min(5).required(),
  deliveryNumber: joi.number().required(),
  saleDate: joi.date().required(),
  status: joi.string().required(),
});

module.exports = { salesSchema };