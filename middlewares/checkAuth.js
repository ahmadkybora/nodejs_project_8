const jwt = require('jsonwebtoken');

async function checkAuth(req, res, next) {
    const bearerToken = req.headers['authorization'];
    if(bearerToken) {
        jwt.verify(bearerToken, 'SECRET', (err) => {
            if (err) {
                console.log(err.message)
                res.redirect('/login')
            }
            else{
                next();
            }
        });
    }
    else{
        res.redirect('/login')
    }
        return next();
}
