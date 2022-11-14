const saleProductsService = require('../services/salesProducts');

const create = async (req, res, next) => {
  try {
    const { code, data } = await saleProductsService.create(req.body);
    return res.status(code).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };