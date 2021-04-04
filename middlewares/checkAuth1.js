const jwt = require('jsonwebtoken');

const checkAuth1 = (req, res, next) => {

    /*const authHeader = String(req.headers['authorization'] || '');
    if (authHeader.startsWith('Bearer ')) {
        const token = authHeader.substring(7, authHeader.length);
        const payload = jwtDecode(token) as JwtPayload;
    }
*/
    //const bearerToken = String(req.headers['authorization']);
    //const token = String(req.headers['authorization']);
    //const token = req.headers.authorization;
    const authorizationHeaader = req.headers.authorization;
    let result;
/*    console.log(bearerToken);*/
    //const token = bearerToken.split("Bearer ").toString();
    //console.log(token);
    //const Accept = req.headers[{'Accept': 'application/json'}];
    if(authorizationHeaader)
    {
        const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
        const options = {
            expiresIn: '2d',
        }
        try {
            // verify makes sure that the token hasn't expired and has been issued by us
            result = jwt.verify(token, 'SECRET', options);

            // Let's pass back the decoded token to the request object
            req.decoded = result;
            // We call next to pass execution to the subsequent middleware
            next();
        } catch (err) {
            // Throw an error just in case anything goes wrong with verification
            throw new Error(err);
        }
    } else {
        result = {
            error: `Authentication error. Token required.`,
            status: 401
        }
        res.status(401).send(result);
    }
/*    if(token) {
        jwt.verify(token, 'SECRET', (err) => {
            next();
            if (err) {
                console.log(err.message);
                return res.status(403)
                    .json({
                        state: false,
                        message: "Forbidden",
                        data: null,
                    });
            }
            else
            {
                return next();
                /!*return res.status(200)
                    .json({
                        state: true,
                        message: "success",
                        data: null,
                    });*!/
            }
        });
    }
    else
    {
        return res.status(403)
            .json({
                state: false,
                message: "Forbidden!",
                data: null,
            });
    }
        return next();
        */
};

module.exports = checkAuth1;
