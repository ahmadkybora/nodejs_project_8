const jwt = require('jsonwebtoken');

async function generateAccessToken(username, id) {
    const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET);
    return jwt.sign({
        username: username,
        id: id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, 'TOP_SECRET', { expiresIn: 60 * 60 });
}

module.exports = generateAccessToken();
