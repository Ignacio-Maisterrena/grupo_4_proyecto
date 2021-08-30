//Requerir path y fs

const fs = require('fs');


const product = {

    fileName: './data/products.json',

    //Traer todos los productos de la basae de datos y transformarlos a un array
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    //Genera un ID para un nuevo producto
    generatId: function () {
        let allproducts = this.findAll();
        let lastproduct = allproducts.pop();
        if (lastproduct) {
            return lastproduct.id + 1;
        } else {
            return 1;
        }
    },

    //Buscar a todos los productos
    findAll: function () {
        return this.getData();
    },

    //Guargar al producto en la DB
    create: function (productData) {
        let allproducts = this.findAll();

        //Genera un producto con los datos recibidos y un id único
        let newproduct = {
            id: this.generatId(),
            ...productData
        }

        allproducts.push(newproduct);

        //Guarda el nuevo array en el JSON
        fs.writeFileSync(this.fileName, JSON.stringify(allproducts, null, 2))

        return newproduct;
    },

    //Buscar a un producto por su id
    findByPk: function (id) {
        let allproducts = this.findAll();
        let productFound = allproducts.find(oneproduct => oneproduct.id == id);
        return productFound;
    },

    //Buscar a un producto por su campo (puede ser email o cualquier otro)
    findByField: function (field, value) {
        let allproducts = this.findAll();
        let productFound = allproducts.find(oneproduct => oneproduct[field] == value);
        return productFound;
    },

    //Eliminar un producto de la DB
    delete: function (id) {
        let allproducts = this.findAll();
        let finalproducts = allproducts.filter(oneproduct => oneproduct.id !== id);

        //Guarda el nuevo array en el JSON
        fs.writeFileSync(this.fileName, JSON.stringify(finalproducts, null, 2))

        return true;
    },

    //Editar info del un producto
    edit: function (product) {
        let allproducts = this.findAll();

        allproducts.forEach(element => {
            if (element.id == product.id) {
                var position = allproducts.indexOf(element);
                allproducts[position] = product;
            }
        })

        //Guarda el nuevo array en el JSON
        fs.writeFileSync(this.fileName, JSON.stringify(allproducts, null, 2))

        return true;
    }
}

module.exports = product;