const {  DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');

const Employee = dbCon.define("Employee", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        required: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    token: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
});

module.exports = Employee;
