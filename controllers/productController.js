
var fs = require ('fs')

var path = require('path');
const productFilePath = path.join (__dirname, '../products.json');
const products= JSON.parse(fs.readFileSync (productFilePath, 'utf-8'));
const multer= require ('multer')
const storage= multer.diskStorage({
destination: (req, file, cb)=>{
    cb(null, 'images/prenda1.jpg');
},
filename: (req, file, cb)=>{
    let filename= 'file'
    cb(null, filename)
}
});
const uploadFile= multer({storage})







const productController = {
    productCreate: (req, res, ) => {
        res.render ('formularioDeCargaYEdicion')
    },
    productStore: (req, res)=>{
        const productToCreate = req.body;
        productToCreate.id = 1;
        
        
       products.forEach(product => {
           productToCreate.id = product.id + 1
       });
        products.push(productToCreate)
        fs.writeFileSync (productFilePath, JSON.stringify(products, null, 2))
        return res.send(productToCreate)
    }


}

module.exports = productController