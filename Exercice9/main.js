let age,anciennete,salaire,indemnite,affichage;

age = Number (prompt("Veuillez saisir votre âge :"));
anciennete = Number (prompt("Veuillez saisir votre ancienneté :"));
salaire = Number (prompt("Veuillez saisir votre dernier salaire :"));

if (anciennete>= 1 && anciennete<=10){

    indemnite= anciennete *(salaire/2);
}

if(anciennete>10){

    indemnite=(10 *(salaire/2))+ ((anciennete-10)*salaire);
}

if(age>=46 && age <50){

    indemnite+=2*salaire

}else if (age>=50){

    indemnite+= 5*salaire

}else {

    indemnite+=0;
}

affichage =`Pour un age de ${age} ans , une ancienneté de ${anciennete} an(s) et pour dernier salaire ${salaire} euros. 
l'indemnité sera de ${indemnite}`;

console.log(affichage)