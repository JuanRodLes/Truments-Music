function datos() {
    let nombre =document.getElementById("examplenombre")

    if(nombre.value==""){
        nombre.classList.add("border", "border-danger", "border-4")
    }else{
        nombre.classList.remove("border", "border-danger", "border-4")
    }

    let apellido =document.getElementById("exampleApellido")

    if(apellido.value==""){
        apellido.classList.add("border", "border-danger", "border-4")
    }else{
        apellido.classList.remove("border", "border-danger", "border-4")
    }
    
    let numero =document.getElementById("exampleID")

    if(numero.value==""){
        numero.classList.add("border", "border-danger", "border-4")
    }else{
        numero.classList.remove("border", "border-danger", "border-4")
    }
    
    let direccion =document.getElementById("exampleAddress")

    if(direccion.value==""){
        direccion.classList.add("border", "border-danger", "border-4")
    }else{
        direccion.classList.remove("border", "border-danger", "border-4")
    }
    
    let ciudad =document.getElementById("exampleCity")

    if(ciudad.value==""){
        ciudad.classList.add("border", "border-danger", "border-4")
    }else{
        ciudad.classList.remove("border", "border-danger", "border-4")
    }
    
    let codigopostal =document.getElementById("exampleCp")

    if(codigopostal.value==""){
        codigopostal.classList.add("border", "border-danger", "border-4")
    }else{
        codigopostal.classList.remove("border", "border-danger", "border-4")
    }
    
    let Telefono =document.getElementById("exampleTelefono")

    if(Telefono.value==""){
        Telefono.classList.add("border", "border-danger", "border-4")
    }else{
        Telefono.classList.remove("border", "border-danger", "border-4")
    }
    
    let numerodetdc =document.getElementById("exampleIdnumber")

    if(numerodetdc.value==""){
        numerodetdc.classList.add("border", "border-danger", "border-4")
    }else{
        numerodetdc.classList.remove("border", "border-danger", "border-4")
    }

    let nombrett =document.getElementById("exampleName")

    if(nombrett.value==""){
        nombrett.classList.add("border", "border-danger", "border-4")
    }else{
        nombrett.classList.remove("border", "border-danger", "border-4")
    }

    let fechaexped =document.getElementById("exampleDateb")

    if(fechaexped.value==""){
        fechaexped.classList.add("border", "border-danger", "border-4")
    }else{
        fechaexped.classList.remove("border", "border-danger", "border-4")
    }

    let fechaexpi =document.getElementById("exampleDateend")

    if(fechaexpi.value==""){
        fechaexpi.classList.add("border", "border-danger", "border-4")
    }else{
        fechaexpi.classList.remove("border", "border-danger", "border-4")
    }

    let codigo =document.getElementById("exampleCodesecurity")

    if(codigo.value==""){
        codigo.classList.add("border", "border-danger", "border-4")
    }else{
        codigo.classList.remove("border", "border-danger", "border-4")
    }

}