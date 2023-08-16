const { Category, CategoryModel } = require('./category.model');

function setupModels(sequelize) {
  Category.init(CategoryModel, Category.config(sequelize));
}

module.exports = setupModels;
