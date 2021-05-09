const articleCategory = require('../../Models/articleCategory');
const articleCategoryRequestValidation = require('../../../app/RequestsValidations/articleCategoryRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../../app/Exceptions/Handler');

const articleCategoryController = {
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy
};

async function index(req, res) {
    const articles = await articleCategory.findAll();
    try {
        res.render("panel/article-categories", {
            pageTitle: "",
            articles: articles,
        })
    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        await res.render("panel/article-categories/create", {
            pageTitle: "",
        })
    } catch (err) {
        console.log(err)
    }
}

async function store(req, res) {
    const validate = v.validate(req.body, articleCategoryRequestValidation);
    if (validate) {
        try {
            await articleCategory.create(req.body);
            res.redirect("panel/article-categories")
        } catch (err) {
            return Handler.Error_503();
        }
    } else {
        res.render("panel/article-categories/create", {
            pageTitle: 'article-categories create',
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

module.exports = articleCategoryController;
