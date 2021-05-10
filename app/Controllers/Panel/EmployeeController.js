const Employee = require('../../Models/EmployeeModel');
const employeeRequestValidation = require('../../../app/RequestsValidations/employeeRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../../app/Exceptions/Handler');

const EmployeeController = {
    index,
    show,
    create,
    store,
    edit,
    update,
    destroy,
};

async function index(req, res) {
    try {
        const employees = await Employee.findAll();
        res.render("panel/employees", {
            title: "displayEmployees",
            employees: employees,
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
