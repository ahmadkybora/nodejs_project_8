const express = require('express');
const router = express.Router();
const ProductCategoryController = require('../../app/Controllers/Panel/ProductCategoryController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ProductCategoryController.index);
router.get('/:id', isLoggedIn, ProductCategoryController.show);
router.post('/', isLoggedIn, ProductCategoryController.create);
router.post('/', isLoggedIn, ProductCategoryController.store);
router.get('/:id', isLoggedIn, ProductCategoryController.edit);
router.patch('/:id', isLoggedIn, ProductCategoryController.update);
router.delete('/:id', isLoggedIn, ProductCategoryController.destroy);

module.exports = router;
