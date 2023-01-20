let revenus =0,
    nbAdult=0,
    nbEnfant=0,
    nbPart=0,
    revenuImposable=0,
    impot=0,
    affichage;

revenus = Number (prompt(`Veuillez saisir votre revenu du foyer`));
nbAdult = Number (prompt(`Veuillez saisir le nombre d'adulte du foyer`));
nbEnfant = Number (prompt(`Veuillez saisir le nombre d'enfant du foyer`));

if (nbEnfant <= 2){
    nbPart = nbAdult + nbEnfant * 0.5;
}
else{
    nbPart = nbAdult + nbEnfant - 1;
}

revenuImposable = revenus/nbPart;

switch(true){

    case (revenuImposable >= 10778 && revenuImposable <= 27478):
        impot = Math.round((revenuImposable-10778)*0.11);
        break;
    
    case (revenuImposable >= 27479 && revenuImposable <= 78570):
        impot = Math.round((revenuImposable-27479)*0.30 + 1837);
        break;
    
    case (revenuImposable >= 78571 && revenuImposable <= 168994):
        impot = Math.round((revenuImposable-78571)*0.41 + 1837 + 15327);
        break;
    
    case (revenuImposable >= 168995) :
        impot = Math.round((revenuImposable-168995)*0.45 + 1837 + 15327 + 37073);
        break;
}

impot = impot*nbPart;

affichage = `Le montant de l'impôt pour un foyer de ${nbAdult} adulte(s) et
de ${nbEnfant} enfant(s), avec un revenu fiscal de ${revenus}€ est de ${impot}€`;

console.log(affichage)

