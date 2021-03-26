const express = require('express');
const router = express.Router();
const ProductController = require('../../app/Controllers/Panel/ProductController');

router.get('/', ProductController.index);
router.get('/:id', ProductController.show);
router.post('/', ProductController.create);
router.post('/', ProductController.store);
router.get('/:id', ProductController.edit);
router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.destroy);

module.exports = router;
