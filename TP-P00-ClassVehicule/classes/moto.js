import { Vehicle } from "./vehicle.js";

export default class Moto extends Vehicle {
    constructor(brand,model,mileage,year){
        super(brand,model,mileage,year)
    }

    display() {

        return `<b> Moto </b> : ${this.brand} - ${this.model} - ${this.mileage} km - ${this.year}.<br>`
    }

}