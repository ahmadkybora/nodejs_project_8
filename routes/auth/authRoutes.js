const router = require('express').Router();
const AuthController = require('../../app/Controllers/Auth/AuthController');
//const authenticateToken = require('../../middlewares/authenticateToken');

const isLoggedOut = require('../../middlewares/sessions/isLoggedOut');

router.get('/login', isLoggedOut, AuthController.showLoginForm);
router.post('/login', isLoggedOut, AuthController.login);
router.get('/register', isLoggedOut, AuthController.showRegisterForm);
router.post('/register', isLoggedOut, AuthController.register);
router.get('/logout', AuthController.logout);

module.exports = router;



