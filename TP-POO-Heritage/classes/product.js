import { Temp } from "./temp.js";

export class Product extends Temp {
    constructor(title,price,description,stock){
        super(title,price,description)
        this.stock = stock;

    }

    // display() {

    //     return `<tr>
    //                 <td>${this.title}</td>
    //                 <td>${this.price}</td>
    //                 <td>${this.description}</td>
    //                 <td>${this.stock}</td>
    //             </tr>`
    // }
}