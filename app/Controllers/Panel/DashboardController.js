//const isLoggedIn = require('../../../middlewares/sessions/isLoggedIn');
const {formatDate} = require('../../../helpers/jalali');

const DashboardController = {
    index
};

function index(req, res) {
    res.render("panel/dashboard", {
        message: req.flash("success"),
        formatDate,
    });
}

module.exports = DashboardController;

