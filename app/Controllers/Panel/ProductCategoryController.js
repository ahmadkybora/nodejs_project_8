const ProductCategory = require('../../Models/ProductCategory');
const Brand = require('../../Models/BrandModel');
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
    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        const brands = Brand.findAll();
        res.render("panel/product-categories/create", {
            title: "Product Categories",
            brands: brands,
        })
    } catch (err) {
        console.log(err)
    }
}

async function store(req, res) {
/*    const validate = v.validate(req.body, productCategoryRequestValidation);
    if (validate === true) {*/
        try {
            await ProductCategory.create(req.body);
            res.redirect("/panel/product-categories")
        } catch (err) {
            return Handler.Error_503();
        }
/*    } else {
        res.render("panel/product-categories/create", {
            pageTitle: 'product-categories create',
            //path: "/register",
            errors: validate,
        });
    }*/
}

async function show(req, res) {
}

async function edit(req, res) {
    try {
        const category = await ProductCategory.findByPk(req.params.id);
        res.render("panel/product-categories", {
            category: category
        })
    } catch (err) {
        console.log(err)
    }
}

async function update(req, res) {
    try {
        await ProductCategory.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/panel/product-categories");
    } catch (err) {
        console.log(err)
    }
}

async function destroy(req, res) {
    try {
        await ProductCategory.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/panel/product-categories");
    } catch (err) {
        console.log(err)
    }
}

module.exports = ProductCategoryController;
