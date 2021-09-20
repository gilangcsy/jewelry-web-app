module.exports = (sequelize, Sequelize) => {
    const cart = sequelize.define('cart', {
        cartCode: {
            type: Sequelize.STRING,
            allowNull: false
        },
        quantity: {
            type: Sequelize.INTEGER
        },
        cartNotes: {
            type: Sequelize.TEXT
        },
        isCheckedOut: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'cart'
    })
    return cart;
}