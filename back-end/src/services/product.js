const { Product } = require('../database/models');
const { validateBody } = require('../utils/validations/validateBody');
const { productSchema } = require('../schemas/product');
const { validateProduct, validateProductExist } = require('../utils/validations/validateProduct');

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
  await validateProduct(id);
  const product = await Product.findOne({ where: { id } });
  return product;
};

const update = async (id, productData) => {
  await validateProduct(id);
  const { name, price, urlImage } = productData;
  validateBody(productData, productSchema);
  const updatedProduct = await Product.update({ name, price, urlImage }, { where: { id } });
  return updatedProduct;
};

const destroy = async (id) => {
  validateProduct(id);
  const deletedProduct = await Product.destroy({ where: { id } });
  return deletedProduct;
};

module.exports = { create, getAll, getById, update, destroy };