//require('dotenv').config();

// this module for log
/*const morgan = require('morgan');
if(process.env.NODE_ENV === 'development'){
    app.use(morgan("dev"));
}*/
// this module for varable mohiti in system amel os
/*const dotEnv = require('dotenv');
dotEnv.config({path: './env'});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is : ${process.env.NODE_ENV} and is ${PORT}`));*/

/*require('./node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./node_modules/bootstrap/dist/js/bootstrap.min.js');
require('./node_modules/jquery/dist/jquery.min.js');
require('./node_modules/popper.js/dist/popper.min.js');*/
const debug = require('debug')('nodejs_project_8');
const express = require('express');
//const expressLayout = require('express-ejs-layouts');
const logger = require('morgan');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const passport = require('passport');
require('./config/passport');
const sequelize = require('./database/connection');
const app = express();
const path = require('path');
const dir = path.basename('/Users/Refsnes/demo_path.js');
const environment = process.env.NODE_ENV; // development
const mongoose = require('mongoose');
const fs = require('fs');
const flash =require('connect-flash');
const session = require('express-session');
const TWO_HOURS = 1000 * 60 * 60 * 2;
const {
    PORT = 8000,
    NODE_ENV = 'development',
    SESS_LIFETIME = TWO_HOURS,
    SESS_NAME = 'sid',
    SESS_SECRET = 'ssh!quit,it\'asecret!',
} = process.env;
const IN_PROD = NODE_ENV === 'production';
//const MongoStore = require('connect-mongo')(session);




/////////////////////////////////////////////////

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/a', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
const Chat = require('./app/Models/ChatModel');

io.on('connection', (socket) => {
    const chats = Chat.findAll();
    socket.on('display', (chats) => {
        io.emit('display', chats);
    });
    /*con.query('SELECT * FROM users',function(err,rows){
        if(err) throw err;
        console.log('Data received from Db:\n');
        console.log(rows);
        socket.emit('showrows', chats);
    });*/

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});


/*const express = require('express');
const app = express();*/

/*const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);*/

/*app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});*/

/*server.listen(3000, () => {
    console.log('listening on *:3000');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' });
io.on('connection', (socket) => {
    socket.broadcast.emit('hi');
});
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});*/

/*const express = require('express');
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const http = require('http').createServer(app);
const io = require('socket.io')(http);
io.on('connection', socket => {
    console.log('connection socket');

    socket.on('sendMessage', msg => {
        //console.log(msg);
        socket.broadcast.emit('sendToAll', msg)
    })
});*/
/////////////////////////////////////////////////

/*io.on('connection', function (socket) {

    socket.emit('welcome', { data: 'welcome' });

    socket.on('new' , function(data) {
        console.log('About to upload Quote')
        io.sockets.emit( 'next' , { data : data } )
    })
});*/













//app.use(expressLayout);
app.use(session({
    name: SESS_NAME,
    resave: true,
    saveUninitialized: true,
    secret: SESS_SECRET,
    cookie: {
        maxAge: SESS_LIFETIME,
        sameSite: true,
        secure: IN_PROD
    },
    //store: new MongoStore({mongooseConnection: mongoose.connection})
}));
debug("Connected To Database");
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//const ejsLint = require('ejs-lint');
//app.use(ejsLint);
/*app.get('/', (req, res) => {
    const userId = req.session;
    console.log(userId)
})*/
/*const session = require('express-session');
app.use(session({
    key: 'user_id',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));*/
const winston = require('./config/winston');
if(process.env.NODE_ENV === "development") {
    debug("MOrgan Enabled");
    app.use(morgan("combine", {stream: winston.stream}))
}
/*app.use(
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
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 600000}
}));
app.get('/', (req, res) => {
    console.log(`session: ${req.session.page_views}`);
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`you ${req.session.page_views}`);
    }
    else {
        req.session.page_views = 1;
        res.send(`welcome`);
    }
});*/

/*const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.get('/', (req, res) => {
    res.cookie("name", "express", {
        //expires: new Date(Date.now() + 600000)
        maxAge: 600000
    }).send("cookie");
});
app.get('/delete-cookie', (req, res) => {
    res.clearCookie("name").send("cookie");
});*/

//console.log(document.cookie);
/*awesome cookie manager is a extention for cookie in chrome*/

// sqlite Database
/*const dbFile = '';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(dbFile, err => {
    if(err){
        console.log(err.message)
    }
    console.log('Connected')
});*/

// redis Database
/*
const redis = require('redis');
const client = redis.createClient(); // localhost:6379
client.on("error", (err) => console.log(err));
*/

//const stage = require('./config')[environment];

// Load MongoDBModelscls
//require('./app/MongoDBModels/EmployeeMongo');
//require('./app/MongoDBModels/UserDB');
//require('./helpers/passport');

/*const connectDB = require('./database/mongoDBConnection');
connectDB();*/

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
/*sequelize
    .authenticate()
    .then(() => {
        console.log('Mysql Connected.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });*/

sequelize
    .sync()
    .then(() => {
        console.log('Mysql Connected.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//app.use(expressLayout());

// this is for css file
//app.use(express.static(path.join(__dirname, "public")));

app.use(express.static(__dirname + '/node_modules/bootstrap/dist/css/bootstrap.min.css'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/js/bootstrap.min.js'));
app.use(express.static(__dirname + '/node_modules/jquery/dist/jquery.min.js'));
app.use(express.static(__dirname + '/node_modules/popper.js/dist/popper.min.js'));
//app.use(express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'));
app.use(express.static(__dirname + '/node_modules/owl.carousel/dist/assets/owl.carousel.min.css'));
app.use(express.static(__dirname + '/node_modules/owl.carousel/dist/owl.carousel.min.js'));

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
app.use('/', require('./routes/front/homeRoutes'));
//app.use('/about', require('./routes/front/homeRoutes'));

app.use("/errors", require('./routes/errors/errorRoutes'));

app.use('', require('./routes/auth/authRoutes'));
app.use('/panel/dashboard', require('./routes/panel/dashboardRoutes'));
app.use('/panel/employees', require('./routes/panel/employeeRoutes'));
app.use('/panel/users', require('./routes/panel/userRoutes'));
app.use('/panel/brands', require('./routes/panel/brandRoutes'));
app.use('/panel/product-categories', require('./routes/panel/productCategoryRoutes'));
app.use('/panel/products', require('./routes/panel/productRoutes'));
app.use('/panel/article-categories', require('./routes/panel/articleCategoryRoutes'));
app.use('/panel/articles', require('./routes/panel/articleRoutes'));
app.use('/panel/chat-categories', require('./routes/chat/chatCategoryRoutes'));
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


// free hosting
// ۰۰۰webhost
// Zoho Sites
// FreeHosting
// Hostinger
// x10hosting
// ۵gbFree
// FreeWebHostingArea
// 000Webhost
// freehostingnoads
// googiehost
// Byethost
// Infinityfree
//
//
//
//
//
//
// https://app.infinityfree.net/accounts/create/step2
// account: mypro.app.infinityfree.net
// password: 09392141724abc
// server.js

// Import all our dependencies
//var express  = require('express');
//var app      = express();
//var server   = require('http').Server(app);
//var io       = require('socket.io')(server);

// tell express where to serve static files from
//app.use(express.static(__dirname + '/public'));


//server.listen(3000);
//console.log('It\'s going down in 9992');


// allow CORS
/*app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});*/

/*app.get('/a', function(req, res) {
    //send the index.html in our public directory
    res.render('index.html');
});*/


//Listen for connection
/*io.on('connection', function(socket) {
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });

});*/
