const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(10).max(60);
const description = Joi.string().min(10).max(500);
const price = Joi.number().integer().positive().strict();
const images = Joi.array().items(Joi.string().required());
const salePrice = Joi.number().integer().positive().strict();
const stock = Joi.number().integer().positive().greater(0).strict();
const onSale = Joi.boolean().default(false);
const categoryId = Joi.number().integer();

const createProductSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  price: price.required(),
  images: images.required(),
  salePrice,
  stock: stock.required(),
  onSale: onSale.required(),
  categoryId: categoryId.required(),
});

const updateProductSchema = Joi.object({
  title,
  description,
  price,
  images,
  salePrice,
  stock,
  onSale,
  categoryId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
