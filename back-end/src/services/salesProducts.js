const { SaleProduct } = require('../database/models');
const { saleProductSChema } = require('../schemas/saleProduct');
const { validateBody } = require('../utils/validations/validateBody');

const create = async (saleProductList) => {
  validateBody(saleProductList, saleProductSChema);
  const newSaleProducts = await SaleProduct.bulkCreate(saleProductList);
  return { code: 201, data: newSaleProducts };
};

module.exports = { create };