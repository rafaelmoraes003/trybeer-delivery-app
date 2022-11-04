const saleProductService = require('../services/saleProducts');

const create = async (req, res) => {
  const saleProduct = await saleProductService.create(req.body);
  return res.status(201).json(saleProduct);
};

module.exports = { create };