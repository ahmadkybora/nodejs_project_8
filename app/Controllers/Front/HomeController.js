const Product = require('../../Models/ProductModel');
const isLoggedIn = require('../../../middlewares/sessions/isLoggedIn');

const HomeController = {
    index
};

async function index(req, res) {
    try {
        const products = await Product.findAll();
        res.render("front/home", {
            pageTitle: "view all products",
            products: products,
            isLoggedIn: isLoggedIn
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = HomeController;
