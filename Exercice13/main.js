let nb,
    somme,
    i=1,
    j,
    message,
    affichage;

nb = Number (prompt(`Veuillez saisir un nombre`));

while (i <= nb ) {
    somme = i;
    message = `${nb} = ${i}`;
    j = i + 1;
    while (j <= nb ) {
        somme = somme + j;
        message +=`+${j} `;
        if (somme == nb) {
            affichage += ` ${message} `;
        }
        j++
    }
    i++
}

console.log(affichage)
