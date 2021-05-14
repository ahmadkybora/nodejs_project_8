const express = require('express');
const router = express.Router();
const ChatController = require('../../app/Controllers/Chat/ChatCategoryController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ChatController.index);
router.get('/show/:id', isLoggedIn, ChatController.show);
router.get('/create/', isLoggedIn, ChatController.create);
router.post('/store', isLoggedIn, ChatController.store);
router.get('/edit/:id', isLoggedIn, ChatController.edit);
router.post('/update/:id', isLoggedIn, ChatController.update);
router.get('/destroy/:id', isLoggedIn, ChatController.destroy);

module.exports = router;

