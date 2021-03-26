const express = require('express');
const router = express.Router();
const ChatController = require('../../app/Controllers/Chat/ChatController');

router.get('/', ChatController.index);
router.get('/:id', ChatController.show);
router.get('/', ChatController.create);
router.post('/', ChatController.store);
router.get('/:id', ChatController.edit);
router.patch('/:id', ChatController.update);
router.delete('/:id', ChatController.destroy);

module.exports = router;
