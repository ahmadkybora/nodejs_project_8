const express = require('express');
const router = express.Router();
const HomeController = require('../../app/Controllers/Front/HomeController');

router.get('/', HomeController.index);

module.exports = router;
