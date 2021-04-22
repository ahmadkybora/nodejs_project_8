const express = require('express');
const router = express.Router();
const UserController = require('../../app/Controllers/Panel/UserController');
const checkAuth = require('../../middlewares/checkAuth');
//const sessionAuth = require('../../../middlewares/sessionAuth');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, UserController.index);
router.get('/:id', isLoggedIn, UserController.show);
router.get('/create', isLoggedIn, UserController.create);
router.post('/', isLoggedIn, UserController.store);
router.get('/edit/:id', isLoggedIn, UserController.edit);
router.post('/update/:id', isLoggedIn, UserController.update);
router.delete('/:id', isLoggedIn, UserController.destroy);

/*router.get('/', checkAuth, UserController.index);
router.get('/:id', checkAuth, UserController.show);
router.post('/', checkAuth, UserController.create);
router.post('/', checkAuth, UserController.store);
router.get('/:id', checkAuth, UserController.edit);
router.patch('/:id', checkAuth, UserController.update);
router.delete('/:id', checkAuth, UserController.destroy);*/

module.exports = router;
