const { Sequelize, Model, DataTypes } = require('sequelize');
const { CATEGORY_TABLE } = require('./category.model');

const PRODUCT_TABLE = 'products';

const ProductModel = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  salePrice: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'sale_price',
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  onSale: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'on_sale',
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'category_id',
    references: {
      model: CATEGORY_TABLE,
      key: 'id',
    },
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: 'updated_at',
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
    field: 'created_at',
  },
};

class Product extends Model {
  static associate(models) {
    this.belongsTo(models.Category, { as: 'category' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, ProductModel, Product };
