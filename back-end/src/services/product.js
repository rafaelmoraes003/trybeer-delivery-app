const { Product } = require('../database/models');

const getAll = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

module.exports = { getAll };