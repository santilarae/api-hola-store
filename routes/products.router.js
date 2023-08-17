const express = require('express');
const ProductService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getProductSchema,
  createProductSchema,
  updateProductSchema
} = require('../schemas/product.schema');

const router = express.Router();
const productService = new ProductService();

router.get('/', async (req, res, next) => {
  try {
    const products = await productService.findAll();
    res.status(200).json(products);
  } catch (error) {
    next(next);
  }
});

router.get(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const products = await productService.findById(id);
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    const { body } = req;
    try {
      const products = await productService.create(body);
      res.status(201).json(products);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const products = await productService.update(id, body);
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const idDeleted = await productService.delete(id);
      res.status(200).json({message: `Product #${idDeleted} deleted successfully`});
    } catch (error) {
      next(error);
    }
  },
);


module.exports = router;
