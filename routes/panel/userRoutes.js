const express = require('express');
const router = express.Router();
const UserController = require('../../app/Controllers/Panel/UserController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');
const Yup = require('yup');

const schema = Yup.object().shape({
    first_name: Yup.string()
        .required("نام الزامی است")
        .min(4, "نام نباید کمتر از 4 حرف باشد")
        .max(255, "نام خانوادگی نباید کمتر از 4 حرف باشد"),

    last_name: Yup.string().required("نام خانوادگی الزامی است").min(4).max(255),
    email: Yup.string().email("ایمیل اشتباه است").required("ایمیل الزامی است"),
    password: Yup.string().required("رمز عبور الزامی است").min(8).max(255),
    confirmation_password: Yup.string().required().oneOf([Yup.ref("password"), null]),
});

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
