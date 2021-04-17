const Employee = require('../../Models/EmployeeModel');
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
        Handler.baseError(err);
        console.log(err)
    }
}

async function show(req, res){
    try {
        const employee = await Employee.findByPk(req.params.id);
        res.render("panel/employees/show", {
            employee: employee
        })
    }catch (err) {
        Handler.baseError(err);
    }
}

async function create(req, res){
    await res.render('panel/employees/create',             {
        title: 'Register'
    });
}

async function store (req, res){
    const newEmployee = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    try {
        await Employee.create(newEmployee)
        res.redirect("/panel/employees")
    } catch (err) {
        console.log(err)
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
    const updateEmployee = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    try {
        await Employee.update(updateEmployee, {
            where: {
                id: req.params.id
            }
        });
        await Employee.findByPk(req.params.id);
        res.redirect("/panel/employees")
    } catch (err) {
        console.log(err)
    }
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
