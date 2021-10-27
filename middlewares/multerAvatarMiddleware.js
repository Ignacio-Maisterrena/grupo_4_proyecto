//Implementar multer
const multer = require('multer')
var path = require('path');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/users/avatars');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);
    }
});



const uploadFile = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
           
        }
    }
});

module.exports = uploadFile;