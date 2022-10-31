const { CustomError } = require('puppeteer');
const { Product } = require('../database/models');

const notFound = 'Product not Found';

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
  if (!product) throw new CustomError(notFound, 400);
  return product;
};

const update = async (id, productData) => {
  const { name, price, urlImage } = productData;
  if (!id) throw new CustomError(notFound, 400);
  const updatedProduct = await Product.update({ name, price, urlImage }, { where: { id } });
  return updatedProduct;
};

const destroy = async (id) => {
  const deletedProduct = await Product.destroy({ where: { id } });
  if (!deletedProduct) throw new CustomError(notFound, 400);
  return deletedProduct;
};

module.exports = { create, getAll, getById, update, destroy };