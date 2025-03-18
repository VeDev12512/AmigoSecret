// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// globales
listaNombres = [];

// funcion de agregar nombre

function agregarAmigo() {
    const inputElement = document.getElementById("amigo");
    const input = inputElement ? inputElement.value : "";
    
    // verificar contenido array, mostrar array, limpiar input
    if (input && isNaN(input) && typeof input === "string"){
        listaNombres.push(input);
        mostrarListaNombres();
        inputElement.value = "";
    } else{ 
        alert("Por favor, inserte un nombre valido.")
    } 
}

//funcion de actualizar la lista de amigos

function mostrarListaNombres(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (i in listaNombres){
        crearLI("listaAmigos", listaNombres[i]);
    }

}

// funcion de sorteo

function sortearAmigo() {
    // Realizar sorteo
    if (listaNombres.length > 0) {
        const numeroGanador = Math.floor(Math.random() * listaNombres.length);
        const nombreGanador = listaNombres[numeroGanador];

        // Limpiar resultados y mostrar ganador
        const resultadoElement = document.getElementById("resultado");
        if (resultadoElement) {
            resultadoElement.innerHTML = "";
            crearLI("resultado", "El Ganador Es:");
            crearLI("resultado", nombreGanador); 
        }
    } else {
        alert("La lista de nombres está vacía. Agrega amigos antes de realizar el sorteo.");
    }
}

//funcion para crear un li 

function crearLI(etiquetaPadre, texto) {
    const padre = document.getElementById(etiquetaPadre);

    if (padre) {
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = texto;
        padre.appendChild(nuevoItem);
    } else {
        console.error(`El elemento con id '${etiquetaPadre}' no existe.`);
    }
}