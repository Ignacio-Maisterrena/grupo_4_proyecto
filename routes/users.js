//Requerir path y fs
var path = require('path');
var fs = require('fs');

var express = require('express');
var router = express.Router();

//Requerir usersController
const usersController = require('../controllers/usersController');

//Requerir express validator
const { body, validationResult } = require('express-validator');

//Requerir middleware de multer
const multer = require('../middlewares/multerAvatarMiddleware');

//Requerir los middlewares
const loggedMiddleware = require('../middlewares/loggedMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

//Requerir middleware de formValidator
const formValidator = require('../middlewares/formValidatorMiddleware.js');


/*ROUTES*/

//Registrar un nuevo usuario
router.get('/register', guestMiddleware, usersController.registerCreate);
router.post('/register', multer.single('avatar'), usersController.registerStore);
//router.post('/register', formValidator, multer.single('avatar'), usersController.registerStore);

//Loguear un usuario
router.get('/login', guestMiddleware, usersController.loginCreate);
router.post('/login', usersController.loginStore);

//Logout un usuario
router.get('/logout', loggedMiddleware, usersController.logOut);

module.exports = router;