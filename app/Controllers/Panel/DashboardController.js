//const isLoggedIn = require('../../../middlewares/sessions/isLoggedIn');

const DashboardController = {
    index
};

function index(req, res) {
    res.render("panel/dashboard");
}

module.exports = DashboardController;
