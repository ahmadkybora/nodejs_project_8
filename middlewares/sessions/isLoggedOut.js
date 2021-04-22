const isLoggedOut = (req, res, next) => {
    if(req.session.isLoggedIn){
        res.redirect('back');
    }else {
        next();
    }
};

module.exports = isLoggedOut;

