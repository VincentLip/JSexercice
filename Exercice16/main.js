let nbNotes = 0,
    maxNote = 0,
    minNote = 20,
    moyNote = 0,
    affichage = "";

const result = document.querySelector('#result');

affichage += `<h2> Meilleur note , moins bonne note , moyenne des notes </h2><hr>`

// nbNotes = Number(prompt("Combiens de notes allez vous saisir ?"));

// affichage += `<p>La série contiend <b>${nbNotes} notes</b> : <ul>`;

// for (let i = 1; i <= nbNotes; i++) {
    
//     let noteTmp = Number(prompt(`Merci de saisir la note ${i} (sur 20):`));

//     affichage+=`<li>En note <b>${i}</b>, vous avez saisi <b>${noteTmp}/20</b>.</li>`;
    
//     moyNote += noteTmp;   
//     if (noteTmp > maxNote)
//         maxNote = noteTmp;
//     if (noteTmp < minNote)
//         minNote = noteTmp;
// }
// affichage+=`</ul></p><hr>`

// moyNote =Math.round(moyNote/nbNotes);

// affichage += `<p> Sur l'ensemble des <b> ${nbNotes} notes </b> :
//             <ul><li class="green">La meilleur note est de <b>${maxNote}/20</b></li>
//             <li class="red">La moins bonne note est de <b>${minNote}/20</b></li>
//             <li class="blue">La moyenne des note est de <b>${moyNote}/20</b></li>
//             </ul><hr>
// </p>`

let betterNote = document.querySelector("#better-btn");
let worstNote = document.querySelector("#worst-btn");
let averageNote = document.querySelector("#average-btn");
let getNote = document.querySelector("#get-btn");

getNote.addEventListener('click' , () => {

    nbNotes=0;
    maxNote = 0,
    minNote = 20,
    moyNote = 0,
    affichage = "";
    nbNotes = Number(prompt("Combiens de notes allez vous saisir ?"));

affichage += `<p>La série a <b>${nbNotes} notes</b> : <ul>`;

for (let i = 1; i <= nbNotes; i++) {
    
    let noteTmp = Number(prompt(`Merci de saisir la note ${i} (sur 20):`));

    affichage+=`<li>En note <b>${i}</b>, vous avez saisi <b>${noteTmp}/20</b>.</li>`;
    
    moyNote += noteTmp;   
    if (noteTmp > maxNote)
        maxNote = noteTmp;
    if (noteTmp < minNote)
        minNote = noteTmp;
}
affichage+=`</ul></p><hr>`

moyNote =Math.round(moyNote/nbNotes);

result.innerHTML = affichage;
})


betterNote.addEventListener('click' , () => {

    affichage += `<li class="green">La meilleur note est de <b>${maxNote}/20</b></li> `
    result.innerHTML = affichage;
})

worstNote.addEventListener('click' , () => {

    affichage += `<li class="red">La moins bonne note est de <b>${minNote}/20</b></li> `
    result.innerHTML = affichage;
})

averageNote.addEventListener('click' , () => {

    affichage += `<li class="blue">La moyenne des note est de <b>${moyNote}/20</b> `
    result.innerHTML = affichage;
})
