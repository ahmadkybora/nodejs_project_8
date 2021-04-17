const Handler = {
    baseError,
};

async function baseError(req, res) {
    switch (req.body) {
        case '401':
            res.json({
                'statusCode': 401,
                'state': false,
                'message': 'Unauthorized'
            });
            break;

        case '403':
            res.json({
                'statusCode': 403,
                'state': false,
                'message': 'Forbidden'
            });
            break;

        case '404':
            res.json({
                'statusCode': 404,
                'state': false,
                'message': 'Not Found'
            });
            break;

        case '500':
            res.json({
                'statusCode': 500,
                'state': false,
                'message': 'Not Found'
            });
            break;

        case '503':
            res.json({
                'statusCode': 503,
                'state': false,
                'message': 'Service is Unavailable'
            });
            break;

        default:
    }
}


module.exports = Handler;
