// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
alert(`Bienvenidos a la ruleta del amigo secreto`);

let Nombres = [];
let NombresDisponibles = [];

let inputAmigo = document.getElementById("Amigo");
let ulListaAmigos = document.getElementById("ListaAmigos");
let ulResultado = document.getElementById("Resultado");

function agregarAmigo() {
    if (!inputAmigo.value) {
        alert("Debes ingresar un nombre.");
    } else {
        if (Nombres.includes(inputAmigo.value)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }
        Nombres.push(inputAmigo.value);
        NombresDisponibles.push(inputAmigo.value);
        ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
        limpiarCaja();
    }
    console.log(Nombres);
}

function sortearAmigo() {
    if (NombresDisponibles.length === 0) {
        alert("Todos los amigos han sido sorteados. La lista se reiniciará.");
        reiniciarLista(); // Llamamos a la función para limpiar todo
        return;
    }

    let random = Math.floor(Math.random() * NombresDisponibles.length);
    let amigoSecreto = NombresDisponibles[random];

    ulResultado.innerHTML = `<h2>Tu amigo secreto es: ${amigoSecreto}</h2>`;

    // Eliminar el nombre sorteado de la lista de disponibles
    NombresDisponibles.splice(random, 1);
}

function limpiarCaja() {
    document.querySelector("#Amigo").value = "";
}

function reiniciarLista() {
    Nombres = []; // Borra la lista de nombres originales
    NombresDisponibles = []; // Borra la lista de nombres no sorteados
    ulListaAmigos.innerHTML = ""; // Borra la lista en pantalla
    ulResultado.innerHTML = ""; // Borra el resultado del último sorteo
}
