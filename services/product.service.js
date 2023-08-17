const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ProductService {

  productOptions = {
    include: ['category'],
    attributes: { exclude: ['categoryId', 'category_id'] },
  };

  async findAll() {
    return await models.Product.findAll(this.productOptions);
  }

  async findById(id) {
    const product = await models.Product.findByPk(id, this.productOptions);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async create(product) {
    return await models.Product.create(product);
  }

  async update(id, changes) {
    const product = await this.findById(id);
    if (Object.keys(changes).length === 0) {
      throw boom.notAcceptable('No changes found');
    }
    return await product.update(changes);
  }

  async delete(id) {
    const product = await this.findById(id);
    await product.destroy();
    return id;
  }
}

module.exports = ProductService;
