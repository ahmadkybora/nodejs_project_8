const Chat = require('../../Models/ChatModel');

const ChatController = {
    index: async (req, res) => {
        await Chat.findAll()
            .then(chats => {
                res.json({
                    state: true,
                    message: "success",
                    data: chats,
                })
            }).catch(err => {
                console.log(err)
            });
    },

    create: (req, res) => {
    },

    store: async (req, res) => {
        const newChat = {username, title, description} = req.body;

        await Chat.create(newChat)
            .then(chats => {
                res.json({
                    state: true,
                    message: "success",
                    data: chats,
                })
            }).catch(err => {
                console.log(err)
            });
    },

    show: async (req, res) => {
        await Chat.findByPk(req.params.id)
            .then(chat => {
                res.json({
                    state: true,
                    message: "success",
                    data: chat,
                })
                    .catch(err => {
                        console.log(err)
                    })
            })
    },

    edit: async (req, res) => {
        await Chat.findByPk(req.params.id)
            .then(chat => {
                res.json({
                    state: true,
                    message: "success",
                    data: chat,
                })
            })
            .catch(err => {
                console.log(err)
            })
    },

    update: async (req, res) => {

        const updateChat = {
            first_name,
            last_name,
            username,
            email,
            password,
        } = req.body;

        await Chat.update(updateChat, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            Chat.findByPk(req.params.id)
                .then(chat => {
                    res.json({
                        state: true,
                        message: "success",
                        data: chat,
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        })
    },

    destroy: async (req, res) => {
        await Chat.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.json({
                state: true,
                message: "success",
                data: null,
            })
        })
        .catch(err => {
            console.log(err)
        })
    },
};

module.exports = ChatController;
