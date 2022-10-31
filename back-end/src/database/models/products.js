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
    password: {
      type:DataTypes.STRING,
      allowNull: false
    },
    urlImage: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  
  {
    timestamps: false,
    tableName: 'products'
  });

  return Product;
};