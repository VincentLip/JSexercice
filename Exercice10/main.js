let choix,boisson,affichage,menu;

menu = `
        1) Eau
        2) Jus d'orange
        3) Limonade
        4) Café
        5) Thé 
        
    Faites Votre choix`;


choix = prompt(menu)

switch(choix){

    case "1":
        boisson = "Eau";
        break;

    case "2":
        boisson = "Jus d'orange";
        break;

    case "3":
        boisson = "Limonade";
        break;

    case "4":
        boisson = "Café";
        break;
    
    case "5":
        boisson = "Thé";
        break;
        
}

affichage =`Vous avez choisie ${boisson} comme boisson`
console.log(affichage)
