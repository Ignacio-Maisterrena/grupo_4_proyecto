//Requerir path y fs
var express = require('express');
var router = express.Router();




//Requierir los controlladores
var mainController = require ('../controllers/mainController');
var productsController = require ('../controllers/productsController');
var userController = require ('../controllers/usersController');

//Requerir los middlewares
const loggedMiddleware = require('../middlewares/loggedMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')

/* GET home page. */

router.get('/home', mainController.home);

router.get('/', mainController.home);

router.get('/cart', loggedMiddleware, mainController.cart);








module.exports = router;
