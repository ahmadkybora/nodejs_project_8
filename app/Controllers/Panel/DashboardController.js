const isLoggedIn = require('../../../middlewares/sessions/isLoggedIn');

const DashboardController = {
    index
};

function index(req, res) {
    res.render("panel/dashboard")
        .then(() => {
            res.send("layouts/panel/header", {
                isLoggedIn: isLoggedIn
            })
        })
}

module.exports = DashboardController;
