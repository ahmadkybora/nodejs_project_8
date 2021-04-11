const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    const authorizationHeader = req.headers.authorization;
    let result;

    if (authorizationHeader) {
        const token = req.headers.authorization.split(' ')[1];
        const options = {
            expiresIn: '2d',
        };
        try {
            result = jwt.verify(token, 'SECRET', options);
            req.decoded = result;
            next();
        } catch (err) {
            throw new Error(err);
        }
    } else {
        /*result = {
            error: `Authentication error. Token required.`,
            status: 401
        };
        res.status(401).send(result);*/
        res.redirect('/login')
    }
};

module.exports = checkAuth;
