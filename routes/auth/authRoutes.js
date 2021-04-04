const router = require('express').Router();
const AuthController = require('../../app/Controllers/Auth/AuthController');
//const authenticateToken = require('../../middlewares/authenticateToken');

router.get('/login', AuthController.login);

/*router.post('/login', (req, res, next) => {
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
    })
}, AuthController.showLoginForm);*/

router.get('/register', AuthController.showRegisterForm/*, authenticateToken*/);
router.post('/register', AuthController.register);
router.get('/logout', AuthController.logout);

module.exports = router;



