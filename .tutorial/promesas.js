// // https://www.youtube.com/watch?v=vn3tm0quoqE

function leerDatosPromise() {
    return new Promise((resolve, reject) => {
        //....
        setTimeout(() => {
            resolve(10)
        }, 2000)
    })
}

let promesa = leerDatosPromise()
console.log(promesa)
promesa.then(dato => console.log(dato))


