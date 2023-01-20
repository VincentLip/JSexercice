let word,reverseWord,affichage;

word = prompt ("Veuillez saisir un mot :")

word = word.toLowerCase();
reverseWord = word.split("").reverse("").join("");

if(word==reverseWord){

    affichage='Ce mot est un palindrome'
}else{

    affichage="Ce mot n'est pas un palindrome"
}

alert(affichage)