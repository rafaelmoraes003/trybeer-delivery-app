const saleService = require('../services/sale');

const create = async (req, res, next) => {
  try {
    const { code, data } = await saleService.create(req.body);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const { code, data } = await saleService.getAll();
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const getAllBySellerId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { code, data } = await saleService.getAllBySellerId(id);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const getAllByUserId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { code, data } = await saleService.getAllByUserId(id);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const { showProducts } = req.query;
  try {
    const { code, data } = await saleService.getById(id, showProducts);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;
  try {
    await saleService.update(id, body);
    return res.status(200).json({ message: 'sale updated' });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    await saleService.destroy(id);
    return res.status(200).json({ message: 'sale deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll, getAllBySellerId, getAllByUserId, getById, update, destroy };