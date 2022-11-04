const saleProductService = require('../services/saleProducts');

const create = async (req, res) => {
  const { saleId, productId, quantity } = req.body;
  const newSaleProduct = await saleProductService.create({ saleId, productId, quantity });
  return res.status(201).json(newSaleProduct);
};

const getAll = async (req, res) => {
  const allSaleProducts = await saleProductService.getAll();
  return res.status(200).json(allSaleProducts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const saleProduct = await saleProductService.getById(id);
  return res.status(200).json(saleProduct);
};

const update = async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  await saleProductService.update(id, body);
  return res.status(200).json({ message: 'saleProduct updated' });
};

const destroy = async (req, res) => {
  const { id } = req.params;
  await saleProductService.destroy(id);
  return res.status(204).json({ message: 'saleProduct deleted' });
};

module.exports = { create, getAll, getById, update, destroy };