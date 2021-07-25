var express = require('express');
var router = express.Router();
const userController = require("../controllers/userController");

const uploadFile = require("../middlewares/multerMiddleware");
const validations = require ("../middlewares/validateRegisterMidlleware");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get ("/login", usersControllers.login);


module.exports = router;
