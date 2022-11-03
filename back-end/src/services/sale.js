const { Sale } = require('../database/models');
const { validateBody } = require('../utils/validateBody');
const { saleSchema } = require('../schemas/sale');

const create = async (saleData) => {
  validateBody(saleData, saleSchema);
  const newSale = await Sale.create(saleData);
  console.log('oi');
  return newSale;
};

module.exports = { create };