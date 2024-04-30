const express = require('express');
const connection = require('../database.js');
const upload = require('../middleware/upload.js');
const router = express.Router();

router.get('/sorozatok', function(req, res) {
    connection.query('SELECT * FROM sorozatok', (err, result) => {
        if (err) {
            res.json(err);
        }
        res.json(result);
    });
 });
 
 router.get('/sorozatok/:id', function(req,res){
    const id = req.params.id;
    connection.query('SELECT * FROM sorozatok WHERE id = ?', [id] ,(err,result) =>{
       if(err){
          res.json(err);
       }
       res.json(result);
    });
 });
 
router.post('/sorozatok',upload.single('image') ,function (req, res) {
    const {name, season} = req.body;
    const fileName = req.file ? req.file.filename : null;

    //console.log(name, season, fileName);

    connection.query('INSERT INTO sorozatok (id, name, season, image) VALUES (NULL, ?, ?, COALESCE(?, "no_image.png"));', [name, season, fileName], (err, result)=>{
       if(err){
          res.json(err);
       }
       res.json(result);
    });
    
 });
 
 
 router.delete('/sorozatok/:id', function (req, res) {
    const id = req.params.id;
    connection.query('DELETE FROM sorozatok WHERE sorozatok.id = ?', [id],(err, result)=>{
       if(err){
          res.json(err);
       }
       res.json(result);
    });
 });
 
 
 router.put('/sorozatok/:id', function(req,res){
    const id = req.params.id;
    const {name, season} = req.body;
    connection.query('UPDATE sorozatok SET name = ?, season = ? WHERE sorozatok.id = ?;', [name, season,id],(err, result)=>{
       if(err){
          res.json(err);
       }
       res.json(result);
    });
 });

 module.exports = router;
 