import { Car } from "./classes/car.js";

let result = document.querySelector("#result");
result.innerHTML += `<h2>Course de Voiture</h2><hr>`;

let bmw = new Car ("Bmw","Serie 1 ",80);
let mercedes = new Car ("Mercedes","GLB",100);


result.innerHTML += bmw.affichage();
result.innerHTML += mercedes.affichage();
result.innerHTML += bmw.accelerate();
result.innerHTML += bmw.accelerate();
result.innerHTML += bmw.accelerate();
result.innerHTML += mercedes.accelerate();
result.innerHTML += mercedes.accelerate();
result.innerHTML += mercedes.turn();
result.innerHTML += mercedes.turn();