const DashboardController = {
    index
};

function index(req, res) {
    //console.log(req.session.isLoggedIn);
    res.render("panel/dashboard", {
        isLoggedIn: req.session.isLoggedIn,
    })
}

module.exports = DashboardController;
