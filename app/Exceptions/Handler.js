const Handler = {
    Error_401,
    Error_403,
    Error_404,
    Error_500,
    Error_503,
};

function Error_401(req, res) {
    console.log("ok");
    res.render("errors/401", {
        path: 'errors/401',
        statusCode: 401,
        message: 'Unauthorized',
        img: '../../public/img/'
    });
}

async function Error_403(req, res) {
    await res.render("errors/403", {
        path: 'errors/403',
        statusCode: 403,
        message: 'Forbidden',
        img: '../../public/img/'
    });
}

async function Error_404(req, res) {
    await res.render("errors/404", {
        path: '/404',
        statusCode: 404,
        message: 'Not Found',
        img: '../../public/img/'
    });
}

async function Error_500(req, res) {
    await res.render("errors/500", {
        path: 'errors/500',
        statusCode: 500,
        message: 'Not Found',
        img: '../../public/img/'
    });
}

async function Error_503(req, res) {
    await res.render("errors/503", {
        path: 'errors/503',
        statusCode: 503,
        message: 'Service is Unavailable',
        img: '../../public/img/'
    });
}

module.exports = Handler;
