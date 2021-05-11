const express = require('express');
const router = express.Router();
const ArticleController = require('../../app/Controllers/Panel/ArticleController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ArticleController.index);
router.get('/show/:id', isLoggedIn, ArticleController.show);
router.get('/create', isLoggedIn, ArticleController.create);
router.post('/store', isLoggedIn, ArticleController.store);
router.post('/edit/:id', isLoggedIn, ArticleController.edit);
router.post('/update/:id', isLoggedIn, ArticleController.update);
router.get('/destroy/:id', isLoggedIn, ArticleController.destroy);

module.exports = router;

