const productService = require('../services/product');

const create = async (req, res) => {
  const newProduct = await productService.create(req.body);
  return res.status(201).json(newProduct);
};

const getAll = async (req, res) => {
  const allProducts = await productService.findAll();
  return res.status(200).json(allProducts);
};

module.exports = { create, getAll };