const saleService = require('../services/sale');

const create = async (req, res) => {
  const newSale = await saleService.create(req.body);
  return res.status(201).json(newSale);
};

module.exports = { create };