//Funcion Declarativa
//La funcion declarativa se crea utilizando la palabra reservada "Function" seguido de un nombre.
//Ejemplo:

function declarativa(){
    return 'hola';
}


//Funcion Expresiva
//La funcion declarativa se crea definiendo una constante y dandole como valor la palabra
//reservada "function"
//Ejemplo:
const declarativa = function(){
    return 'hola';
}

//Funcion tipo flecha
//Esta funcion se crea definiendo una constante y dandole valor de un parentesis y una flecha =>
//Ejemplo:
const arrowFunction = ()=>{
    return 'hola';
}

//En este tipo de funciones se pueden hacer de varias formas:
//Si la instruccion a realizar es de una sola linea, se puede obviar las llaves
//Si es una sola instruccion se puede evitar la palabra return, y se realiza un retorno implicito
//Ejemplo:

//Se crea una funcion tipo flecha y se retorna implicitamente un array con la palabra 'hola'
const arrow1 = ()=> ['hola']

//Tambien se puede obviar los parentesis cuando se habla de un solo parametro
//Ejemplo:

const arrow2 = parametro => [parametro];