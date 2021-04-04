const express = require('express');
const router = express.Router();
const EmployeeController = require('../../app/Controllers/Panel/EmployeeController');
const checkAuth = require('../../middlewares/checkAuth');

router.get('/', checkAuth, EmployeeController.index);
router.get('/:id', checkAuth, EmployeeController.show);
router.post('/', checkAuth, EmployeeController.store);
router.patch('/:id', checkAuth, EmployeeController.update);
router.delete('/:id', checkAuth, EmployeeController.destroy);

module.exports = router;

