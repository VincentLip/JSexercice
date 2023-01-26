class Car {
    constructor(brand,model,speed){

        this.brand = brand;
        this.model = model;
        this.speed = speed ;
    }

    affichage() {

        return `La voiture <b>${this.brand} ${this.model} </b> va à <b> ${this.speed}</b>km/h.<br>`
    }

    accelerate(){
        this.speed += 10;
        return `La voiture <b>${this.brand} ${this.model} </b> avance désormais à<b> ${this.speed}</b>km/h.<br>`
    }

    turn(){
        this.speed -= 5;
        return `La voiture <b>${this.brand} ${this.model} </b> avance désormais à<b> ${this.speed}</b>km/h.<br>`
    }
}

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