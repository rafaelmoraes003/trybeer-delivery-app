const saleProductsService = require('../services/salesProducts');

const getAll = async (req, res, next) => {
  try {
    const { code, data } = await saleProductsService.getAll();
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const getBySaleId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { code, data } = await saleProductsService.getBySaleId(id);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const { code, data } = await saleProductsService.create(req.body);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const { code, data } = await saleProductsService.update(id, body);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { code, data } = await saleProductsService.destroy(id);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll, update, destroy, getBySaleId };