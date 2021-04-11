const express = require('express');
const router = express.Router();
const UserController = require('../../app/Controllers/Panel/UserController');
const checkAuth = require('../../middlewares/checkAuth');
//const sessionAuth = require('../../../middlewares/sessionAuth');

router.get('/', UserController.index);
router.get('/:id', UserController.show);
router.post('/', UserController.create);
router.post('/', UserController.store);
router.get('/edit/:id', UserController.edit);
router.post('/update/:id', UserController.update);
router.delete('/:id', UserController.destroy);

/*router.get('/', checkAuth, UserController.index);
router.get('/:id', checkAuth, UserController.show);
router.post('/', checkAuth, UserController.create);
router.post('/', checkAuth, UserController.store);
router.get('/:id', checkAuth, UserController.edit);
router.patch('/:id', checkAuth, UserController.update);
router.delete('/:id', checkAuth, UserController.destroy);*/

module.exports = router;
