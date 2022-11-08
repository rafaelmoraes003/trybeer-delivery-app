const { Sale, User, Product } = require('../database/models');

const userJOIN = {
  model: User,
  as: 'user',
  attributes: { exclude: ['password', 'id', 'email', 'role'] },
};

const sellerJOIN = {
  model: User,
  as: 'seller',
  attributes: { exclude: ['password', 'id', 'email', 'role'] },
};

const productsJOIN = {
  model: Product,
  as: 'products',
  through: { attributes: ['quantity'] },
  attributes: { exclude: ['urlImage'] },
};

const getSales = async (method, condition, showProducts) => {
  const sales = await Sale[method]({
    where: condition,
    ...(showProducts === 'true' && {
      include: [
        userJOIN,
        sellerJOIN,
        productsJOIN,
      ],
    }),
  });

  return sales;
};

module.exports = { getSales };