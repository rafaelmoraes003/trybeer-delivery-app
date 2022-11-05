module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('sales_products', {
      saleId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{
          model: 'sales',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'sale_id',
        unique: false,
      },
      productId:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references:{
          model: 'products',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'product_id',
        unique: false,
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