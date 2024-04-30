const express = require('express');
const router = express.Router();

//HTML routes
const homeHTMLRoute = require('./html/homeHTML.js');
const loginHTMLRoute = require('./html/loginHTML.js');
const registerHTMLRoute = require('./html/registerHTML.js');

//bootstarp routes
const bootstrapRoute=require('./bootstrap/bootstrap.js');

//frontend js fájlok routes
const loginJSRoute = require('./js/login.js')
const registerJSRoute = require('./js/register.js')
const logoutJSRoute=require('./js/logout.js');
const scriptJSRoute=require('./js/script.js');

//css routes
const registerCSSRoute = require('./css/registerCSS.js');

//API
const registrationRoute = require('./API/registration.js');
const loginRoute=require('./API/login.js');
const logoutRoute=require('./API/logout.js');
const kaloriakRoutes=require('./API/kaloriabazis.js');

//HTML oldalak használata
router.use('/',loginHTMLRoute);
router.use('/',registerHTMLRoute)
router.use('/', homeHTMLRoute);

//bootstrap fájlok haszálata
router.use('/', bootstrapRoute);

//frontend js fájlok használata
router.use('/', loginJSRoute);
router.use('/', registerJSRoute);
router.use('/', scriptJSRoute);
router.use('/', logoutJSRoute);

//css fájlok használata
router.use('/', registerCSSRoute);

//API használata
router.use('/', registrationRoute);
router.use('/', loginRoute);
router.use('/', logoutRoute);
router.use('/', kaloriakRoutes);




module.exports = router;