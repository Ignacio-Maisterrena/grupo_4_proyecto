//Requerir path y fs

const fs = require('fs');


const user = {

    fileName: './data/users.json',

    //Traer todos los usuarios de la basae de datos y transformarlos a un array
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    //Genera un ID para un nuevo usuario
    generatId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        } else {
            return 1;
        }
    },

    //Buscar a todos los usuarios
    findAll: function () {
        return this.getData();
    },

    //Guargar al usuario en la DB
    create: function (userData) {
        let allUsers = this.findAll();

        //Genera un usuario con los datos recibidos y un id único
        let newUser = {
            id: this.generatId(),
            ...userData
        }

        allUsers.push(newUser);

        //Guarda el nuevo array en el JSON
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, 2))

        return newUser;
    },

    //Buscar a un usuario por su id
    findByPk: function (id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id == id);
        return userFound;
    },

    //Buscar a un usuario por su campo (puede ser email o cualquier otro)
    findByField: function (field, value) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] == value);
        return userFound;
    },

    //Eliminar un usuario de la DB
    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);

        //Guarda el nuevo array en el JSON
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, 2))

        return true;
    },

    //Editar info del un usuario
    edit: function () {

    }
}

module.exports = user;