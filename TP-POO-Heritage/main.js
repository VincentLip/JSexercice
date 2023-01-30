// import { Ihm } from "./classes/ihm.js";
import { Product } from "./classes/product.js";
import { Service } from "./classes/sercvice.js";


// const form = document.querySelector("#formContact");
const resultProduct = document.querySelector("#result-product");
const resultService = document.querySelector("#result-service");

const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const stock = document.querySelector("#stock");
const domain = document.querySelector("#domain");
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", (event) => {

    event.preventDefault();
    if(document.getElementById('Product').checked){

        const newProduct = new Product (title.value,price.value,description.value,stock.value);
        resultProduct.innerHTML += newProduct.display();
    }
    if(document.getElementById('Service').checked){

        const newService = new Service (title.value,price.value,description.value,domain.value);
        resultService.innerHTML += newService.display();
        
    }
})

