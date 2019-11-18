var validarNombreApellido = new RegExp("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$");
var error_style = "display: inline; background-color: black;";
var error_limpiar = "display: none;";

function validar(){
    limpiar();
    //Validar nombre
    if(document.formulario.nombre.value == "" | !validarNombreApellido.test(document.formulario.nombre.value)){
        document.getElementById("error-nombre").style = error_style;
        return false;
    }
    //Validar apellido
    if(document.formulario.apellido.value == "" | !validarNombreApellido.test(document.formulario.apellido.value)){
        document.getElementById("error-apellido").style = error_style;
        return false;
    }
    //Validar genero
    if(!document.getElementById("femenino").checked & !document.getElementById("masculino").checked){
        document.getElementById("error-genero").style = error_style;
        return false;
    }
    //Validar telefono
    if(!/^[0-9]{3}$/.test(document.formulario.lada.value) | !/^[0-9]{7}$/.test(document.formulario.telefono.value)){
        document.getElementById("error-telefono").style = error_style;
        return false;
    }
    //Validar correo
    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.formulario.correo.value))){
        document.getElementById("error-correo").style = error_style;
        return false;   
    }
    //Validar contraseña
    if(document.formulario.pass.value.length < 6 | document.formulario.passConf.value.length < 6){
        document.getElementById("error-pass").style = error_style;    
        return false;
    }

    //Validar confirmar contraseña
    if(!document.formulario.pass.value.equals(document.formulario.passConf.value)){
        document.getElementById("error-passConf").style = error_style;    
        return false;
    }

    window.alert("REGISTRO EXITOSO!");

}

function limpiar(){
    document.getElementById("error-nombre").style = error_limpiar;    
    document.getElementById("error-apellido").style = error_limpiar;    
    document.getElementById("error-genero").style = error_limpiar;    
    document.getElementById("error-telefono").style = error_limpiar;    
    document.getElementById("error-correo").style = error_limpiar;    
    document.getElementById("error-pass").style = error_limpiar;    
    document.getElementById("error-passConf").style = error_limpiar;    
}
    