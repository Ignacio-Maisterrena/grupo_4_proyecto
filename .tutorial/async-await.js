
function leerDatosPromise() {
    return new Promise((resolve, reject) => {
        //....
        setTimeout(() => {
            resolve(4)
        }, 2000)
    })
}
/////////////////////

// async function leerDatosAsync() {
//     return 20
// }

// resultado_misterioso = leerDatosAsync()
// console.log("resultado_misterioso:", resultado_misterioso)
// resultado_misterioso.then(dato => console.log(dato))

async function leerDatosAsync2() {
    // await
    // equivale
    // promise.then
    resultado = await leerDatosPromise()
    console.log(3)
    console.log(">", resultado)
    return resultado
}

console.log(1)

console.log(leerDatosAsync2().then(console.log))
console.log(2)
