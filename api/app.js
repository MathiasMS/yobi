const express = require('express');
const path = require('path');

const transactions = require('./routes/transaction')
const { errorHandler } = require('./middlewares/error-handler');
const app = express();
const expressValidator = require('express-validator')
const { allowOrigin } = require('./middlewares/cors')
const log = require("log-node")

log()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(allowOrigin)
app.use(expressValidator())
app.use('/transactions', transactions);
app.use(errorHandler);


module.exports = app;
