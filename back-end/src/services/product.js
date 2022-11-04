const { CustomError } = require('puppeteer');
const { Product } = require('../database/models');
const { validateBody } = require('../utils/validateBody');
const { productSchema } = require('../schemas/product');
const { validateProduct, validateProductExist } = require('../utils/validateProduct');

const notFound = 'Product not Found';

const create = async (productData) => {
  validateBody(productData, productSchema);
  await validateProductExist(productData.name);
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
  await validateProduct(id);
  const { name, price, urlImage } = productData;
  validateBody(productData, productSchema);
  const updatedProduct = await Product.update({ name, price, urlImage }, { where: { id } });
  if (!updatedProduct) throw new CustomError(notFound, 400);
  return updatedProduct;
};

const destroy = async (id) => {
  const deletedProduct = await Product.destroy({ where: { id } });
  if (!deletedProduct) throw new CustomError(notFound, 400);
  return deletedProduct;
};

module.exports = { create, getAll, getById, update, destroy };