export class Car {
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