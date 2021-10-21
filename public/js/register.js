const form2 = document.getElementById('form2');
form2.addEventListener('submit', (event)=>{
   
    event.preventDefault() ;
  
    const errores= [];
    const inputNombre = document.getElementById ('nombre');
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('contraseña');
    const inputAvatar = document.getElementById('avatar');
    
   if (inputNombre.value==''){
       errores.push('El campo nombre es obligatorio')
   }
    if (inputEmail.value== ''){
        errores.push('El campo Email es obligatorio')
    }
    if (inputPassword.value == ''){
        errores.push('El campo contraseña es obligatorio')
    }
    if (inputAvatar.value == ''){
        errores.push('El campo Imagen de perfil es obligatorio')
    }

    if (errores.length > 0){
       
        const errorsDiv = document.querySelector('#errores');
        errorsDiv.innerHTML = ''
        for (let error of errores){
            const mensajeError= document.createElement('p');
            mensajeError.innerHTML = ` ${error} `;
            errorsDiv.appendChild(mensajeError)
        }
    }else{
        form2.submit() }

    
})