const Product = require('../../Models/Product');
const productRequestValidation = require('../../../app/RequestsValidations/productRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../../app/Exceptions/Handler');

const ProductController = {

    index: async (req, res) => {
        const products = Product.findAll();
        try {
            await res.render("panel/products", {
                pageTitle: "view all products",
                products: products
            })
        } catch (err) {
            console.log(err)
        }
    },

    create: async (req, res) => {
        try {
            await res.render("panel/products/create", {
                pageTitle: ""
            })
        } catch (err) {
            console.log(err)
        }
    },

    store: async (req, res) => {
        const validate = v.validate(req.body, productRequestValidation);
        if (validate) {
            try {
                await Product.create(req.body);
                res.redirect("panel/product")
            } catch (err) {
                return Handler.Error_503();
            }
        } else {
            res.render("panel/product/create", {
                pageTitle: 'product create',
                //path: "/register",
                errors: validate,
            });
        }
    },
    show: (req, res) => {
    },
    edit: (req, res) => {
    },
    update: (req, res) => {
    },
    destroy: (req, res) => {
    },
};

module.exports = ProductController;
