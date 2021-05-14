const Chat = require('../../Models/ChatModel');
//const chatRequestValidation = require('../../../app/RequestsValidations/chatRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../Exceptions/Handler');

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
        const chats = await Chat.findAll();
        res.render('panel/brands', {
            title: 'brands',
            brands: chats
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
    /*    const validate = v.validate(req.body, brandRequestValidation);
        if (validate === true) {*/
    try {
        await Brand.create(req.body);
        res.redirect("/panel/brands");
    } catch (err) {
        console.log(err);
    }
    /*}
    else {
        res.render("panel/brands/create", {
            pageTitle: 'brand create',
            //path: "/register",
            errors: validate,
        });
    }*/
}

async function show(req, res) {
}

async function edit(req, res) {
    try {
        const brand = await Brand.findByPk(req.params.id);
        res.render("panel/brands/edit", {
            pageTitle: "",
            brand: brand
        })
    }catch (err) {
        console.log(err)
    }
}

async function update(req, res) {
    try {
        await Brand.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/panel/brands')
    }catch (err) {
        console.log(err)
    }
}

async function destroy(req, res) {
    try {
        await Brand.destroy({
            where: {
                id: req.params.id
            }
        });
    }catch (err) {
        console.log(err)
    }

    res.redirect("/panel/brands");
}

module.exports = BrandController;
