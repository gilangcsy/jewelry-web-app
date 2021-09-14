
const { verifySignUp } = require('../middleware');
const users = require('../controllers/auth.controller');
module.exports = app => {

    let router = require('express').Router();

    router.post('/create', [
        verifySignUp.checkDuplicateUsernameOrEmail
    ], users.createUser);

    app.use('/api/auth', router);
}