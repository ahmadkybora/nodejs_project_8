const { DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');

const Brand = dbCon.define('Brand', {
    first_name: {
        type: DataTypes.STRING,
        //required: true,
        //unique: true
    },
    last_name: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
        //unique
    },
    email: {
        type: DataTypes.STRING,
        //unique
    },
    token: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
});

module.exports = Brand;
