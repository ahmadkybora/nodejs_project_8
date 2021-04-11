const express = require('express');
const router = express.Router();
const ArticleCategoryController = require('../../app/Controllers/Panel/ArticleCategoryController');
const checkAuth = require('../../middlewares/checkAuth');

router.get('/', checkAuth, ArticleCategoryController.index);
router.get('/:id', checkAuth, ArticleCategoryController.show);
router.post('/', checkAuth, ArticleCategoryController.store);
router.patch('/:id', checkAuth, ArticleCategoryController.update);
router.delete('/:id', checkAuth, ArticleCategoryController.destroy);

module.exports = router;

