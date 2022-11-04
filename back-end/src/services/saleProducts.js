const { SaleProduct } = require('../database/models');
const { CustomError } = require('../utils/CustomError');
// const { saleProductSchema } = require('../schemas/saleProduct');
// const { validateBody } = require('../utils/validateBody');

const notFound = 'Product not Found';

const create = async (saleProductData) => {
  // validateBody(saleProductData, saleProductSchema);
  const newSale = await SaleProduct.bulkCreate(saleProductData);
  return newSale;
};

const getAll = async () => {
  const allSalesProducts = await SaleProduct.findAll();
  return allSalesProducts;
};

const getById = async (saleId) => {
  const product = await SaleProduct.findOne({ where: { saleId } });
  return product;
};

const update = async (saleId, saleProductData) => {
  // validateBody(saleProductData, saleProductSchema);
  const updatedSaleProduct = await SaleProduct.update(
  { saleProductData }, { where: { saleId } },
);
  if (!updatedSaleProduct) throw new CustomError(notFound, 400);
  return updatedSaleProduct;
};

const destroy = async (saleId) => {
  const deletedSaleProduct = await SaleProduct.destroy({ where: { saleId } });
  if (!deletedSaleProduct) throw new CustomError(notFound, 400);
  return deletedSaleProduct;
};

module.exports = { create, getAll, getById, update, destroy };