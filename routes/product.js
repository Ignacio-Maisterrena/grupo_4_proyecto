var express = require('express');
var router = express.Router();
const multer= require ('multer')
const storage= multer.diskStorage({
destination: (req, file, cb)=>{
    cb(null, 'images/prenda1.jpg');
},
filename: (req, file, cb)=>{
    let filename= 'file'
    cb(null, filename)
}
})
const uploadFile= multer({storage})
const productController = require ('../controllers/productController')
/* GET users listing. */
router.get('/carga', productController.productCreate)
router.post ('/carga',uploadFile.single('avatar'), productController.productStore)

module.exports= router