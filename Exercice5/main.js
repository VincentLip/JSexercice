let coteA = Number (prompt("Veuillez saisir la longueur du premier cote :"));
let coteB = Number (prompt("Veuillez saisir la longueur du deuxième cote :"));

let hypotenuseCarre = Math.pow(coteA,2) + Math.pow(coteB,2);

let hypotenuse = Math.sqrt(hypotenuseCarre);

let affichage = `Les longueurs du coté adjacents sont ${coteA} cm et ${coteB} cm
La longueur de l'hypotenuse est ${hypotenuse.toFixed(2)}`;


console.log(affichage)