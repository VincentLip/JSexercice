export class Vehicle {
    constructor(brand,model,mileage,year){

        this.brand = brand;
        this.model = model;
        this.mileage = mileage ;
        this.year = year;
    }

    display() {

        return `<b> Vehicule </b> : ${this.brand} - ${this.model} - ${this.mileage} km - ${this.year}.<br>`
    }
}