const { Sale, User, Product, SaleProduct } = require('../database/models');

const getSales = async (method, condition, showProducts) => {
  const sales = await Sale[method]({
    where: condition,
    ...(showProducts === 'true' && {
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password', 'id', 'email', 'role'] },
        },
        {
          model: User,
          as: 'seller',
          attributes: { exclude: ['password', 'id', 'email', 'role'] },
        },
        {
          model: Product,
          as: 'products',
          through: { attributes: ['quantity'] },
          attributes: { exclude: ['urlImage'] }
        }
      ],
    } )
  });

  return sales;
}

module.exports = { getSales };