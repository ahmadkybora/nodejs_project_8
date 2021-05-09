const Brand = require('../../Models/BrandModel');
const brandRequestValidation = require('../../../app/RequestsValidations/brandRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../../app/Exceptions/Handler');

const BrandController = {
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
        const brands = await Brand.findAll();
        res.render('panel/brands', {
            title: 'brands',
            brands: brands
        })
    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        await res.render('panel/brands/create', {
            pageTitle: 'brand create',
        })
    } catch (err) {
        console.log(err)
    }
}

async function store(req, res) {
    const validate = v.validate(req.body, brandRequestValidation);
    if (validate === true) {
        try {
            await Brand.create(req.body);
            res.redirect("/panel/brands");
        } catch (err) {
            console.log(err);
        }
    }
    else {
        res.render("panel/brands/create", {
            pageTitle: 'brand create',
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
}

module.exports = BrandController;
