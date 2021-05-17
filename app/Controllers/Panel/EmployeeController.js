const Employee = require('../../Models/EmployeeModel');
const employeeRequestValidation = require('../../../app/RequestsValidations/employeeRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../../app/Exceptions/Handler');
const captchapng = require('captchapng');

const EmployeeController = {
    getCaptcha,
    index,
    show,
    create,
    store,
    edit,
    update,
    destroy,
};

async function getCaptcha(req, res) {
    var p = new captchapng(80, 30, parseInt(Math.random() * 9000 + 1000));
    p.color(0, 0, 0, 0);
    p.color(80, 80, 80, 255);

    var img = p.getBase64();
    var imgbase64 = new Buffer(img, 'base64');
    res.writeHead(200, {
        'Content-Type': 'image/png'
    });
    res.end(imgbase64);
}

async function index(req, res) {
    const page = +req.query.page || 1;
    const perPage = 1;

    try {
        const numberOfEmployees = await Employee.findAndCountAll();
        const employees = await Employee.findAll({
            offset: ((page - 1) * perPage), limit: perPage
        });

        res.render("panel/employees", {
            title: "displayEmployees",
            employees: employees,
            currentPage: page,
            nextPage: page + 1,
            previousPage: page - 1,
            hasNextPage: perPage * page < numberOfEmployees,
            hasPreviousPage: page > 1,
            lastPage: Math.ceil(numberOfEmployees / perPage)
        });

    } catch (err) {
        //Handler.baseError(err);
        console.log(err)
    }
}

async function show(req, res) {
    try {
        const employee = await Employee.findByPk(req.params.id);
        res.render("panel/employees/show", {
            employee: employee
        })
    } catch (err) {
        Handler.baseError(err);
    }
}

async function create(req, res) {
    await res.render('panel/employees/create', {
        title: 'Register'
    });
}

async function store(req, res) {
    const validate = v.validate(req.body, employeeRequestValidation);
    if (validate === true) {
        try {
            await Employee.create(req.body);
            res.redirect("/panel/employees")
        } catch (err) {
            console.log(err)
        }
    } else {
        return res.render("panel/employees/create", {
            pageTitle: "",
            errors: validate,
        })
    }
}

async function edit(req, res) {
    try {
        const employee = await Employee.findByPk(req.params.id);
        res.render('panel/employees/edit', {
            title: "editEmployees",
            employee: employee
        });
    } catch (err) {
        console.log(err)
    }
}

async function update(req, res) {
    /*const validate = v.validate(req.body, employeeRequestValidation);
    if (validate === true) {*/
    try {
        await Employee.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        await Employee.findByPk(req.params.id);
        res.redirect("/panel/employees")
    } catch (err) {
        console.log(err)
    }
    /*} else {
        return res.render("panel/employees/edit", {
            pageTitle: "",
            errors: validate,
        })
    }*/
}

async function destroy(req, res) {
    try {
        await Employee.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/panel/employees")
    } catch (err) {
        console.log(err)
    }
}


module.exports = EmployeeController;
