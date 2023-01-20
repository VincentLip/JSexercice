let nbNotes=0,noteMax=0,noteMin=20,moyNote=0;

nbNotes=Number(prompt("Combien de notes allez vous saisir ? :"));

for(let i=1; i<=nbNotes;i++){

    let noteTmp = Number(prompt(`Merci de saisir la note n°${i} (sur 20) :`))

    moyNote+=noteTmp;

        if (noteTmp > noteMax)
            noteMax = noteTmp;
        if (noteTmp < noteMin)
            noteMin = noteTmp;
}

moyNote =Math.round(moyNote/nbNotes)

console.log(`Ma note max est ${noteMax} ma note min est ${noteMin} et la moyenne est de ${moyNote}`)