const User = require('../../Models/UserModel');

const EmployeeController = {
    index,
    show,
    create,
    store,
    edit,
    update,
    destroy,
};

function index(req, res){
    User.findAll()
        .then(users => {
            res.json({
                state: true,
                message: "success",
                data: users,
            })
        }).catch(err => {
        console.log(err)
    });
}

function show(req, res){
}

function create(req, res){
}

function store(req, res){
}

function edit(req, res){
}

function update(req, res){
}

function destroy(req, res){
}


module.exports = EmployeeController;
