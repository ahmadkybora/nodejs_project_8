const express = require('express');
const router = express.Router();
const ArticleCategoryController = require('../../app/Controllers/Panel/ArticleCategoryController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ArticleCategoryController.index);
router.get('/:id', isLoggedIn, ArticleCategoryController.show);
router.post('/', isLoggedIn, ArticleCategoryController.store);
router.patch('/:id', isLoggedIn, ArticleCategoryController.update);
router.delete('/:id', isLoggedIn, ArticleCategoryController.destroy);

module.exports = router;

