import { Contacts } from "./classes/contacts.js";

const result = document.querySelector("#result");
const tableContact = document.querySelector("#table-contact");
const inputLastname = document.querySelector("#input-lastname");
const inputFirstname = document.querySelector("#input-firstname");
const inputTelephone = document.querySelector("#input-telephone");
const inputDate = document.querySelector("#input-date");
const inputEmail = document.querySelector("#input-email");
const addBtn = document.querySelector("#add-btn");

let choice =""


// let test = new Contacts ("Mr","Dupond","Jean","08/10/1973","+(33) 12 36 54 70 ","jdupond@gmail.com");
// tableContact.innerHTML += test.display();

result.innerHTML += `<h2>TP-P00 - Liste de contacts</h2><hr>`;

addBtn.addEventListener("click", (event) => {

    event.preventDefault();
    if(document.getElementById('choice-mr').checked){
        choice = "Mr"
    }
    if(document.getElementById('choice-mme').checked){
        choice = "Mme"
    }

    const newContact = new Contacts (choice,inputLastname.value,inputFirstname.value,inputDate.value,inputTelephone.value,inputEmail.value);

    tableContact.innerHTML += newContact.display();
    

})

