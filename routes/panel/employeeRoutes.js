const express = require('express');
const router = express.Router();
const EmployeeController = require('../../app/Controllers/Panel/EmployeeController');

router.get('/', EmployeeController.index);
router.get('/:id', EmployeeController.show);
router.post('/', EmployeeController.store);
router.patch('/:id', EmployeeController.update);
router.delete('/:id', EmployeeController.destroy);

module.exports = router;

