const User = require('../../Models/UserModel');
//const mongoose = require('mongoose');
//const EmployeeDB = mongoose.model('Employees');

exports.index = (req, res) => {

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

};

exports.create = (req, res) => {
    res.render('/panel/users/create')
};

exports.store = async (req, res) => {
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    await User.create(newUser)
        .then(user => {
            res.json({
                state: true,
                message: "success",
                data: user,
            })
        })
        .catch(err => {
            console.log(err)
        });
};

exports.edit = (req, res) => {
    res.render('/panel/users/edit')
};

exports.update = async (req, res) => {
    const updateUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    };

    await User.update(updateUser, {
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            User.findByPk(req.params.id)
                .then(user => {
                    res.json({
                        state: true,
                        message: "success",
                        data: user,
                    })
                }).catch(err => {
                console.log(err)
            });
        })
        .catch(err => {
            console.log(err)
        })
};

exports.destroy = async (req, res) => {
    await User.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json({
            state: true,
            message: "success",
            data: null,
        })
    })
        .catch(err => {
            console.log(err)
    });
};
