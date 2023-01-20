let email = "contact@teamjs.fr";
let mdp = "leLundiAuSoleil";
let affichage="";

let userEmail= prompt("Veuillez entrer votre email :")
let userMdp= prompt ("Veuillez entrer votre mdp :")

if (email == userEmail){
    if(mdp==userMdp){
        affichage = 'Bienvenue sur votre espace'
    }
    else{
        affichage = 'Mot de passe incorrect'
    }
}else {

    affichage = 'Email incorrect'
}

alert(affichage)