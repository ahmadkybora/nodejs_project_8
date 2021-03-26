const User = require('../../Models/UserModel');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const AuthController = {
    showLoginForm,
    login,
    showRegisterForm,
    register,
    logout,
};

function showLoginForm(req, res){}

async function login(req, res){
    res.send('oj');
    passport.use('login', new localStrategy(
            {
                usernameField: 'username',
                passwordField: 'password'
            },
            async (username, password, done) => {
                try {
                    const user = await User.findOne({ username });

                    if (!user) {
                        return done(null, false, { message: 'User not found' });
                    }

                    const validate = await user.isValidPassword(password);

                    if (!validate) {
                        return done(null, false, { message: 'Wrong Password' });
                    }

                    return done(null, user, { message: 'Logged in Successfully' });
                } catch (error) {
                    return done(error);
                }
            }
        )
    );
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

function logout(req, res){}

module.exports = AuthController;
