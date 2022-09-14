//Los callback son funciones pasadas como argumento, es decir una funcion dentro de los parametros
//Ejemplo:

const callback = (nombre, callback)=>{
    const personas = ['Sheila', 'Diego', 'Ludmila', 'Iron', 'Elias']

    personas.forEach(dato=>{
        if(dato === nombre){
            return callback(nombre);
        } else callback('No se encontro el nombre')
    })

}

//A la hora de llamar a la funcion, se le pasaria un primer parametro y el segundo seria una funcion
//utilizada como parametro que recibiria algun dato como argumento.
callback('Ludmila', (nombre)=>{
    console.log(nombre);
})