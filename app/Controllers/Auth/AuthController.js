const User = require('../../Models/UserModel');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
/*require('dotenv').config();
require('env');*/
//const mongoose = require('mongoose');
//const UserDB = mongoose.model('UserDB');

const AuthController = {
    showLoginForm,
    login,
    showRegisterForm,
    register,
    logout,
};

function showLoginForm(req, res){}

async function login(req, res){
    const body = req.body;
    const user = await User.findOne({
        where: {
            username: body.username
        }
    });

    if (user)
    {
        const validPassword = await bcrypt.compare(body.password, user.password);
        if (!validPassword)
        {
            return res.status(422)
                .json({
                    state: false,
                    message: "your passwords is not match",
                    data: null,
                });
        }

        const token = generateAccessToken(user.username, user.id);
        user.token = token;
        user.save();

        if (token)
        {
            return res.status(200)
                .json({
                    state: true,
                    message: "your are logged in",
                    data: {
                        first_name: user.first_name,
                        last_name: user.last_name,
                        username: user.username,
                        token: token,
                    },
                });
        }
    }
    else
    {
        return res.status(422)
            .json({
                state: false,
                message: "User does not exists",
                data: null,
            });
    }
}

function showRegisterForm(req, res){}

async function register(req, res){
    const body = req.body;

    if (body.password !== body.confirmation_password) {
        return res.status(422)
            .json({
                state: false,
                message: "your passwords is not match",
                data: null,
            });
    }

    const user = new User(body);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.save()
        .then(() => {
            return res.status(201)
                .json({
                    state: true,
                    message: "success",
                    data: null,
                });
        })
        .catch(err => {
            console.log(err)
        });
}

function logout(req, res){
    req.logout();
    return res.status(200)
        .json({
            state: true,
            message: "you are logged out",
            data: null,
        });
}

function generateAccessToken(username, id) {
    //const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
    /*const payload = { username: username, id: id};
    const options = { expiresIn: '2d', issuer: 'https://scotch.io' };
    const secret = process.env.JWT_SECRET;
    return jwt.sign(payload, secret, options);*/

    return jwt.sign({
        username: username,
        id: id,
        /*iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)*/
    }, 'SECRET', { expiresIn: '24h' });
}

module.exports = AuthController;
