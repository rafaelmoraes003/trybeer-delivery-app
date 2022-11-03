module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type:DataTypes.DECIMAL,
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
      type: DataTypes.STRING, 
    }
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true
  });


  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });

    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId', as: 'seller'
    });
  }


  return Sale;
};