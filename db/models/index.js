const { Category, CategoryModel } = require('./category.model');
const { Product, ProductModel } = require('./product.model');

function setupModels(sequelize) {
  Category.init(CategoryModel, Category.config(sequelize));
  Product.init(ProductModel, Product.config(sequelize));

  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;
