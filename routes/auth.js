var express = require('express');
var router = express.Router();

const authController = require ('../controllers/authController')
const {body, validationResult}= require ('express-validator')

/* GET users listing. */
router.get('/register', authController.registerCreate)
router.post ('/register', 
body('email').isEmail().withMessage('Debe ser un email valido'),
body('password').isLength({min:6}).withMessage('Debe tener al menos 6 caracteres'),
body('nombre').isString().isLength({min:2}).withMessage('Debe tener al menos 2 caracteres'),
 authController.registerStore)

 router.get('/login', authController.loginCreate)
router.post('/login', authController.loginStore)

module.exports= router