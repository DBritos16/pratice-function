//Las promesas son una forma de controlar lo que te devuelve una peticion/consulta
//Es una forma de controlar la asincronia, una vez que se realiza una peticon, la respuesta se captura con una promesas.
//Ejemplo de promesa con un fetch:

//Se realiza un fetch a una url
fetch('http://example.com/movies.json')
//La respuesta se captura con un .then. Se utiliza una funcion tipo flecha anonima, la cual se debe convertir a json para poder leerlo.     
.then(respuesta => respuesta.json())
//Y esta conversion toma un tiempo, por tanto se debe utilizar otro then.
.then(data=>console.log(data));
