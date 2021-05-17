const Product = require('../../Models/ProductModel');
const Chat = require('../../Models/ChatModel');
const isLoggedIn = require('../../../middlewares/sessions/isLoggedIn');
const captchapng = require('captchapng');
let CAPTCHA_NUM = parseInt(Math.random() * 9000 + 1000);

const HomeController = {
    index,
    getContactUs,
    postContactUs,
    getCaptcha
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

function getContactUs(req, res) {
    res.render("front/home/contact-us");
}

async function postContactUs(req, res) {
    const errArr = [];
    const {first_name, last_name, username, email, captcha, message} = req.body;

    try {
        if (parseInt(captcha) === CAPTCHA_NUM) {
            sendEmail(
                first_name,
                last_name,
                username,
                "پیام از طرف من",
                `${message} <br> ایمیل کاربر : ${email}`);

            return res.render("front/home/contact-us", {
                pageTitle: "",
                path: "/contact-us",
                errors: errArr,
            })
        }
        res.send("no");
    } catch (err) {
        console.log(err);
    }
}

async function getCaptcha(req, res) {
    var p = new captchapng(80, 30, parseInt(Math.random() * 9000 + 1000));
    p.color(0, 0, 0, 0);
    p.color(80, 80, 80, 255);

    var img = p.getBase64();
    var imgbase64 = new Buffer(img, 'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
}

module.exports = HomeController;
