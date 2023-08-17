'use strict';

const { PRODUCT_TABLE, ProductModel } = require('../models/product.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE, ProductModel);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE);
  },
};
