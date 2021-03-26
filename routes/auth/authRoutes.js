const express = require('express');
const router = express.Router();
const AuthController = require('../../app/Controllers/Auth/AuthController');

router.get('/login', AuthController.showLoginForm);
router.get('/login', AuthController.login);
router.get('/register', AuthController.showRegisterForm);
router.post('/register', AuthController.register);
router.get('/logout', AuthController.logout);

module.exports = router;
