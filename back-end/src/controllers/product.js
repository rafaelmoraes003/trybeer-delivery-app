const productService = require('../services/product');

const create = async (req, res) => {
  const newProduct = await productService.create(req.body);
  return res.status(201).json(newProduct);
};

module.exports = { create };