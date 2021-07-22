var express = require('express');
var router = express.Router();

const authController = require ('../controllers/authController')
/* GET users listing. */
router.get('/register', authController.registerCreate)
router.post ('/register', authController.registerStore)

module.exports= router