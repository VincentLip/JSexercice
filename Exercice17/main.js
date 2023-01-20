let chiens = [
    {
        nom: "Bernie",
        race:"Caniche",
        age: 5,
    },

    {
        nom: "Rex",
        race:"Berger allemand",
        age: 10,
    }
];

const dogChoice = document.querySelector("#dog-choice");
const sendBtn = document.querySelector("#send-btn");
const dogName = document.querySelector("#dog-name").value;
const dogBreed = document.querySelector("#dog-breed").value;
const dogAge = document.querySelector("#dog-age").value;
const result = document.querySelector("#result");

function refresh() {

    for(let dog of chiens){
        dogChoice.innerHTML+=`<option value = ${chiens.indexOf(dog)+1} >${dog.nom}</option>`;
    }
}


refresh()

sendBtn.addEventListener('click', () => {

    dogChoice.innerHTML = ` <option> Selectionner un chien </option>`
    chiens[chiens.length] = {
        nom: document.querySelector("#dog-name").value,
        race: document.querySelector("#dog-breed").value,
        age : document.querySelector("#dog-age").value
    };
    refresh()
});

dogChoice.addEventListener('change' , () => {

        if(dogChoice.value !=0){
        result.innerHTML =` Vous avez sélectionner le chien ID ${dogChoice.value}`
        }else {
            result.innerHTML =""
        }

    
})

