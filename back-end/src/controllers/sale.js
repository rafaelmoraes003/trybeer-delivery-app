const saleService = require('../services/sale');
const userService = require('../services/user');

const create = async (req, res, next) => {
  try {
    const newSale = await saleService.create(req.body);
    return res.status(201).json(newSale);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const allSales = await saleService.getAll();
    return res.status(200).json(allSales);
  } catch (error) {
    next(error);
  }
};

const getAllSellers = async (req, res, next) => {
  try {
    const { code, data } = await userService.getSellers();
    const allSales = await saleService.getAllBySellers(data);
    return res.status(code).json(allSales);
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const { data } = await userService.getAll();
    const allSales = await saleService.getAllByUsers(data);
    return res.status(200).json(allSales);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const sale = await saleService.getById(id);
    return res.status(200).json(sale);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    await saleService.update(id, body);
    return res.status(200).json({ message: 'sale updated' });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await saleService.destroy(id);
    return res.status(200).json({ message: 'sale deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll, getAllSellers, getAllUsers, getById, update, destroy };