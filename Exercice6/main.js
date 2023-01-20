let tva = Number (prompt("Veuillez saisir le montant de la T.V.A en % :"));
let priceProduct = Number (prompt("Veuillez saisir le prix de votre produit hors taxe:"));

let ttc = priceProduct + (priceProduct * (tva/100));

let affichage = `Le montant de la T.V.A est de ${tva} % , le prix de votre produit hors taxe est de ${priceProduct} euros.
Votre produit vaut ${ttc} euros T.T.C`;


console.log(affichage)