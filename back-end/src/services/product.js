const { Product } = require('../database/models');

const create = async (productData) => {
  const newProduct = await Product.create(productData);
  return newProduct;
};

const getAll = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

module.exports = { create, getAll };