require('dotenv').config();

/*require('./node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./node_modules/bootstrap/dist/js/bootstrap.min.js');
require('./node_modules/jquery/dist/jquery.min.js');
require('./node_modules/popper.js/dist/popper.min.js');*/

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const sequelize = require('./database/connection');
const app = express();
const path = require('path');
const dir = path.basename('/Users/Refsnes/demo_path.js');
const environment = process.env.NODE_ENV; // development
const session = require('express-session');

//const stage = require('./config')[environment];

// Load MongoDBModelscls
//require('./app/MongoDBModels/EmployeeMongo');
//require('./app/MongoDBModels/UserDB');
//require('./helpers/passport');

/*// MongoDB Connection
var mongoURI = 'mongodb://localhost:27017/nodejs_project_7';
// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000 // Timeout after 5s instead of 30s
})
    .then(() => console.log('MongooDb Connected'))
    .catch(err => {
        console.log(err)
    });*/

// Mysql Connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Mysql Connected.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(
    session({
        secret: ['veryimportantsecret','notsoimportantsecret','highlyprobablysecret'],
        name: "secretname",
        cookie: {
            httpOnly: true,
            secure: true,
            sameSite: true,
            maxAge: 600000 // Time is in miliseconds
        },
        resave: false
    })
);

app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'));
app.use(express.static(__dirname + '/node_modules/jquery/dist/jquery.min.js'));
app.use(express.static(__dirname + '/node_modules/popper.js/dist/popper.min.js'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "public")));

app.set('views', path.join(__dirname, 'resources/views'));
app.set("view engine", "ejs");

if (environment !== 'production') {
    app.use(logger('dev'));
}

/*// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());*/

const secureRoute = require('./routes/secure-routes');


// Load routes
//app.use('/', require('./routes/front/homeRoutes'));
//app.use('/about', require('./routes/front/homeRoutes'));
app.use('', require('./routes/auth/authRoutes'));
app.use('/panel/dashboard', require('./routes/panel/dashboardRoutes'));
app.use('/panel/employees', require('./routes/panel/employeeRoutes'));
app.use('/panel/users', require('./routes/panel/userRoutes'));
app.use('/panel/products', require('./routes/panel/productRoutes'));
app.use('/panel/chats', require('./routes/chat/chatRoutes'));
//app.use('/api', passport.authenticate('jwt', { session: false }), secureRoute);

const port = process.env.PORT || 8000;
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});

/*app.listen(`${stage.port}`, () => {
    console.log(`Server now listening at localhost:${stage.port}`);
});*/

module.exports = app;
