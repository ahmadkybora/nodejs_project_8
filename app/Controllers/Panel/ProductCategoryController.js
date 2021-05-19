const ProductCategory = require('../../Models/ProductCategory');
const Brand = require('../../Models/BrandModel');
const productCategoryRequestValidation = require('../../../app/RequestsValidations/productCategoryRequestValidation');
const Validator = require('fastest-validator');
const v = new Validator();
const Handler = require('../../../app/Exceptions/Handler');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const multer = require('multer');
const uuid = require('uuid').v4;
const formidable = require('formidable');

const ProductCategoryController = {
    uploadImage,
    search,
    index,
    create,
    store,
    show,
    edit,
    update,
    destroy
};

async function uploadImage(req, res) {

    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "./public/storage");
        },
        filename: (req, file, callback) => {
            callback(null, `${uuid()}_${file.originalname}`);
        }
    });

    const fileFilter = (req, file, callback) => {
        if (file.mimetype === "image/jpeg") {
            callback(null, true)
        } else {
            callback("just jpeg", false)
        }
    };

    const upload = multer({
        limits: {fileSize: 4000000},
        dest: "storage/",
        storage,
        fileFilter,
    }).single("image");

    upload(req, res, err => {
        if (err) {
            res.send(err)
        } else {
            res.status(200).send("success")
        }
    })
}

async function search(req, res) {
    const {search} = req.body;
    const page = +req.query.page || 1;
    const perPage = 1;

    try {
        const numberOfEmployees = await ProductCategory.findAndCountAll({
            where: {
                name: {
                    [Op.like]: '%' + search + '%'
                }
            }
        });

        const categorySearch = await ProductCategory.findAll({
            where: {
                name: {
                    [Op.like]: '%' + search + '%'
                }
            },
            include: Brand
        }, {
            limit: perPage,
            offset: ((page - 1) * perPage)
        });

        res.render("panel/product-categories", {
            path: '/panel/product-categories/category-search',
            title: "category-Search",
            categorySearch: categorySearch,
            currentPage: page,
            nextPage: page + 1,
            previousPage: page - 1,
            hasNextPage: perPage * (page < numberOfEmployees.count),
            hasPreviousPage: page > 1,
            lastPage: Math.ceil(numberOfEmployees.count / perPage),
            search: true,
        });
    } catch (err) {
        console.log(err)
    }
}

async function index(req, res) {
    const page = +req.query.page || 1;
    const perPage = 1;

    try {
        const numberOfEmployees = await ProductCategory.findAndCountAll();
        const categories = await ProductCategory.findAll({include: Brand}, {
                limit: perPage,
                offset: ((page - 1) * perPage)
            }
        );

        res.render("panel/product-categories", {
            path: '/panel/product-categories',
            title: "Product Categories",
            categories: categories,
            currentPage: page,
            nextPage: page + 1,
            previousPage: page - 1,
            hasNextPage: perPage * (page < numberOfEmployees.count),
            hasPreviousPage: page > 1,
            lastPage: Math.ceil(numberOfEmployees.count / perPage),
            search: false,
        })

    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    try {
        const brands = await Brand.findAll();
        res.render("panel/product-categories/create", {
            title: "Product Categories",
            brands: brands,
        })
    } catch (err) {
        console.log(err)
    }
}

async function store(req, res) {
    /*    const validate = v.validate(req.body, productCategoryRequestValidation);
        if (validate === true) {*/
    try {
        const {name, image, status, brandId} = req.body;

        var form = new formidable.IncomingForm(options);
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });

        await ProductCategory.create({
                name,
                image,
                status,
                brandId
            }, {
                include: {
                    model: Brand
                }
            }
        );
        res.redirect("/panel/product-categories")
    } catch (err) {
        console.log(err);
        //return Handler.Error_503();
    }
    /*    } else {
            res.render("panel/product-categories/create", {
                pageTitle: 'product-categories create',
                //path: "/register",
                errors: validate,
            });
        }*/
}

async function show(req, res) {
}

async function edit(req, res) {
    try {
        const brands = await Brand.findAll();
        const category = await ProductCategory.findByPk(req.params.id, {include: Brand});
        console.log(category);
        res.render('panel/product-categories/edit', {
            title: "editEmployees",
            category: category,
            brands: brands,
        });
    } catch (err) {
        console.log(err)
    }
}

async function update(req, res) {
    try {
        await ProductCategory.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.redirect("/panel/product-categories");
    } catch (err) {
        console.log(err)
    }
}

async function destroy(req, res) {
    try {
        await ProductCategory.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect("/panel/product-categories");
    } catch (err) {
        console.log(err)
    }
}

module.exports = ProductCategoryController;
