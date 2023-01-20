let nbhabitant = 96809,
    date = 2015,
    nbAnnee = 0,
    taux = 0.89,
    affichage;


while (nbhabitant<120000){

    nbhabitant+=nbhabitant*(taux/100);
    nbAnnee++
}

affichage =`En ${date} tourcoing avaient 96809 habitants avec un taux d'accroissement de ${taux} %, il faudra ${nbAnnee} années pour atteindre 120000 habitants
soit en ${date+nbAnnee}`
console.log(affichage)