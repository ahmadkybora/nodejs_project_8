const router = require('express').Router();
const AuthController = require('../../app/Controllers/Auth/AuthController');
//const authenticateToken = require('../../middlewares/authenticateToken');

router.get('/login', AuthController.showLoginForm);
router.post('/login', AuthController.login);
router.get('/register', AuthController.showRegisterForm);
router.post('/register', AuthController.register);
router.get('/logout', AuthController.logout);

module.exports = router;



