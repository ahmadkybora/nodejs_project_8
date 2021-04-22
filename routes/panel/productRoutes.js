const express = require('express');
const router = express.Router();
const ProductController = require('../../app/Controllers/Panel/ProductController');
//const checkAuth = require('../../middlewares/checkAuth');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ProductController.index);
router.get('/:id', isLoggedIn, ProductController.show);
router.post('/', isLoggedIn, ProductController.create);
router.post('/', isLoggedIn, ProductController.store);
router.get('/:id', isLoggedIn, ProductController.edit);
router.patch('/:id', isLoggedIn, ProductController.update);
router.delete('/:id', isLoggedIn, ProductController.destroy);

/*router.get('/', checkAuth, ProductController.index);
router.get('/:id', checkAuth, ProductController.show);
router.post('/', checkAuth, ProductController.create);
router.post('/', checkAuth, ProductController.store);
router.get('/:id', checkAuth, ProductController.edit);
router.patch('/:id', checkAuth, ProductController.update);
router.delete('/:id', checkAuth, ProductController.destroy);*/

module.exports = router;
