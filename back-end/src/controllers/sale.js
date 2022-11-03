const saleService = require('../services/sale');

const create = async (req, res) => {
  const newSale = await saleService.create(req.body);
  return res.status(201).json(newSale);
};

const getAll = async (req, res) => {
  const allsales = await saleService.getAll();
  return res.status(200).json(allsales);
};

const getAllBySellers = async (req, res) => {
  const { sellerId } = req.params;
  const allsales = await saleService.getAllBySellers(sellerId);
  return res.status(200).json(allsales);
};

const getAllByUsers = async (req, res) => {
  const { userId } = req.params;
  const allsales = await saleService.getAllByUsers(userId);
  return res.status(200).json(allsales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getById(id);
  return res.status(200).json(sale);
};

const update = async (req, res) => {
  const { userId, sellerId, totalPrice,
    deliveryAddress, deliveryNumber, saleDate, status } = req.body;
  const { id } = req.params;
  await saleService.update(id, 
  { 
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status, 
  });
  return res.status(200).json({ message: 'sale updated' });
};

const destroy = async (req, res) => {
  const { id } = req.params;
  await saleService.destroy(id);
  return res.status(200).json({ message: 'sale deleted' });
};

module.exports = { create, getAll, getAllBySellers, getAllByUsers, getById, update, destroy };