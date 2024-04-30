const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/bootstrap.min.css', function (req, res) {
    res.sendFile(path.join(__dirname, '..','node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'));
 });
 router.get('/bootstrap.bundle.min.js', function (req, res) {
    res.sendFile(path.join(__dirname, '..','node_modules', 'bootstrap', 'dist', 'js', 'bootstrap.bundle.min.js'));
 });

 module.exports = router;