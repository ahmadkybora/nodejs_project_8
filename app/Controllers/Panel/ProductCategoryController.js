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
    const page = +req.query.page || 1;
    const perPage = 1;

    try {
        const numberOfEmployees = await ProductCategory.findAndCountAll();
        const categories = await ProductCategory.findAll({include: Brand}, {
            limit: perPage, offset: ((page - 1) * perPage)
        });

        res.render("panel/product-categories", {
            title: "Product Categories",
            categories: categories,
            currentPage: page,
            nextPage: page + 1,
            previousPage: page - 1,
            hasNextPage: perPage * (page < numberOfEmployees.count),
            hasPreviousPage: page > 1,
            lastPage: Math.ceil(numberOfEmployees.count / perPage),
        })

    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        const brands = await Brand.findAll();
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
        console.log(req.body);
        const {name, image, status, brand_id} = req.body;
        await ProductCategory.create({
                name,
                image,
                status,
                brandId: brand_id
            }, {
                include: {
                    model: Brand
                }
            }
        );
        res.redirect("/panel/product-categories")
    } catch (err) {
        console.log(err);
        //return Handler.Error_503();
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
        const brands = await Brand.findAll();
        const category = await ProductCategory.findByPk(req.params.id, {include: Brand});
        console.log(category);
        res.render('panel/product-categories/edit', {
            title: "editEmployees",
            category: category,
            brands: brands,
        });
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
