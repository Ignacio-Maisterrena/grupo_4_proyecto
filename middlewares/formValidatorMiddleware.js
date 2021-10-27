//Requerir path y fs
var path = require('path');
var fs = require('fs');

//Requerir express validator
const { check, body } = require('express-validator')


const validations = [

    check('email').notEmpty().withMessage('Debe escribir un correo').bail()
        .isEmail().withMessage('Debe ser un email valido')
    ,
    check('password').isLength({ min: 6 }).withMessage('Debe tener al menos 6 caracteres'),
    check('nombre').isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
       
      if (!file) {
            throw new Error('Se debe seleccionar una imagen, los formatos permitidos son: .png, .jpg y .jpeg')
      }
        return true;
    })
];

module.exports = validations;
