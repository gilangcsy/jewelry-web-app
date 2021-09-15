module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        fullName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.TEXT,
        },
        birthOfDate: {
            type: Sequelize.DATE,
        },
        placeOfBirth: {
            type: Sequelize.STRING,
        },
        gender: {
            type: Sequelize.STRING,
        },
        profession: {
            type: Sequelize.STRING,
        },
        // roleID: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: 'role',
        //         key: 'id'
        //     },
        //     onDelete: 'cascade'
        // },
        registered_date: {
            type: Sequelize.DATE
        }
    }, {
        tableName: 'user'
    })
    return user;
}