const express = require('express');
const router = express.Router();
const connection = require('../../database');
const bcrypt = require('bcrypt');

const saltRound = 10;

router.post('/reg', function (req, res) {
    const { username, email, password } = req.body;

    //console.log(username,email,password);

    connection.query('SELECT * FROM felhasznalok WHERE email = ?', [email], (err, result) => {
        if (err) {
            return res.json('Hiba a regisztráció során!')
        }

        if (result.length > 0) {
            return res.status(400).json("Az email cím már foglalt!");
        }

        bcrypt.hash(password, saltRound, (err, hash) => {
            if (err) {
                throw err;
            }

            //console.log(hash);

            connection.query('INSERT INTO felhasznalok(userID, email, username, password, role) VALUES(NULL, ?, ?, ?, 1)',
                [email, username, hash], (err, result) => {
                    if (err) {
                        res.json("Hiba a regisztráció során!");
                    }
                    res.json("Sikeres regisztráció!");
                });
        });
    });
})

module.exports = router;