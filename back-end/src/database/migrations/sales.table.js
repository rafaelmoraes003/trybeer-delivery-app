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
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      totalPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
      },  
      status: {
        allowNull: false,
        type: Sequelize.DATE, 
      }
    },
  )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
