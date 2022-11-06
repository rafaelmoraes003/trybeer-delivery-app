const productService = require('../services/product');

const create = async (req, res, next) => {
  try {
    const newProduct = await productService.create(req.body);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

const getAll = async (req, res, next) => {
  try {
    const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const allProducts = await productService.getById(id);
    return res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  const { name, price, urlImage } = req.body;
  const { id } = req.params;
  try {
    await productService.update(id, { name, price, urlImage });
    return res.status(200).json({ message: 'product updated' });
  } catch (error) {
    next(error);
  }
};

const destroy = async (req, res, next) => {
  const { id } = req.params;
  try {
    await productService.destroy(id);
    return res.status(200).json({ message: 'product deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = { create, getAll, getById, update, destroy };