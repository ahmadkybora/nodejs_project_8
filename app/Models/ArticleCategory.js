const { DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');

const ArticleCategory = dbCon.define('ArticleCategory', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        required: true,
    },
    brand_id: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
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

module.exports = ArticleCategory;

