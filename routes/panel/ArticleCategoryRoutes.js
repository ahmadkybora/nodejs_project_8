const express = require('express');
const router = express.Router();
const ArticleCategoryController = require('../../app/Controllers/Panel/ArticleCategoryController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ArticleCategoryController.index);
router.get('/show/:id', isLoggedIn, ArticleCategoryController.show);
router.post('/store', isLoggedIn, ArticleCategoryController.store);
router.get('/edit/:id', isLoggedIn, ArticleCategoryController.edit);
router.post('/update/:id', isLoggedIn, ArticleCategoryController.update);
router.get('/destroy/:id', isLoggedIn, ArticleCategoryController.destroy);

module.exports = router;

