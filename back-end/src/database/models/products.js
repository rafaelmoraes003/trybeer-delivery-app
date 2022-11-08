module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'url_image'
    }
  },
  { 
    underscored: true,
    timestamps: false,
    tableName: 'products'
  });

  return Product;
};