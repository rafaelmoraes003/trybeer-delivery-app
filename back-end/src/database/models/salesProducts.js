module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { 
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    productId: {
      type: DataTypes.STRING,
      allowNull: false,
      foreignKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    timestamps: false,
    tableName: 'saleProducts'
  });


  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId', as: 'products'
    })

    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
    });
  }


  return SaleProduct;
};