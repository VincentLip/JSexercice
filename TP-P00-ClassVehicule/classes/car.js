import { Vehicle } from "./vehicle.js";

export default class Car extends Vehicle {
    constructor(brand,model,mileage,year,airconditionning){
        super(brand,model,mileage,year)
        this.airconditionning = airconditionning;
    }

    display() {

        return `<b> Voiture </b> : ${this.brand} - ${this.model} - ${this.mileage} km - ${this.year} - ${this.airconditionning}.<br>`
    }

}