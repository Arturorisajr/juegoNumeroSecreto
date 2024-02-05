let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Se crea la funciona la cual le colocan 2 pararmetros (Variables), las cuales llamaremos mas tarde
function asignarTextoElemento(elemento, texto){
    //Jalas el objeto desde el html como lo hace con el obejto h1
    let elementoHTML = document.querySelector (elemento);
    //Inserta texto al objeto mediante el innerHTML
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //Se añade el input sin embargo se trajo llamandolo desde un id esto lo añade como objeto, adicionalmente con 'value', añade los valores que tiene dicho input
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    //Condicion para la ayuda al comparar el numero ingresado con el secreto
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function generarNumeroSecreto() {

    
    //Variable de bloque, no causa conflicto con las variables globales
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Ya se sortearon todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se jugaron todos los numeros posibles')

    } 
    else {
            
        

        //Si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            
            return generarNumeroSecreto();

        } 
        else {
            
            listaNumerosSorteados.push(numeroGenerado);
            //return, retorna un valor que le pasemos en este caso retornara o mostrara un numero aleatorio.
            return numeroGenerado;

        }
    }
}

//Funcion para poner en blanco el input al no acertar el numero
function limpiarCaja() {
    //Cuando se llamada con query es necesario el # para señalar que sera por id
    document.querySelector('#valorUsuario').value = '';
    
}

function condicionesIniciales() {
    //Se llama a la funcion y se le añade los parametros que necesitamos
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();    
}

//Reiniciara completamente el juego
function funcionReiniciarJuego() {
    //Limpiara la caja
    limpiarCaja();
    //Indicar mensaje de rango de numeros
    //Generar el numero aleatorio
    condicionesIniciales();
    //Reiniciar el contador de intentos
    intentos = 1;
    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();