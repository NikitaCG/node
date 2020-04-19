const express = require('express');
const mongoose = require('mongoose');

const { getDbConnection } = require('../config');

const api = require('./api');

const server = express();

const PORT = process.env.PORT || 7000;

server
  .use(express.static(__dirname + '/public'));

mongoose.connect(getDbConnection(),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const dbConnection = mongoose.connection;

dbConnection.on('error', err => console.log(`Connection error ${err}`));
dbConnection.on('open', () => console.log(`Connection to DB!`));

api(server);

server.listen(PORT, err => {
    err ? console.log(err) : console.log('Server started!');
  });