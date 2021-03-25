const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sequelize = require('./database/connection');
const app = express();

/*const { sequelize } = require('./models');
async function main() {
    await sequelize.sync();
}
main();*/

// Load MongoDBModels
require('./app/MongoModels/EmployeeMongo');
require('./app/MongoModels/UserMongo');

// MongoDB Connection
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
    });

// Mysql Connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Mysql Connected.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load routes
app.use('/', require('./routes/front/homeRoutes'));
app.use('/about', require('./routes/front/homeRoutes'));
app.use('/panel/employees', require('./routes/Panel/employeeRoutes'));
app.use('/panel/users', require('./routes/Panel/userRoutes'));

const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});

module.exports = app;
