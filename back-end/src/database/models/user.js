module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'customer',
    }
  },
  {
    timestamps: false,
    tableName: 'users'
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignKey: 'id', as: 'userId'
    });
    User.hasMany(models.Sale, {
      foreignKey: 'id', as: 'sellerId'
    });
  };


  return User;
};

