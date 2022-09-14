//El async y el await se utilizan para evitar las promesas.
//El async se coloca al inicio de una funcion para indicar que la funcion va a ser asincronica.

const sample = async ()=>{
    //El await como su nombre lo dice 'esperar', espera a que una peticion se cumpla antes de seguir el codigo.

    //Se hace un fetch a una url, y se espera a que se resuelva y la guarda en una variable.
    const peticion = await fetch('http://example.com/movies.json');

    //En este caso ya no se necesita utilizar un .then() ya que se espero a que se resuelva, y se guardo en la variable.
    //Aun asi hay que convertir a json y utilizar el await para esperar a que se resuelva:
    const resultado = await peticion.json()

    return resultado;
}
