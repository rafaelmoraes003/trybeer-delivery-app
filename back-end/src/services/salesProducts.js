const { SaleProduct } = require('../database/models');
const { saleProductSChema } = require('../schemas/saleProduct');
const { validateBody } = require('../utils/validateBody');

const getAll = async (saleProductList) => {
  validateBody(saleProductList, saleProductSChema);
  const saleProducts = await SaleProduct.findAll()
  return { code: 201, data: saleProducts }
}

const create = async (saleProductList) => {
  validateBody(saleProductList, saleProductSChema);
  console.log(saleProductList);
  const newSaleProducts = await SaleProduct.bulkCreate(saleProductList);
  return { code: 201, data: newSaleProducts }
}

module.exports = { create, getAll };