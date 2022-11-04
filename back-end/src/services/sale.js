const { Sale } = require('../database/models');
const { validateBody } = require('../utils/validateBody');
const { saleSchema } = require('../schemas/sale');
const { CustomError } = require('../utils/CustomError');
const { validateSale } = require('../utils/validateSale');

const notFound = 'Product not Found';

const create = async (saleData) => {
  validateBody(saleData, saleSchema);
  const newSale = await Sale.create(saleData);
  return newSale;
};

const getAll = async () => {
  const allSales = await Sale.findAll();
  return allSales;
};

const getAllBySellers = async (sellerId) => {
  const sales = await Sale.findAll({ where: { sellerId } });
  return sales;
}; 

const getAllByUsers = async (userId) => {
  const sales = await Sale.findAll({ where: { userId } });
  return sales;
}; 

const getById = async (id) => {
  const product = await Sale.findOne({ where: { id } });
  return product;
};

const update = async (id, saleData) => {
  await validateSale(id);
  const { userId, sellerId, totalPrice,
    deliveryAddress, deliveryNumber, saleDate, status } = saleData;
  validateBody(saleData, saleSchema);
  const updatedProduct = await Sale.update(
  { 
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate, 
    status, 
  },
  { where: { id } },
);
  if (!updatedProduct) throw new CustomError(notFound, 400);
  return updatedProduct;
};

const destroy = async (id) => {
  const deletedProduct = await Sale.destroy({ where: { id } });
  if (!deletedProduct) throw new CustomError(notFound, 400);
  return deletedProduct;
};

module.exports = { create, getAll, getAllBySellers, getAllByUsers, getById, update, destroy };