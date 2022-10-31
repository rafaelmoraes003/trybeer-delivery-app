const { Product } = require('../database/models');

const create = async (productData) => {
  const newProduct = await Product.create(productData);
  return newProduct;
};

module.exports = { create };