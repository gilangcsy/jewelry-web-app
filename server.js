const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// const multer = require('multer');
// const forms = multer();

//Memanggil model
const db = require('./app/models');

//Deklarasi express.js
const app = express();

const bcrypt = require("bcrypt");

//Membuat daftar web yang dapat mengonsumsi ValorantPI
// let whiteList = [
//     'http://localhost:8081'
// ];

//Mendaftarkan web yang dapat mengonsumsi ValorantPI
// let corsOption = {
//     origin: function (origin, callback) {
//         if (whiteList.indexOf(origin) !== -1 || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not Allowed by CORS!'));
//         }
//     }
// }

app.use(bodyParser.json());
// app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: true }));

// Migrasi tabel yang ada dalam setiap model
db.sequelize.sync({ force: false });

//Inisasi routing pada halaman awal
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Jewelry Web App!"
    });
});

//Membuat migrasi role dan user
app.post('/migration', (req, res) => {
    const db = require('./app/models');
    const User = db.user;
    const Role = db.role;

    const role = {
        roleName: "Admin"
    }

    Role.create(role)
        .then((data) => {
            const hashedPassword = bcrypt.hashSync("password", 10);
            const user = {
                fullName: "Gilang Chandra Syahputra",
                username: "gilangcsy",
                email: "gilangchandra9@gmail.com",
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
        }).catch((err) => {
            res.status(500).send({
                message: err.message || 'Some error occured while creating user.'
            })
        })
});


app.use('/uploads', express.static('uploads'));

require('./app/routes/auth.routes')(app);
require('./app/routes/product.routes')(app);
// require('./app/routes/hero.routes')(app);
// require('./app/routes/skill.routes')(app);
// require('./app/routes/map.routes')(app);

//Inisiasi port yang akan dipakai
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})