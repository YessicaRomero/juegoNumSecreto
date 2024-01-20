
let numeroSecreto = 0;
console.log(numeroSecreto)
let intentos = 0;
let listaDeNumerosDados = [];
let numeroMaximo = 10;

function asignarElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
 }

 function verificarIntento(){
    let numeroIngresado = parseInt(document.querySelector("input").value);
    console.log(numeroIngresado);

    if(numeroIngresado ===numeroSecreto){
        asignarElemento("p", `Felicitaciones!! acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}` );
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else {
        if(numeroIngresado > numeroSecreto){
            asignarElemento("p", "El numero es menor al numero ingresado");
        }else{
            asignarElemento("p", "El numero es mayor al numero ingresado");
        } 
        intentos++
        limpiarCaja();
    }
    return;
 }
 function condicionesIniciales(){
    asignarElemento("h1","Jugando con Javascript");
    asignarElemento("p",`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecret();
    intentos = 1;
 }
 function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");

 }

 function limpiarCaja() {
    document.querySelector("input").value = "";
    
 }
 function generarNumeroSecret(){
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosDados);
    
    if(listaDeNumerosDados.length == numeroMaximo){
        asignarElemento("p", "Ya superaste el maximo de intentos posibles");
    } else {

   if(listaDeNumerosDados.includes(numeroGenerado)){
        return generarNumeroSecret();
   }else{
    listaDeNumerosDados.push(numeroGenerado);
    return numeroGenerado;
   }
}
 }
condicionesIniciales();
