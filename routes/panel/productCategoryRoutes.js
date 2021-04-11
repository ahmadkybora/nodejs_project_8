const express = require('express');
const router = express.Router();
const ProductCategoryController = require('../../app/Controllers/Panel/ProductCategoryController');
const checkAuth = require('../../middlewares/checkAuth');

router.get('/', checkAuth, ProductCategoryController.index);
router.get('/:id', checkAuth, ProductCategoryController.show);
router.post('/', checkAuth, ProductCategoryController.create);
router.post('/', checkAuth, ProductCategoryController.store);
router.get('/:id', checkAuth, ProductCategoryController.edit);
router.patch('/:id', checkAuth, ProductCategoryController.update);
router.delete('/:id', checkAuth, ProductCategoryController.destroy);

module.exports = router;
