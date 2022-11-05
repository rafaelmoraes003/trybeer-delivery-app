const { SaleProduct } = require('../database/models');
const { saleProductSChema } = require('../schemas/saleProduct');
const { validateBody } = require('../utils/validateBody');

const getAll = async (saleProductList) => {
  validateBody(saleProductList, saleProductSChema);
  const saleProducts = await SaleProduct.findAll()
  return { code: 201, data: saleProducts }
}

module.exports = { create, getAll };