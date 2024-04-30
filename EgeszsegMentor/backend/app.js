const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const backendRoutes = require('./routes');
const frontendRoutes = path.join(__dirname, '..', 'frontend');
const imageRoutes = path.join(__dirname, 'images');


const host = 'localhost';
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/', backendRoutes);
app.use('/images', express.static(imageRoutes));
app.use('/frontend', express.static(frontendRoutes));



app.listen(port, host, () => {
   console.log(`A szerver itt fut: http://${host}:${port}`);

});

