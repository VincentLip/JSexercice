import { Product } from "./product.js";
import { Service } from "./sercvice.js";


export class Ihm {
    constructor(formulaire,tableauHtmlResultatProduct,tableauHtmlResultatService){
        this.products = [];
        this.services = [];
        this.formulaire = formulaire;
        this.tableauHtmlResultatProduct = tableauHtmlResultatProduct;
        this.tableauHtmlResultatService = tableauHtmlResultatService;
    }

    demarrer(){
        this.formulaire.addEventListener("submit",(e) => {
            e.preventDefault();
            this.ajouter();
        })
    }

    ajouter(){
        // Récupérer les champs et créer un contact
        
        if(document.getElementById('Product').checked){
            const title = this.formulaire.querySelector("input[name='title']").value
            const price = this.formulaire.querySelector("input[name='price']").value
            const description = this.formulaire.querySelector("input[name='description']").value
            const stock = this.formulaire.querySelector("input[name='stock']").value
            const product = new Product(title,price,description,stock)
            this.products.push(product)
            this.afficher(product)
        }
        if(document.getElementById('Service').checked){
            const title = this.formulaire.querySelector("input[name='title']").value
            const price = this.formulaire.querySelector("input[name='price']").value
            const description = this.formulaire.querySelector("input[name='description']").value
            const domain = this.formulaire.querySelector("input[name='domain']").value
            const service = new Service(title,price,description,domain)
            this.services.push(service)
            this.afficher(service)
        }



    }

    afficher(c){

        if(document.getElementById('Product').checked){
        
            this.tableauHtmlResultatProduct.innerHTML += `<tr>
        <td>${c.title}</td>
        <td>${c.price}</td>
        <td>${c.description}</td>
        <td>${c.stock}</td>
        </tr>
        `
        }
        if(document.getElementById('Service').checked){
            
            this.tableauHtmlResultatService.innerHTML += `<tr>
        <td>${c.title}</td>
        <td>${c.price}</td>
        <td>${c.description}</td>
        <td>${c.domain}</td>
        </tr>
        `
        }
    }
}