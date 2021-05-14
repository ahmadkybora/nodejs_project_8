const Article = require('../../Models/ArticleModel');
const ArticleCategory = require('../../Models/ArticleCategory');
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
        res.render("panel/articles", {
            pageTitle: "",
            articles: articles,
        })
    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        const categories = await ArticleCategory.findAll();
        await res.render("panel/articles/create", {
            pageTitle: "",
            categories: categories
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
        res.render("panel/articles/create", {
            pageTitle: 'article create',
            errors: validate,
        });
    }
}

async function show(req, res) {
}

async function edit(req, res) {
    try {
        const article = Article.findByPk(req.params.id);
        res.render("panel/articles/edit", {
            pageTitle: 'article create',
            article: article,
        });
    }catch (err) {
       console.log(err)
    }
}

async function update(req, res) {
    try {
        Article.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        res.redirect('/panel/articles')
    }catch (err) {
        console.log(err)
    }
}

async function destroy(req, res) {
    try {
        Article.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/panel/articles')
    }catch (err) {
        console.log(err)
    }
}

module.exports = ArticleController;
