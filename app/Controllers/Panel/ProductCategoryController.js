const ProductCategory = require('../../Models/ProductCategory');
const productCategoryRequestValidation = require('../../../app/RequestsValidations/productCategoryRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../../app/Exceptions/Handler');

const ProductCategoryController = {
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy
};

async function index(req, res) {
    try {
        const categories = await ProductCategory.findAll();
        res.render("panel/product-categories", {
            title: "Product Categories",
            categories: categories,
        })
    }catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        res.render("panel/product-categories/create", {
            title: "Product Categories",
        })
    }catch (err) {
        console.log(err)
    }
}

async function store(req, res) {
    const validate = v.validate(req.body, productCategoryRequestValidation);
    if(validate)
    {
        try {
            await ProductCategoryController.create(req.body);
            res.redirect("panel/product-categories")
        }catch (err) {
            return Handler.Error_503();
        }
    }
    else {
        res.render("panel/product-categories/create", {
            pageTitle: 'product-categories create',
            //path: "/register",
            errors: validate,
        });
    }
}

async function show(req, res) {}
async function edit(req, res) {}
async function update(req, res) {}
async function destroy(req, res) {}

module.exports = ProductCategoryController;
