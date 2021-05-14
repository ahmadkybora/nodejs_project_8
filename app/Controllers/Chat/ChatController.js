const Chat = require('../../Models/ChatModel');
const ChatCategory = require('../../Models/ChatCategoryModel');

const ChatController = {
    index: async (req, res) => {
        try {
            const chats = await Chat.findAll();
            res.render('panel/chats', {
                chats: chats
            })
        } catch (err) {
            console.log(err)
        }
    },

    create: async (req, res) => {
        try {
            const categories = await ChatCategory.findAll();
            res.render('panel/chats/create', {
                categories: categories,
            })
        } catch (err) {
            console.log(err)
        }
    },

    store: async (req, res) => {
        try {
            await Chat.create(req.body);
            res.redirect('/panel/chats');
        } catch (err) {
            console.log(err)
        }
    },

    show: async (req, res) => {
    },

    edit: async (req, res) => {
        try {
            const chat = await Chat.findByPk(req.params.id);
            res.render('panel/chat/edit', {
                chat: chat,
            })
        } catch (err) {
            console.log(err)
        }
    },

    update: async (req, res) => {
        try {
            await Chat.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.redirect('/panel/chats');
        } catch (err) {
            console.log(err)
        }
    },

    destroy: async (req, res) => {
        try {
            await Chat.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.redirect('/panel/chats');
        } catch (err) {
            console.log(err)
        }
    },
};

module.exports = ChatController;
