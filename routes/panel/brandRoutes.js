const express = require('express');
const router = express.Router();
const BrandController = require('../../app/Controllers/Panel/BrandController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, BrandController.index);
//router.get('/:id', isLoggedIn, BrandController.show);
router.get('/create', isLoggedIn, BrandController.create);
router.post('/store', isLoggedIn, BrandController.store);
router.get('/edit/:id', isLoggedIn, BrandController.edit);
router.post('/update/:id', isLoggedIn, BrandController.update);
router.get('/destroy/:id', isLoggedIn, BrandController.destroy);

module.exports = router;

