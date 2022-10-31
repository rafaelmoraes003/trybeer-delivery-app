module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('sales_products', {
      saleId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'sales',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'sale_id',
      },
      productId:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'product_id',
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  down: async (QueryInterface, _Sequelize) => {
    await QueryInterface.dropTable('sales_products');
  },
}