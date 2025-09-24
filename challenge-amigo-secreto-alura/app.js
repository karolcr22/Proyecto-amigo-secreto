// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosecreto = []



function agregarAmigoSecreto(){
    let nombreDelAmigoSecreto = document.getElementById('amigo').value;

    if(nombreDelAmigoSecreto === null || nombreDelAmigoSecreto === ""){
        alert("Por favor, inserte un nombre.");
    } else{
        amigos.push(nombreDelAmigoSecreto);
        console.log("Amigo agregado:", nombreDelAmigoSecreto);
        console.log("Lista actual de amigos:", amigosecreto);
    }
    
    actualizaListaAmigos();
    limpiarCaja();
   
    
}
