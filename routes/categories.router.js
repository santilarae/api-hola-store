const express = require('express');
const CategoryService = require('../services/category.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getCategorySchema,
  createCategorySchema,
  updateCategorySchema,
} = require('../schemas/category.schema');

const router = express.Router();
const categoryService = new CategoryService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await categoryService.findAll();
    res.status(200).json(categories);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const category = await categoryService.findById(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  '/:id/products',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const products = await categoryService.findAllProductsBy(id);
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    const { body } = req;
    try {
      const category = await categoryService.create(body);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },
);

router.patch(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const category = await categoryService.update(id, body);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    const { id } = req.params;
    try {
      const idDeleted = await categoryService.delete(id);
      res.status(200).json({message: `Category #${idDeleted} deleted successfully`});
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
