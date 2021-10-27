//Requerir path y fs
var path = require('path');
var fs = require('fs');

//Requerir express validator
const { body, validationResult } = require('express-validator')

const validations = [
    body('nombre').isLength({ min: 2 }).withMessage('Debe tener al menos 2 caracteres'),
    body('descripcion').isLength({ min: 20 }).withMessage('Debe tener al menos 20 caracteres'),
    body('precio').isInt().withMessage('Debe ser un número'),
    body('picture').custom((value, { req }) => {
        let file = req.file;
       
      if (!file) {
            throw new Error('Se debe seleccionar una imagen, los formatos permitidos son: .png, .jpg y .jpeg')
      }
        return true;
    })
];

module.exports = validations;