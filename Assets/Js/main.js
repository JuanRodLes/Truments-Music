function datos() {
    let nombre =document.getElementById("nombreusuario")

    if(nombre.value==""){    
        nombre.classList.add("border", "border-danger", "border-4")
    }else{
        nombre.classList.remove("border", "border-danger", "border-4")
    }

    let apellido =document.getElementById("apellidousuario")

    if(apellido.value==""){
        apellido.classList.add("border", "border-danger", "border-4")
    }else{
        apellido.classList.remove("border", "border-danger", "border-4")
    }

    let correo =document.getElementById("correousuario")

    if(correo.value==""){
        correo.classList.add("border", "border-danger", "border-4")
    }else{
        correo.classList.remove("border", "border-danger", "border-4")
    }

    let numero =document.getElementById("numerousuario")

    if(numero.value==""){
        numero.classList.add("border", "border-danger", "border-4")
    }else{
        numero.classList.remove("border", "border-danger", "border-4")
    }

    let contraseña =document.getElementById ("contraseñausuario")

    if(contraseña.value==""){
        contraseña.classList.add("border", "border-danger", "border-4")
    }else{
        contraseña.classList.remove("border", "border-danger", "border-4")
    }
}