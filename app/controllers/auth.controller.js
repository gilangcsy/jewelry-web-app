const db = require('../models');
const User = db.user;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");


exports.createUser = (req, res) => {
    if (!req.body.email || !req.body.username || !req.body.password || !req.body.roleID) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
    } else {

        const hashedPassword = bcrypt.hashSync(req.body.password, 10);

        const user = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            roleID: 1
        }

        User.create(user)
            .then((data) => {
                res.send(data)
            }).catch((err) => {
                res.status(500).send({
                    message: err.message || 'Some error occured while creating user.'
                })
            })
    }
};