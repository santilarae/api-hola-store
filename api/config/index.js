require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPassword: process.env.DB_PASSWORD,
  dbPort: process.env.DB_PORT,
  dbUser: process.env.DB_USER,
};

module.exports = config;
