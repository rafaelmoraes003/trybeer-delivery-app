module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
        references:{
          model: 'users',
          key: 'id'
        },
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sellerId: {
        allowNull: false,
        type: Sequelize.STRING,
        references:{
          model: 'users',
          key: 'id'
        },
        field: 'seller_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
        field: 'total_price',
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_address',
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_number',
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
      },  
      status: {
        allowNull: false,
        type: Sequelize.DATE, 
      }
    },
  )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};
