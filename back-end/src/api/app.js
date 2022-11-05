const express = require('express');
const cors = require('cors');
require('express-async-errors');
const loginRoute = require('../routes/login');
const userRoute = require('../routes/user');
const productRoute = require('../routes/product');
const saleRoute = require('../routes/sale');
const saleProductsRoute = require('../routes/saleProducts');

const { errorMiddleware } = require('../middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/images', express.static('public'));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use('/sales', saleRoute);
app.use('/sales-products', saleProductsRoute);

app.use(errorMiddleware);

module.exports = app;
