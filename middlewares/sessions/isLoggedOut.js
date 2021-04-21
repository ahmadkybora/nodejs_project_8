const isLoggedOut = (req, res, next) => {
    if(req.session.userId){
        res.redirect('/panel/dashboard');
    }else {
        next();
    }
};

module.exports = isLoggedOut;

