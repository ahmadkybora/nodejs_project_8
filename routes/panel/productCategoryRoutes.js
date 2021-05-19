const express = require('express');
const router = express.Router();
const ProductCategoryController = require('../../app/Controllers/Panel/ProductCategoryController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.post('/image-upload', isLoggedIn, ProductCategoryController.uploadImage);
router.post('/category-search', isLoggedIn, ProductCategoryController.search);
router.get('/', isLoggedIn, ProductCategoryController.index);
//router.get('/show/:id', isLoggedIn, ProductCategoryController.show);
router.get('/create', isLoggedIn, ProductCategoryController.create);
router.post('/store', isLoggedIn, ProductCategoryController.store);
router.get('/edit/:id', isLoggedIn, ProductCategoryController.edit);
router.post('/update/:id', isLoggedIn, ProductCategoryController.update);
router.get('/destroy/:id', isLoggedIn, ProductCategoryController.destroy);

module.exports = router;
