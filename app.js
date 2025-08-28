// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function agregarNombre() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if(nombre !== ""){ 
        nombres.push(nombre);
        input.value = "";
        document.getElementById('listaAmigos').textContent = nombres.join(", ");
        
    }else{
        alert("Por favor, ingresa un nombre válido.");
    }
    
}
function sortearAmigo() {
        if(nombres.length === 0){
            alert("No hay nombres en la lista.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const nombreSeleccionado = nombres[indiceAleatorio];
        document.getElementById('resultado').textContent = `El nombre seleccionado es: ${nombreSeleccionado}`;

}
function mostrarNombres() {
    if(nombres.length === 0){
        document.getElementById('amigo').textContent = "No hay nombres en la lista.";
    }else{
        document.getElementById('amigo').textContent = nombres.join(", ");
    }

}

