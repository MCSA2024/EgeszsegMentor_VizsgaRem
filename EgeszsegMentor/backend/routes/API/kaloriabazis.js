const express = require('express');
const connection = require('../../database.js');
const router = express.Router();

router.get('/kaloriabazis', function (req, res) {
   connection.query('SELECT * FROM kaloriabazis', (err, result) => {
      if (err) {
         res.json(err);
      }
      res.json(result);
   });
});

router.get('/kaloriabazis/:id', function (req, res) {
   const id = req.params.id;
   connection.query('SELECT * FROM kaloriabazis WHERE id = ?', [id], (err, result) => {
      if (err) {
         res.json(err);
      }
      res.json(result);
   });
});

//kaloriabazis POST
router.post('/kaloriabazis', function (req, res) {
   const { neve, energia, feherje, zsir, szenhidrat } = req.body;

   console.log(neve, energia, feherje, zsir, szenhidrat)

   connection.query('INSERT INTO kaloriabazis (id, neve, energia, feherje, zsir, szenhidrat) VALUES (NULL, ?, ?, ?,?,?);', [neve, energia, feherje, zsir, szenhidrat], (err, result) => {
      if (err) {
         res.json(err);
      }
      res.json(result);
   });

});

//kaloriabazis DELETE
router.delete('/kaloriabazis/:id', function (req, res) {
   const id = req.params.id;
   connection.query('DELETE FROM kaloriabazis WHERE kaloriabazis.id = ?', [id], (err, result) => {
      if (err) {
         res.json(err);
      }
      res.json(result);
   });
});

//kaloriabazis PUT
router.put('/kaloriabazis/:id', function (req, res) {
   const id = req.params.id;
   const { neve, energia, feherje, zsir, szenhidrat } = req.body;
   //console.log(neve, energia, id)
   connection.query('UPDATE kaloriabazis SET neve = ?, energia = ?, feherje = ?, zsir = ?, szenhidrat = ? WHERE kaloriabazis.id = ?;', [neve, energia, feherje, zsir, szenhidrat, id], (err, result) => {
      if (err) {
         res.json(err);
      }
      res.json(result);
   });
});

module.exports = router;
