const { DataTypes } = require('sequelize');
const dbCon = require('../../database/connection');
const ProductCategory = require('./ProductCategory');

const Product = dbCon.define('Product', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        required: true,
    },
    /*categoryId: {
        type: DataTypes.STRING,
    },*/
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
    description: {
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

Product.belongsTo(ProductCategory, {
    foreignKey: 'brandId',
    constraint: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});

/*ProductCategory.hasMany(Product, {
    foreignKey: 'brandId',
    constraint: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
});*/

module.exports = Product;

