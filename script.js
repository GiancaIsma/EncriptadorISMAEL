function encriptar(){
    var texto = document.getElementById("entrada").value.toLowerCase();
    var textoCifrado = texto.replace(/e/img,"enter");
    var textoCifrado = textoCifrado.replace(/o/img,"ober");
    var textoCifrado = textoCifrado.replace(/i/img,"imes");
    var textoCifrado = textoCifrado.replace(/a/img,"ai");
    var textoCifrado = textoCifrado.replace(/u/img,"ufat");

    document.getElementById("nicola").style.display = "none";
    document.getElementById("mensajesalida").style.display = "none";
    document.getElementById("salida").innerHTML = textoCifrado;
    document.getElementById("replica").style.display = "show";
    document.getElementById("replica").style.display = "inherit";
    document.getElementById("contacto").style.display = "show";
    document.getElementById("contacto").style.display = "inherit";
}

function desencriptar(){
    var texto = document.getElementById("entrada").value.toLowerCase();
    var textoCifrado = texto.replace(/enter/img,"e");
    var textoCifrado = textoCifrado.replace(/ober/img,"o");
    var textoCifrado = textoCifrado.replace(/imes/img,"i");
    var textoCifrado = textoCifrado.replace(/ai/img,"a");
    var textoCifrado = textoCifrado.replace(/ufat/img,"u");

    document.getElementById("nicola").style.display = "none";
    document.getElementById("mensajesalida").style.display = "none";
    document.getElementById("salida").innerText = textoCifrado;
}

function copiar(){
    var contenido = document.querySelector("#salida");
    contenido.select();
    document.execCommand("copy");
}
