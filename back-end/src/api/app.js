const express = require('express');
const cors = require('cors');
const loginRoute = require('../routes/login');
const userRoute = require('../routes/user');
const errorMiddleware = require('../middlewares/errorMiddleware');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', loginRoute);
app.use('/user', userRoute);

app.use(errorMiddleware);

module.exports = app;
