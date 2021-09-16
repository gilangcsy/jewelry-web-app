module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define('product', {
        productName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        slug: {
            type: Sequelize.STRING,
            allowNull: false
        },
        productDescription: {
            type: Sequelize.TEXT
        },
        thumbnail: {
            type: Sequelize.STRING,
            allowNull: false
        },
        grade: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        shape: {
            type: Sequelize.STRING,
            allowNull: false
        },
        weight: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        productType: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: 'product'
    })
    return product;
}