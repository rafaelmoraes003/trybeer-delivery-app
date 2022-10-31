module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    saleId: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    timestamps: false,
    tableName: 'sales_products'
  });


  SaleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
      as: 'sales',
    });

    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
      as: 'products',
    });
  }; 


  return SaleProduct;
};