const express = require('express');
const router = express.Router();
const EmployeeController = require('../../app/Controllers/Panel/EmployeeController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

/*const checkAuth = require('../../middlewares/checkAuth');

router.get('/', checkAuth, EmployeeController.index);
router.get('/:id', checkAuth, EmployeeController.show);
router.post('/', checkAuth, EmployeeController.store);
router.patch('/:id', checkAuth, EmployeeController.update);
router.delete('/:id', checkAuth, EmployeeController.destroy);*/


router.get('/', isLoggedIn, EmployeeController.index);
router.get('/:id', isLoggedIn, EmployeeController.show);
router.get('/create', isLoggedIn, EmployeeController.create);
router.post('/', isLoggedIn, EmployeeController.store);
router.patch('/:id', isLoggedIn, EmployeeController.update);
router.delete('/:id', isLoggedIn, EmployeeController.destroy);

module.exports = router;

