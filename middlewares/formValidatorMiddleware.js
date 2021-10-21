//Requerir path y fs
var path = require('path');
var fs = require('fs');

//Requerir express validator
const { body } = require('express-validator')


const validations = [
    
    body('email').notEmpty().withMessage('Debe escribir un correo').bail()
                    .isEmail().withMessage('Debe ser un email valido')
    ,
    body('password').isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres'),
    body('nombre').isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif']

        if (!file) {
            throw new Error('Se debe seleccionar una imagen')
        } else {
            let fileExtension = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error('Las extensiones permitidas son ' + acceptedExtensions.join(', '))
            }
        }
        return true;
    })
];

module.exports = validations;
