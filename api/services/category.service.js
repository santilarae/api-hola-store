const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CategoryService {
  async findAll() {
    return await models.Category.findAll();
  }
  async findById(id) {
    const category = await models.Category.findByPk(id);
    if (!category) {
      throw boom.notFound('Category not found');
    }
    return category;
  }

  async findAllProductsBy(categoryId) {
    await this.findById(categoryId);
    const products = await models.Product.findAll({
      where: { categoryId },
    });
    return products;
  }

  async create(category) {
    return await models.Category.create(category);
  }

  async update(id, changes) {
    const category = await this.findById(id);
    if (Object.keys(changes).length === 0) {
      throw boom.notAcceptable('No changes found');
    }
    return await category.update(changes);
  }

  async delete(id) {
    const category = await this.findById(id);
    await category.destroy();
    return id;
  }
}

module.exports = CategoryService;
