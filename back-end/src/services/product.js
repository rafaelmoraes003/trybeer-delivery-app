const { CustomError } = require('puppeteer');
const { Product } = require('../database/models');

const create = async (productData) => {
  const newProduct = await Product.create(productData);
  return newProduct;
};

const getAll = async () => {
  const allProducts = await Product.findAll();
  return allProducts;
};

const getById = async (id) => {
  const product = await Product.findOne({ where: { id } });
  if (!product) throw new CustomError('Product not Found', 400);
  return product;
};

const update = async (id) => {
  const updatedProduct = await Product.update(id);
  if (!updatedProduct) throw new CustomError('Product not Found', 400);
  return updatedProduct;
};

module.exports = { create, getAll, getById, update };