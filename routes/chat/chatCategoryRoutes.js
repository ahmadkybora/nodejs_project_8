const express = require('express');
const router = express.Router();
const ChatCategoryController = require('../../app/Controllers/Chat/ChatCategoryController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ChatCategoryController.index);
router.get('/:id', isLoggedIn, ChatCategoryController.show);
router.get('/create', isLoggedIn, ChatCategoryController.create);
router.post('/store', isLoggedIn, ChatCategoryController.store);
router.get('/edit/:id', isLoggedIn, ChatCategoryController.edit);
router.post('/update/:id', isLoggedIn, ChatCategoryController.update);
router.get('/destroy/:id', isLoggedIn, ChatCategoryController.destroy);

module.exports = router;
