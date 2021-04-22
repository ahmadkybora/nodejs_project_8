const express = require('express');
const router = express.Router();
const ArticleController = require('../../app/Controllers/Panel/ArticleController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ArticleController.index);
router.get('/:id', isLoggedIn, ArticleController.show);
router.post('/', isLoggedIn, ArticleController.store);
router.patch('/:id', isLoggedIn, ArticleController.update);
router.delete('/:id', isLoggedIn, ArticleController.destroy);

module.exports = router;

