const {DataTypes} = require('sequelize');
const dbCon = require('../../database/connection');
const BrandModel = require('./BrandModel');

const ProductCategory = dbCon.define('ProductCategory', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        required: true,
    },
    brandId: {
        type: DataTypes.UUID,
        unique: true,
        references: {
            model: 'brands',
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING,
    },
    image: {
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

ProductCategory.belongsTo(BrandModel, {
    foreignKey: 'brandId',
    constraint: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

BrandModel.hasMany(ProductCategory, {
    foreignKey: 'brandId',
    constraint: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

module.exports = ProductCategory;
