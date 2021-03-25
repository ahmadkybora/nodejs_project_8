const express = require('express');
const router = express.Router();
const UserController = require('../../app/Controllers/Panel/UserController');

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.store);
router.patch('/:id', UserController.update);
router.delete('/:id', UserController.destroy);

module.exports = router;
