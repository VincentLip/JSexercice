let etudiants = [
    {
        prenom: "José",
        nom:"Garcia",
        matieres: {
            francais:16,
            anglais:7,
            humour :14
        }
    },

    {
        prenom: "Antoine",
        nom:"De Caunes",
        matieres: {
            francais:15,
            anglais:6,
            humour : 16,
            informatique:4,
            sports :10
        }
    }
];

let affichage,
    moyNote=0,
    total,
    nbNote;

for (let element of etudiants){

    affichage = `Nom : ${element.nom} Prénom : ${element.prenom}`
    console.log(affichage)
    nbNote=0;
    total=0;

    for(let key in element.matieres){

        affichage = ` Matière : ${key} ${element.matieres[key]} /20`
        console.log(affichage)
        nbNote++
        total += element.matieres[key]
        
    }
    moyNote = total / nbNote;  
    affichage = `La moyenne des notes est de ${moyNote.toFixed(1)}`
    console.log(affichage)
    
}