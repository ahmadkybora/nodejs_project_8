const User = require('../../Models/UserModel');
//const mongoose = require('mongoose');
//const EmployeeDB = mongoose.model('Employees');
const Handler = require('../../../app/Exceptions/Handler');
const userRequestValidation = require('../../../app/RequestsValidations/userRequestValidation');

exports.index = (req, res) => {

    /*res.render("panel/users", {

    });*/

    User.findAll()
        .then(users => {
            res.render("panel/users", {
                users: users
            })
        }).catch(err => {
        console.log(err)
    });

/*    User.findAll()
        .then(users => {
            res.json({
                state: true,
                message: "success",
                data: users,
            })
        }).catch(err => {
        console.log(err)
    });*/

    /*EmployeeDB.find()
        .then(employees => {
            res.send(employees);
        });*/
};

exports.show = async (req, res) => {
    /*EmployeeDB.findOne({
        _id: req.params.id
    }).then(employee => {
        res.send(employee);
    })*/

    try {
        const user = await User.findByPk(req.params.id);
        res.render("panel/users/show", {
            state: true,
            message: "success",
            user: user,
        });

    } catch (err) {
        Handler.baseError(err);
    }

/*
    await User.findByPk(req.params.id)
        .then(user => {
            res.json({
                state: true,
                message: "success",
                data: user,
            })
        }).catch(err => {
            console.log(err)
        });
*/

};

exports.create = (req, res) => {
    res.render('panel/users/create');
};

exports.store = async (req, res) => {
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    userRequestValidation.validate(newUser);
console.log(userRequestValidation.validate(newUser))
    await User.create(newUser)
        .then(user => {
            if(user)
                res.redirect("/panel/users")
        })
        .catch(err => {
            console.log(err)
        });
};

exports.edit = async (req, res) => {
    await User.findByPk(req.params.id)
        .then(user => {
            res.render('panel/users/edit', {
                user: user
            });
        }).catch(err => {
            console.log(err)
        });
};

exports.update = async (req, res) => {
    try {
        await User.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/panel/users')
    }catch (err) {
        console.log(err)
    }
};

exports.destroy = async (req, res) => {
    try {
        await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/panel/users')
    } catch (err) {
        console.log(err)
    }
};
