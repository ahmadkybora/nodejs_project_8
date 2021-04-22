const express = require('express');
const router = express.Router();
const ChatController = require('../../app/Controllers/Chat/ChatController');
const isLoggedIn = require('../../middlewares/sessions/isLoggedIn');

router.get('/', isLoggedIn, ChatController.index);
router.get('/:id', isLoggedIn, ChatController.show);
router.get('/', isLoggedIn, ChatController.create);
router.post('/', isLoggedIn, ChatController.store);
router.get('/:id', isLoggedIn, ChatController.edit);
router.patch('/:id', isLoggedIn, ChatController.update);
router.delete('/:id', isLoggedIn, ChatController.destroy);

module.exports = router;
