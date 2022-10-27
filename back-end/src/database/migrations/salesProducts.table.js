module.exports = {
  up: async (QueryInterface, Sequelize) => {
    await QueryInterface.createTable('salesProducts', {
      saleId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references:{
          model: 'sales',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
        onDelete: 'CASCADE'
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    })
  },

  down: async (QueryInterface, _Sequelize) => {
    await QueryInterface.dropTable('products');
  },
}