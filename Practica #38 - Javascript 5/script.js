//Variables
var auto1 = "Nissan";
var auto2 = "Toyota";
var auto3 = "Suzuki";

    arreglos
var autos = ["Nissan", "Toyota", "Suzuki"];

    document.write(autos); //Nissan, Toyota, Suzuki
    document.write(autos[0]) //Nissan

    var autos = new Array("Nissan","Toyota","Suzuki");
    var arreglo = ["Hola arreglo", 'b', 50, 1.5, true];

//Arreglo con objetos
var persona = {nombre:"Juan",apellidoP:"Penas",edad:30};
document.write(persona["nombre"]); //Juan

arreglo[0] = Date.now;
arreglo[1] = mifuncion;
arreglo[2] = misAutos;

var autos, lista;
autos = ["Toyota", "Acura", "Infinity", "BMW", "GMC"];

//acceder al primero
document.write(autos[0]);

//acceder al ultimo
document.write(autos[autos.length-1]);

//acceder a todos
document.write(autos);

//acceder ordenados
document.write(autos.sort());

//ver en lista
var texto = "<ol>";
autos.forEach(misAutos);
texto += "</ol>"

function misAutos(value){
    texto += "<li>"+ value +"</li>";
}

//agregar elementos
autos.push("Mercedes Benz");
document.write(autos);

//Eliminar elementos
autos.pop();
document.write(autos);

//Eliminar primer elemento
autos.shift();
document.write(autos);

//Agregar elemento en el primer sitio
autos.unshift("Ford");

//Reemplazar elemento
autos[1] = "Sakura";

//Borrar elemento
delete autos[2]; //No definido