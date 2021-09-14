module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        username: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        },
        roleID: {
            type: Sequelize.INTEGER,
            references: {
                model: 'role',
                key: 'id'
            },
            onDelete: 'cascade'
        },
        registered_date: {
            type: Sequelize.DATE
        }
    }, {
        tableName: 'user'
    });
    return user;
}