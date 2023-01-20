let diametre = Number (prompt("Veuillez saisir le diamètre du cercle :"));

let perimetre = diametre*Math.PI;
let aire = Math.PI*Math.pow((diametre/2),2);

console.log(`Le périmètre du cercle est de ${Math.round(perimetre)} et l'aire du cercle est de ${Math.round(aire)}`)