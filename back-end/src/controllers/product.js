const productService = require('../services/product');

const create = async (req, res) => {
  const newProduct = await productService.create(req.body);
  return res.status(201).json(newProduct);
};

const getAll = async (req, res) => {
  const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const allProducts = await productService.getById(id);
  return res.status(200).json(allProducts);
};

const update = async (req, res) => {
  const { name, price, urlImage } = req.body;
  const { id } = req.params;
  const updatedProduct = await productService.update(id, { name, price, urlImage });
  return res.status(200).json(updatedProduct);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  await productService.destroy(id);
  return res.status(200).json({ message: 'product deleted' });
};

module.exports = { create, getAll, getById, update, destroy };