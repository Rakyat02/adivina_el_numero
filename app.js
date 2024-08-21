let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elHTMLmodificado = document.querySelector(elemento);
    elHTMLmodificado.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'intento.':'intentos.' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        //El usuario no acertó el número secreto entonces se ejecuta lo siguiente:
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else{
            asignarTextoElemento ('p', 'El número secreto es mayor');
        }   
        intentos ++;
        limpiarCaja ();
    }
    return;
}

function limpiarCaja (){
    document.querySelector('#valorUsuario').value = '';
}

/* el back tick sale con altGR + TECLA DE LLAVE FINAL '}' `` */

function condicionesIniciales(){
    asignarTextoElemento('h1', "Prueba tu suerte, adivida el número");
    asignarTextoElemento ('p',"Indica un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (numerosSorteados.length == numeroMaximo){
        asignarTextoElemento ('p', 'Ya se sortearon todos los números');
    } else{
        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}

function reiniciarJuego (){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
 
}

/*
La función del principio asigna a los elementos HTML strings particulares
, con lo que se vuelve reutilizable. Ya solo se invoca las veces necesarias.
*/

condicionesIniciales();
