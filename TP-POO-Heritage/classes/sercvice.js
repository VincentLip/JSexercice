import { Temp } from "./temp.js";

export class Service extends Temp {
    constructor(title,price,description,domain){
        super(title,price,description)
        this.domain = domain;

    }

    display() {

        return `<tr>
                    <td>${this.title}</td>
                    <td>${this.price}</td>
                    <td>${this.description}</td>
                    <td>${this.domain}</td>
                </tr>`
    }
}