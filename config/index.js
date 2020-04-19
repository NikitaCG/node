const config = require('./config.json');

const getDbConnection = () =>
  `mongodb+srv://${config.username}:${config. password}@data-blcxl.mongodb.net/test?retryWrites=true&w=majority`;

module.exports = {
  getDbConnection: getDbConnection,
};