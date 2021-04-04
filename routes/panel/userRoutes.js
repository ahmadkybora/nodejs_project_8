const express = require('express');
const router = express.Router();
const UserController = require('../../app/Controllers/Panel/UserController');
const checkAuth = require('../../middlewares/checkAuth');

router.get('/', checkAuth, UserController.index);
router.get('/:id', checkAuth, UserController.show);
router.post('/', checkAuth, UserController.create);
router.post('/', checkAuth, UserController.store);
router.get('/:id', checkAuth, UserController.edit);
router.patch('/:id', checkAuth, UserController.update);
router.delete('/:id', checkAuth, UserController.destroy);

module.exports = router;
