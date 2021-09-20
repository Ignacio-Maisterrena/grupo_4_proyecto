//const form = document.querySelector('form');
const form1 = document.getElementById('form1');
form1.addEventListener('submit', (event)=>{ 
   
    event.preventDefault() ; 
    const errores= [];
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('contraseña')
    if (inputEmail.value== ''){
        errores.push('El campo Email es obligatorio')
    }
    if (inputPassword.value == ''){
        errores.push('El campo contraseña es obligatorio')
    }

    if (errores.length > 0){
        console.log(errores)
        const errorsDiv = document.querySelector('#errores');
        errorsDiv.innerHTML = ''
        for (let error of errores){
            const mensajeError= document.createElement('p');
            mensajeError.innerHTML = ` ${error} `;
            errorsDiv.appendChild(mensajeError)
        }
    }else{
        form1.submit()
    }

    
    
})