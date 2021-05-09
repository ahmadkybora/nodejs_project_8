const Article = require('../../Models/Product');
const articleRequestValidation = require('../../../app/RequestsValidations/articleRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../../app/Exceptions/Handler');

const ArticleController = {
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy
};

async function index(req, res) {
    const articles = await Article.findAll();
    try {
        res.render("panel/article", {
            pageTitle: "",
            articles: articles,
        })
    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        await res.render("panel/article/create", {
            pageTitle: "",
        })
    } catch (err) {
        console.log(err)
    }
}

async function store(req, res) {
    const validate = v.validate(req.body, articleRequestValidation);
    if (validate) {
        try {
            await Article.create(req.body);
            res.redirect("panel/article")
        } catch (err) {
            return Handler.Error_503();
        }
    } else {
        res.render("panel/article/create", {
            pageTitle: 'article create',
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

module.exports = ArticleController;
