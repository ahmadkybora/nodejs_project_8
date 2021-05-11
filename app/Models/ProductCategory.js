const { DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');

const ProductCategory = dbCon.define('ProductCategory', {
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
