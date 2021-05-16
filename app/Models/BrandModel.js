const { DataTypes } = require('sequelize');
const sequelize = require('../../database/connection');

const Brand = sequelize.define('Brand', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        required: true,
    },
    name: {
        type: DataTypes.STRING,
        //required: true,
        unique: true
    },
    status: {
        type: DataTypes.ENUM('ACTIVE', 'PENDING')
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

