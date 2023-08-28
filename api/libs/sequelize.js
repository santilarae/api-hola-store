const { Sequelize } = require('sequelize');
const config = require('../config');
const setupModels = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}?sslmode=require`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  sslmode: 'require',
  logging: console.log,
});

setupModels(sequelize);

module.exports = sequelize;
