// import { Product } from "./product.js";
// import { Service } from "./sercvice.js";


// export class Ihm {
//     constructor(formulaire,tableauHtmlResultat){
//         this.products = [];
//         this.services = [];
//         this.formulaire = formulaire;
//         this.tableauHtmlResultat = tableauHtmlResultat;
//     }

//     demarrer(){
//         this.formulaire.addEventListener("submit",(e) => {
//             e.preventDefault();
//             this.ajouter();
//         })
//     }

//     ajouter(){
//         // Récupérer les champs et créer un contact
        
//         if(document.getElementById('Product').checked){
//         const title = this.formulaire.querySelector("input[name='title']").value
//         const price = this.formulaire.querySelector("input[name='price']").value
//         const description = this.formulaire.querySelector("input[name='description']").value
//         const stock = this.formulaire.querySelector("input[name='stock']").value
//         const product = new Product(title,price,description,stock)
//         this.products.push(product)
//         this.afficher(product)

//         }
//         if(document.getElementById('Service').checked){
//             const title = this.formulaire.querySelector("input[name='title']").value
//             const price = this.formulaire.querySelector("input[name='price']").value
//             const description = this.formulaire.querySelector("input[name='description']").value
//             const domaine = this.formulaire.querySelector("input[name='domain']").value
//             const service = new Service(title,price,description,domaine)
//             this.services.push(service)
//             this.afficher(service)
//         }
//         console.log(document.getElementById('Product').checked)
//         console.log(document.getElementById('Service').checked)

//     }

//     afficher(c){
//         if(document.getElementById('Product').checked){
//         this.tableauHtmlResultat.innerHTML += `<tr>
//         <td>${c.title}</td>
//         <td>${c.price}</td>
//         <td>${c.description}</td>
//         <td>${c.stock}</td>
//         </tr>
//         `
//         }
//         if(document.getElementById('Service').checked){
//             this.tableauHtmlResultat.innerHTML += `<tr>
//             <td>${c.title}</td>
//             <td>${c.price}</td>
//             <td>${c.description}</td>
//             <td>${c.domaine}</td>
//             </tr>
//             `
//             }
//     }
// }