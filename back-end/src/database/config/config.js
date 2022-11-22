require('dotenv').config();

const options = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: 'TRYBEER_DELIVERY_APP',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
  production: {
    ...options,
  },
};
