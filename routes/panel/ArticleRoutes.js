const express = require('express');
const router = express.Router();
const ArticleController = require('../../app/Controllers/Panel/ArticleController');
const checkAuth = require('../../middlewares/checkAuth');

router.get('/', checkAuth, ArticleController.index);
router.get('/:id', checkAuth, ArticleController.show);
router.post('/', checkAuth, ArticleController.store);
router.patch('/:id', checkAuth, ArticleController.update);
router.delete('/:id', checkAuth, ArticleController.destroy);

module.exports = router;

