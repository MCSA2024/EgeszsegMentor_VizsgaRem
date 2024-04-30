const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/script.js', function (req, res) {
    res.sendFile(path.join(__dirname, '..', '..','..', 'frontend','js', 'script.js'));
 });

 module.exports = router;