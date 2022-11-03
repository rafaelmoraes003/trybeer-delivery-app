const saleService = require('../services/sale');
const userService = require('../services/user');

const create = async (req, res) => {
  const newSale = await saleService.create(req.body);
  return res.status(201).json(newSale);
};

const getAll = async (req, res) => {
  const allSales = await saleService.getAll();
  return res.status(200).json(allSales);
};

const getAllBySellers = async (req, res) => {
  const { data } = await userService.getSellers();
  const allSales = await saleService.getAllBySellers(data);
  return res.status(200).json(allSales);
};

const getAllByUsers = async (req, res) => {
  const { data } = await userService.getSellers();
  const allSales = await saleService.getAllByUsers(data);
  return res.status(200).json(allSales);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const sale = await saleService.getById(id);
  return res.status(200).json(sale);
};

const update = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  await saleService.update(id, body);
  return res.status(200).json({ message: 'sale updated' });
};

const destroy = async (req, res) => {
  const { id } = req.params;
  await saleService.destroy(id);
  return res.status(200).json({ message: 'sale deleted' });
};

module.exports = { create, getAll, getAllBySellers, getAllByUsers, getById, update, destroy };