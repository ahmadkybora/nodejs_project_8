const { Sequelize } = require("sequelize");

const _sequelize = new Sequelize({
    dialect: 'mysql',
    username: 'root',
    password: '',
    host: 'localhost',
});

module.exports.getSeq = () => _sequelize ?? null;
