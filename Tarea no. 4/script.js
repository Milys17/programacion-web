var operacion = "",
    acumulado = 0,
    simbolo = 0; // 1 - suma, 2 - resta, 3 - multiplicacion, 4 - division, 5 - residuo, 6 - raiz, 7 - cuadrado



function actualizar(){
    document.getElementById("pantalla").value = operacion;
}

//Simbolos
function punto(){
    operacion += ".";
    actualizar();
}

function resultado(){
    switch(simbolo){
        case 1: 
                operacion = acumulado + Number(operacion);
                simbolo = 0;
                acumulado = Number(operacion);
                actualizar();
            break;
        
        case 2:
                operacion = acumulado - Number(operacion);
                simbolo = 0;
                acumulado = Number(operacion);
                actualizar();
            break;

        case 3:
                operacion = acumulado * Number(operacion);
                simbolo = 0;
                acumulado = Number(operacion);
                actualizar();
            break;
                
        case 4:
                operacion = acumulado / Number(operacion);
                simbolo = 0;
                acumulado = Number(operacion);
                actualizar();
            break;

        case 5:
                operacion = acumulado % Number(operacion);
                simbolo = 0;
                acumulado = Number(operacion);
                actualizar();
            break;
        }
}


function suma(){
    acumulado = Number(operacion);
    simbolo = 1;
    operacion = "+";
    actualizar();
    operacion = "";
}

function resta(){
    acumulado = Number(operacion);
    simbolo = 2;
    operacion = "-";
    actualizar();
    operacion = "";
}

function multiplicacion(){
    acumulado = Number(operacion);
    simbolo = 3;
    operacion = "*";
    actualizar();
    operacion = "";
}

function division(){
    acumulado = Number(operacion);
    simbolo = 4;
    operacion = "/";
    actualizar();
    operacion = "";
}

function residuo(){
    acumulado = Number(operacion);
    simbolo = 5;
    operacion = "%";
    actualizar();
    operacion = "";
}

function raiz(){
    var op = Math.sqrt(Number(operacion));
    operacion = acumulado = op;
    actualizar();
}

function cuadrado(){
    var op = Math.pow(Number(operacion),2);
    operacion = acumulado = op;
    actualizar();
}

function borrar(){
    operacion = "";
    acumulado = 0;
    actualizar();
}
//Numeros
function cero(){
    operacion += "0";
    actualizar();
}

function uno(){
    operacion += "1";
    actualizar();
}

function dos(){
    operacion += "2";
    actualizar();
}

function tres(){
    operacion += "3";
    actualizar();
}

function cuatro(){
    operacion += "4";
    actualizar();
}

function cinco(){
    operacion += "5";
    actualizar();
}

function seis(){
    operacion += "6";
    actualizar();
}

function siete(){
    operacion += "7";
    actualizar();
}

function ocho(){
    operacion += "8";
    actualizar();
}

function nueve(){
    operacion += "9";
    actualizar();
}
