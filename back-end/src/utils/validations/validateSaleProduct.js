// const { SaleProduct } = require('../../database/models');
// const { CustomError } = require('../CustomError');

// const validateSaleProduct = async (saleId, productId) => {
//   const saleProduct = await SaleProduct.findOne({ where: { saleId, productId } });
//   if (!saleProduct) {
//     throw new CustomError('Sale or Product not exists.', 404);
//   }
// };

// module.exports = { validateSaleProduct };