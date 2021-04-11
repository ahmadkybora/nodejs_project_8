const express = require('express');
const router = express.Router();
const DashboardController = require('../../app/Controllers/Panel/DashboardController');

router.get('/', DashboardController.index);

module.exports = router;
