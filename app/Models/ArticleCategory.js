const { DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');

const ArticleCategory = dbCon.define('ArticleCategory', {
    brand_id: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        //required: true,
        //unique: true
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

