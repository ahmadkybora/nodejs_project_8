const Brand = require('../../Models/BrandModel');
const brandRequestValidation = require('../../../app/RequestsValidations/brandRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();

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
    try{
        const brands = await Brand.findAll();
        res.render('panel/brands', {
            title: 'brands',
            brands: brands
        })
    }catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    await res.render('panel/brands/create', {
        title: 'brand create',
    })
}
async function store(req, res) {
    const validate = v.validate(req.body, brandRequestValidation);
    console.log(validate);
}
async function show(req, res) {}
async function edit(req, res) {}
async function update(req, res) {}
async function destroy(req, res) {}

module.exports = BrandController;
