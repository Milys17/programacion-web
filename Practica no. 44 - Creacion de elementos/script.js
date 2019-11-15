function animar(){
    var elemento = document.getElementById("cuadro")
    console.log(elemento);
    var pos = 0;
    var i = setInterval(frame, 5)
    function frame(){
        if(pos == 500){
            clearInterval(i)
        }else{
            pos++;
            elemento.style.marginTop = pos+'px';
            elemento.style.marginLeft = pos+'px';
        }
    }
}