const { DataTypes, Sequelize, Model } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategoryModel = {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
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

class Category extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      modelName: 'Category',
      tableName: CATEGORY_TABLE,
      timestamps: false,
    };
  }
}

module.exports = { CATEGORY_TABLE, CategoryModel, Category };
