const sessionAuth = (req, res, next) => {
    console.log(req.session.user);
    //console.log(req.cookies.user_id);
    if (req.session.user && req.cookies.user_id) {
        res.redirect('/dashboard');
    } else {
        next();
    }
};

module.exports = sessionAuth;

