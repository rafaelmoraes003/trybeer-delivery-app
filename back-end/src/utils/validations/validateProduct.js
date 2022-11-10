const { Product } = require('../../database/models');
const { CustomError } = require('../CustomError');

const validateProduct = async (id) => {
  const product = await Product.findOne({ where: { id } });
  if (!product) {
    throw new CustomError('Product not Found', 404);
  }
};

const validateProductExist = async (name) => {
  const product = await Product.findOne({ where: { name } });
  if (product) {
    throw new CustomError('Product already exists', 404);
  }
};

module.exports = { validateProduct, validateProductExist };