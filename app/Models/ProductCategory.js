const { DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');

const ProductCategory = dbCon.define('ProductCategory', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        required: true,
    },
    brand_id: {
        type: DataTypes.BIGINT,
        //required: true,
    },
    name: {
        type: DataTypes.STRING,
        //required: true,
    },
    status: {
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

module.exports = ProductCategory;
