export class Car {
    constructor(brand,model,matriculation,date){

        this.brand = brand;
        this.model = model;
        this.matriculation = matriculation;
        this.date = date;
    }

    display() {

        return `<b> Voiture </b> : ${this.brand} - ${this.model} - ${this.matriculation} ${this.date}.<br>`
    }
}