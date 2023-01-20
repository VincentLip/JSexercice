let cote = Number (prompt("Veuillez saisir la longueur du coté du carré :"));

let perimetreCarre = cote*4;
let aireCarre =cote*cote;

let longueur = Number (prompt("Veuillez saisir la longueur du rectangle :"));
let largeur = Number (prompt("Veuillez saisir la largeur du rectangle :"));


let perimetreRectangle = (longueur + largeur) *2;
let aireRectangle = longueur * largeur

let affichage = `Les longueurs du coté du carré sont ${cote} cm son périmètre est de ${Math.round(perimetreCarre)} cm et son aire est de ${Math.round(aireCarre)} cm² 
La longueur du rectangle est de ${longueur} cm  et la largeur est de ${largeur} cm , son périmètre est de ${Math.round(perimetreRectangle)} cm et son aire est de ${Math.round(aireRectangle)} cm²
`

console.log(affichage)