module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: false,
    },
    totalPrice: {
      type:DataTypes.STRING,
      allowNull: false
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },  
    status: {
      allowNull: false,
      type: DataTypes.DATE, 
    }
  },
  {
    timestamps: false,
    tableName: 'sales'
  });


  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { 
        foreignKey: 'userId', as: 'users',
        foreignKey: 'sellerId', as: 'users',
      });
  };


  return Sale;
};