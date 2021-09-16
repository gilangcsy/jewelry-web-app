module.exports = (sequelize, Sequelize) => {
    const warehouse = sequelize.define('warehouse', {
        quantity: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'warehouse'
    })
    return warehouse;
}