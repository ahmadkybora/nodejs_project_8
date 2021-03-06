const { DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');

const Chat = dbCon.define('Chat', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        required: true,
    },
    category_id: {
        type: DataTypes.BIGINT,
    },
    user_id: {
        type: DataTypes.BIGINT,
    },
    title: {
        type: DataTypes.STRING
    },
    description: {
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

module.exports = Chat;

