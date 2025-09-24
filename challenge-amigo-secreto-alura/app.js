// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreDeAmigos = [];

// funcion para agregar nombre de los amigos a la lista y mostrar.
function agregarAmigo() {
  const amigo = document.getElementById("amigo").value.trim();
  // verificar que agregar amigo no este vacio y agregar alerta
  if (amigo === "") {
    alert("Es necesario agregar un nombre");
    return;
  }
  nombreDeAmigos.push(amigo);
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
  document.getElementById("resultado").innerHTML = "";
  actualizarAmigos();
}

function actualizarAmigos() {
  document.getElementById("listaAmigos").innerHTML = "";
  for (let amigo of nombreDeAmigos) {
    document.getElementById("listaAmigos").innerHTML += `<li>${amigo}</li>`;
  }
}

// a traves de aleatorio elegir un nombre de la lista
function sortearAmigo() {
  // sortear amigo tiene que verificar el que array tenga al menos 1 elemento y alerta
  if (nombreDeAmigos.length < 1) {
    alert("Debes agregar el nombre de al menos dos amigos");
    return;
  }
  const indice = Math.floor(Math.random() * nombreDeAmigos.length);
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<li>${nombreDeAmigos[indice]}</li>`;
  // despues del sorteo limpiar el array
  nombreDeAmigos = [];

