const { Sale } = require('../database/models');
const { CustomError } = require('./CustomError');

const validateSale = async (id) => {
  const sale = await Sale.findOne({ where: { id } });
  if (!sale) {
    throw new CustomError('Sale not exists.', 404);
  }
};

module.exports = { validateSale };