const express = require('express');
const connection = require('../database.js');
const upload = require('../middleware/upload.js');
const router = express.Router();

router.get('/kaloriabazis', function(req, res) {
    connection.query('SELECT * FROM kaloriabazis', (err, result) => {
        if (err) {
            res.json(err);
        }
        res.json(result);
    });
 });
 
 router.get('/kaloriabazis/:id', function(req,res){
    const id = req.params.id;
    connection.query('SELECT * FROM kaloriabazis WHERE id = ?', [id] ,(err,result) =>{
       if(err){
          res.json(err);
       }
       res.json(result);
    });
 });
 
router.post('/kaloriabazis',function (req, res) {
    const {neve, energia, feherje, zsir, szenhidrat} = req.body;
    

    connection.query('INSERT INTO kaloriabazis (id, neve, energia, feherje, zsir, szenhidrat) VALUES (NULL, ?, ?, ?,?,?);', [neve, energia, feherje, zsir, szenhidrat], (err, result)=>{
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
 