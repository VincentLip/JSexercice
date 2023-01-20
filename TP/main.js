let annuaire = [
    {
        nom: "Dupont",
        prenom: "Jean",
        age: 15
    },
    {
        nom: "Durant",
        prenom: "Pierre",
        age: 16
    },
    {
        nom: "Martin",
        prenom: "Jean",
        age: 17
    }
];

let  getAnnuaire = function(person){

    let message ="";
    for (let element of person){


            message +=`${element.nom} ${element.prenom} ${element.age} \r`        
    }
    alert(message)
    console.log(message)
    choix = prompt(menu);
    
}

let addAnnuaire = function (person){

    let newFirstName = prompt('Veuillez saisir le nom :');
    let newLastName = prompt('Veuillez saisir le prenom :');
    let newAge = Number(prompt('Veuillez saisir age:'));

    let temp = {nom :newFirstName , prenom :newLastName , age :newAge}
    person.push(temp);
    console.log(person);
    choix = prompt(menu);
    

}

let deleteAnnuaire = function (person){

    let newChoice = Number (prompt("Veuillez saisir le numero de la personne a supprimer"));

    person.splice(newChoice,1);
    console.log(person);
    choix = prompt(menu);

}

let choix;
const menu = `************************
                1) Afficher un contact
                2) Ajouter un contact
                3) Supprimer un contact
                4) Quitter

                Faites votre choix : `;

// Récupération choix utilisateur

choix = prompt(menu);

// Structure Switch cases en fonction de choix
switch (choix) {
    case "1":
        getAnnuaire(annuaire)
        
        break;
    case "2":
        addAnnuaire(annuaire)
        break;
    case "3":
        deleteAnnuaire(annuaire)
        break;
    case "4":
        
        break;
    default:
        
        break;
}