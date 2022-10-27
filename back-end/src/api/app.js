const express = require('express');
const loginRoute = require('../routes/login.route')
const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(loginRoute)

module.exports = app; //
