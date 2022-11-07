const { SaleProduct } = require('../database/models');
const { saleProductSChema } = require('../schemas/saleProduct');
const { validateBody } = require('../utils/validateBody');

const getAll = async (saleProductList) => {
  validateBody(saleProductList, saleProductSChema);
  const saleProducts = await SaleProduct.findAll();
  return { code: 201, data: saleProducts };
};

const create = async (saleProductList) => {
  validateBody(saleProductList, saleProductSChema);
  console.log(saleProductList);
  const newSaleProducts = await SaleProduct.bulkCreate(saleProductList);
  return { code: 201, data: newSaleProducts };
};

const update = async (saleId, saleProductData) => {
  validateBody(saleProductData, saleProductSChema);
  const updatedSaleProduct = await SaleProduct.update(
  { saleProductData }, { where: { saleId } },
);
  return { code: 200, data: updatedSaleProduct };
};

const destroy = async (saleId) => {
  const deletedSaleProduct = await SaleProduct.destroy({ where: { saleId } });
  return { code: 204, data: deletedSaleProduct };
};

module.exports = { create, getAll, update, destroy };