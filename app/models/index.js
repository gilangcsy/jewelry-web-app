//Memamnggil data-data kongigurasi database
const dbConfig = require('../config/db.config');

const Sequelize = require('sequelize');

//Konifgurasi database
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false,
    timezone: dbConfig.timezone,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    }
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Memanggil model-model yang sudah dibuat
db.user = require('./user.model')(sequelize, Sequelize);
db.role = require('./role.model')(sequelize, Sequelize);
db.product = require('./product.model')(sequelize, Sequelize);
db.warehouse = require('./warehouse.model')(sequelize, Sequelize);
db.cart = require('./cart.model')(sequelize, Sequelize);

db.role.hasMany(db.user);
db.user.belongsTo(db.role);

// db.product.hasOne(db.warehouse);
// db.warehouse.belongsTo(db.product);

db.user.hasMany(db.cart);
db.cart.belongsTo(db.user);

db.product.hasMany(db.cart);
db.cart.belongsTo(db.product);

module.exports = db;