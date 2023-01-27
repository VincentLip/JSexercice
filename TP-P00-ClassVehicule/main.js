import Car from "./classes/car.js";
import Moto from "./classes/moto.js";

let result = document.querySelector("#result");
result.innerHTML += `<h2>Héritage Véhicule</h2><hr>`;

let renault = new Car ("Renault","Kangoo",240000,2003,true);
let bmw = new Moto ("BMW","R1150R",65000,2005)



result.innerHTML += renault.display();
result.innerHTML += bmw.display();

