const passport = require('passport-local');
const {Strategy} = require('passport-local');
const bcrypt = require('bcrypt');

const User = require('../app/Models/UserModel');

passport.use(new Strategy({usernameField: "email"}, async (email, password, done) => {
    try {
        const user = await User.findOne({email});
        if (!user) {
            return done(null, false, {message: "کاربری نیست"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch)
            return done(null, user);
        return done(null, false, {message: 'نام یا پس'})
        ک
    } catch (err) {

    }
}));

passport.serilizeUser((user, done) => {
    done(null, user)
});

passport.deserilizeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(null, user)
    });
});
