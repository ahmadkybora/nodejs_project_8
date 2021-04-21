const express = require('express');
const router = express.Router();
const ProductController = require('../../app/Controllers/Panel/ProductController');
//const checkAuth = require('../../middlewares/checkAuth');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ProductController.index);
router.get('/:id', ProductController.show);
router.post('/', ProductController.create);
router.post('/', ProductController.store);
router.get('/:id', ProductController.edit);
router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.destroy);

/*router.get('/', checkAuth, ProductController.index);
router.get('/:id', checkAuth, ProductController.show);
router.post('/', checkAuth, ProductController.create);
router.post('/', checkAuth, ProductController.store);
router.get('/:id', checkAuth, ProductController.edit);
router.patch('/:id', checkAuth, ProductController.update);
router.delete('/:id', checkAuth, ProductController.destroy);*/

module.exports = router;
