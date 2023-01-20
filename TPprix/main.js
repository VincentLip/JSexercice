let nbMystere = (Math.random()*1000).toFixed(0);
let count =0;

const btnTry = document.querySelector('#try-btn');
const priceSend = document.querySelector('#price-send');
const result = document.querySelector('#result');
const nbCount = document.querySelector('#count')

console.log(nbMystere)

btnTry.addEventListener('click' , () => {

    let nbSend = +priceSend.value;
    count++;

    if (nbSend == nbMystere) {
        result.innerHTML = `<h4>Bravo, vous avez gagné !</h4>`;
        nbCount.innerHTML = `<h4> Vous avez réussi en ${count} coups`

    } else if (nbSend > nbMystere) {
        result.innerHTML = `<h4>Trop grand !</h4>`;
        nbCount.innerHTML = `<h4> Vous êtes à ${count} coups`
    } else {
        result.innerHTML = `<h4>Trop petit</h4>`;
        nbCount.innerHTML = `<h4> Vous êtes à ${count} coups</h4>`
    }
    
})