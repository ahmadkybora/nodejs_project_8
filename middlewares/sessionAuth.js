const sessionAuth = (username) => {
    if (username)
        return username;
    return null;
};

module.exports = sessionAuth;
