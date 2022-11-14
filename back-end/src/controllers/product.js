const productService = require('../services/product');

const getAll = async (req, res, next) => {
  try {
    const allProducts = await productService.getAll();
  return res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };