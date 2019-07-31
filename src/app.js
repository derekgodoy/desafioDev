'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

// Carrega as Rotas
const mdrRoute = require('./routes/mdr-route');
const transactionRoute = require('./routes/transaction-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mdrRoute);
app.use('/transaction', transactionRoute);

module.exports = app;