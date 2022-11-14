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

const updateSaleStatus = async (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;
  try {
    const { code } = await saleService.updateSaleStatus(id, status);
    return res.status(code).end();
  } catch (error) {
    next(error);
  }
};

module.exports = { create,
  getAll,
  getAllBySellerId,
  getAllByUserId,
  getById,
  updateSaleStatus, 
};