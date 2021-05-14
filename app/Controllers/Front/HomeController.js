const Product = require('../../Models/ProductModel');
const Chat = require('../../Models/ChatModel');
const isLoggedIn = require('../../../middlewares/sessions/isLoggedIn');

const HomeController = {
    index
};

async function index(req, res) {
    try {
        const products = await Product.findAll();
        const chats = await Chat.findAll();
        res.render("front/home", {
            pageTitle: "view all products",
            products: products,
            chats: chats,
            isLoggedIn: isLoggedIn
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = HomeController;
