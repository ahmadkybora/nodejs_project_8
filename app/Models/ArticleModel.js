const { DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');

const Article = dbCon.define('Article', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        required: true,
    },
    category_id: {
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

module.exports = Article;

