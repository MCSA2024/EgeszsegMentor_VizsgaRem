const mysql = require('mysql');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'kaloriabazis'
});

connection.connect((err)=>{
    if (err){
        console.log('Hiba az adatbázis kapcsolódásakor!');
    }
    console.log('Sikeres adatbázis kapcsolat!');

});

module.exports = connection;