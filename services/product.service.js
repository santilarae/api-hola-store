const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ProductService {
  async findAll() {
    return await models.Product.findAll();
  }

  async findById(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    return product;
  }

  async create(product) {
    return await models.Product.create(product);
  }

  async update(id, changes) {
    const updatedProduct = await models.Product.findByPk(id);
    return await updatedProduct.update(changes);
  }

  async delete(id) {
    const deletedProduct = await models.Product.findByPk(id);
    await deletedProduct.destroy();
    return id;
  }
}

module.exports = ProductService;
