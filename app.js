let numeroSecreto = 0;
let intentos = 0;
let listaDeNumerosSorteados = []; 
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   /*console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    console.log(intentos);*/
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1) ?'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El numero secreto es menor');
        }else{
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++ ;
    limpiarCaja();
    }

    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value ='';
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaDeNumerosSorteados);
    if(listaDeNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }else{
            //si el numero generado esta en la lista
        if(listaDeNumerosSorteados.includes(numeroGenerado)){ 
            return generarNumeroSecreto();
        }else{
            listaDeNumerosSorteados.push(numeroGenerado);
        }
    }
    
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'El Juego del Numero Secreto!!!');
    asignarTextoElemento('p', `Escuentra el numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar caja 
    limpiarCaja();
    //indicar mensaje de intervalos de numeros
    condicionesIniciales();
    //generar numero aleatorio
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //inicializar el numero de intentos
}
condicionesIniciales();
