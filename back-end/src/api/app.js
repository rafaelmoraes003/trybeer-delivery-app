const express = require('express');
require('express-async-errors');
const cors = require('cors');
const errorMiddleware = require('../middlewares/errorMiddleware');
const loginRoute = require('../routes/login');
const userRoute = require('../routes/user');
const productRoute = require('../routes/product');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/product', productRoute);
 
app.use(errorMiddleware);

module.exports = app;
