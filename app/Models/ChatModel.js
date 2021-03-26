const { DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');

const Chat = dbCon.define('Chat', {
    username: {
        type: DataTypes.STRING
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

