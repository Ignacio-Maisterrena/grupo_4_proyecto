//Requerir path y fs
var express = require('express');
var router = express.Router();

//Requierir los controlladores
var apisController = require ('../controllers/apisController');

//Requerir los middlewares
const loggedMiddleware = require('../middlewares/loggedMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')


router.get('/users', apisController.users);

router.get('/users/:id', apisController.user);

router.get('/products', apisController.products);

router.get('/products/:id', apisController.product);


module.exports= router;

