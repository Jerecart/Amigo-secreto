console.log("Ejecutando el sistema");
let nombres = [];

function agregarAmigo() {
    const nombreInput = document.getElementById("amigo");
    const nombre = nombreInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    nombreInput.value = ""; // Limpiar el campo de entrada
    mostrarLista();
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}

function mostrarLista() {
    const listaDiv = document.getElementById("listaAmigos");
    listaDiv.innerHTML = "<h3>Lista de Amigos:</h3><ul>" + nombres.map(nombre => `<li>${nombre}</li>`).join('') + "</ul>";
}