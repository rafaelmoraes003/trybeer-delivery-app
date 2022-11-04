const { SaleProduct } = require('../database/models');

const create = async (saleProductData) => {
  // validateBody(saleProductData, saleProductSchema);
  const newSale = await SaleProduct.bulkCreate(saleProductData);
  return newSale;
};

module.exports = { create };