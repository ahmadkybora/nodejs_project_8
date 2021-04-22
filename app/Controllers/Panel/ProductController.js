const ProductController = {
    index: (req, res) => {
        console.log(req.session.isLoggedIn);
        res.render("panel/products")
    },
    create: (req, res) => {},
    store: (req, res) => {},
    show: (req, res) => {},
    edit: (req, res) => {},
    update: (req, res) => {},
    destroy: (req, res) => {},
};

module.exports = ProductController;
