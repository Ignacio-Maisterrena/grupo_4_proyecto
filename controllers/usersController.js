//Requerir path y fs
var path = require('path');
var fs = require('fs');

//Requerir lista de usuarios
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

//Requerir bcrypt
const bcrypt = require('bcryptjs');
const saltRounds = 10;

//Requerir express validator
const { validationResult } = require('express-validator');

//Requerir el modelo de usuarios
const user = require('../models/userModel');

//importar la base de datos y sequelize
let db = require('../database/models')

//CONTROLLER
const usersController = {
    registerCreate: (req, res,) => {
        return res.render('register')
    },

    registerStore: async (req, res) => {


       let errors = validationResult(req);
       //En el caso de que hayan errores
       if (!errors.isEmpty()) {
           return res.render('register', { errors: errors.mapped(), old: req.body })
       }
       //Chequear si ese mail ya se usó
       let userInDB = await db.Usuario.findOne({
           where: { correo_electronico: req.body.email }
       });
       if (userInDB) {
           return res.render('register', {
               errors: {
                   email: {
                       msg: 'Este Email ya fue registrado'
                   }
               },
               old: req.body
           });
       }
       //En el caso de que NO hayan errores
       //Encritpar la contraseña
       let password = bcrypt.hashSync(req.body.password, saltRounds)
       //crear el usuario en el JSON
       await db.Usuario.create({
           nombre: req.body.nombre,
           avatar: req.file.filename,
           correo_electronico: req.body.email,
           contraseña: password,
           id_permisos: 2
       })
       //Redirigir al login
       return res.redirect('/users/login');
    },

    loginCreate: (req, res) => {
        return res.render("logIn");
    },

    loginStore: async (req, res) => {

        //Buscar el usuario a luguearse
        const userToLogin = await db.Usuario.findOne({
            where: { correo_electronico: req.body.email }
        })

        if (!userToLogin) {
            return res.render('logIn', {
                errors: {
                    email: {
                        msg: 'Este Email no está asociado a ninguna cuenta'
                    }
                },
                old: req.body
            });
        }

        //Validar la contraseña
        const comparacion = bcrypt.compareSync(req.body.password, userToLogin["contraseña"]);

        //Logueo o envió el error
        if (comparacion) {
            //Elimino la password del userToLogin por seguridad
            userToLogin["contraseña"] = ""

            req.session.userLogged = userToLogin;
            
            if (req.body.remember) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
            }
            return res.redirect('/home');
        } else {
            return res.render('logIn', {
                errors: {
                    password: {
                        msg: 'Contraseña incorrecta'
                    }
                },
                old: req.body
            });
        }
    },

    logOut: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/home');
    }
}

module.exports = usersController;