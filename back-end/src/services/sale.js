const { Sale } = require('../database/models');
const { validateBody } = require('../utils/validations/validateBody');
const { saleSchema } = require('../schemas/sale');
const { CustomError } = require('../utils/CustomError');
const { validateSale } = require('../utils/validations/validateSale');
const { getSales } = require('../utils/getSales');

const notFound = 'Sale not Found';

const create = async (saleData) => {
  validateBody(saleData, saleSchema);
  const newSale = await Sale.create(saleData);
  return { code: 201, data: newSale.dataValues };
};

const getAll = async () => {
  const sales = await Sale.findAll();
  return { code: 200, data: sales };
};

const getAllBySellerId = async (sellerId) => {
  const salesBySeller = await Sale.findAll({ where: { sellerId } });
  return { code: 200, data: salesBySeller };
}; 

const getAllByUserId = async (userId) => {
  const salesByUser = await Sale.findAll({ where: { userId } });
  return { code: 200, data: salesByUser };
}; 

const getById = async (id, showProducts) => {
  const sale = await getSales('findOne', { id }, showProducts);
  if (!sale) throw new CustomError(notFound, 404);
  return { code: 200, data: sale };
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
  if (!updatedProduct) throw new CustomError(notFound, 404);
  return updatedProduct;
};

const destroy = async (id) => {
  const deletedProduct = await Sale.destroy({ where: { id } });
  if (!deletedProduct) throw new CustomError(notFound, 404);
  return deletedProduct;
};

module.exports = { 
  create,
  getAll,
  getAllBySellerId,
  getAllByUserId,
  getById,
  update,
  destroy,
};