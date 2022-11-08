const { SaleProduct, sequelize } = require('../database/models');
const { saleProductSChema } = require('../schemas/saleProduct');
const { validateBody } = require('../utils/validateBody');

const getAll = async (saleProductList) => {
  validateBody(saleProductList, saleProductSChema);
  const saleProducts = await SaleProduct.findAll();
  return { code: 200, data: saleProducts };
};

const getBySaleId = async (saleId) => {
  const saleProducts = await sequelize.query(`
    SELECT 
    sp.sale_id AS saleId, 
    sp.product_id AS productId,
    sp.quantity AS quantity,
    p.name AS productName, 
    p.price AS productPrice
    from sales_products AS sp
    INNER JOIN products AS p
    ON p.id = sp.product_id
    WHERE sp.sale_id = ?
  `, { replacements: [saleId] });
  return { code: 201, data: saleProducts[0] };
};

const create = async (saleProductList) => {
  validateBody(saleProductList, saleProductSChema);
  const newSaleProducts = await SaleProduct.bulkCreate(saleProductList);
  return { code: 201, data: newSaleProducts };
};

const update = async (saleId, saleProductData) => {
  validateBody(saleProductData, saleProductSChema);
  const updatedSaleProduct = await SaleProduct.update(
  { saleProductData }, { where: { saleId } },
);
  return { code: 200, data: updatedSaleProduct };
};

const destroy = async (saleId) => {
  const deletedSaleProduct = await SaleProduct.destroy({ where: { saleId } });
  return { code: 204, data: deletedSaleProduct };
};

module.exports = { create, getAll, update, destroy, getBySaleId };