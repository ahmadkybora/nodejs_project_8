const Product = require('../../Models/ProductModel');
const ProductCategory = require('../../Models/ProductCategory');
const productRequestValidation = require('../../../app/RequestsValidations/productRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../../app/Exceptions/Handler');

const ProductController = {
    index,
    show,
    create,
    store,
    edit,
    update,
    destroy,
};

async function index(req, res) {
    try {
        const products = await Product.findAll();
        res.render("panel/products", {
            title: "displayEmployees",
            products: products,
        });

    } catch (err) {
        //Handler.baseError(err);
        console.log(err)
    }
}

async function create(req, res) {
    try {
        const categories = await ProductCategory.findAll();
        console.log(categories);
        res.render("panel/products/create", {
            pageTitle: "",
            categories: categories
        })
    } catch (err) {
        console.log(err)
    }
}

async function store(req, res) {
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
}

async function show(req, res) {
}

async function edit(req, res) {
}

async function update(req, res) {
}

async function destroy(req, res) {
};

module.exports = ProductController;
