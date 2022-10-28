const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/errorMiddleware');
const loginRoute = require('../routes/login');
const userRoute = require('../routes/user');
const { userMiddleware } = require('../middlewares/validation');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', userMiddleware, loginRoute);
app.use('/user', userRoute);

app.use(errorMiddleware);

module.exports = app;
