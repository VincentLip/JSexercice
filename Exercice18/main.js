const bntReset = document.querySelector('#button-reset')
const btnOpenParenth  = document.querySelector('#button-open-parenth')
const btnCloseParenth  = document.querySelector('#button-close-parenth')
const btnPoint  = document.querySelector('#button-point')
const bntEqual = document.querySelector('#button-equal')

const affichageResultat = document.querySelector('#affichage-resultat');
const affichageOperation = document.querySelector('#affichage-operation');

const bouttonNumerique = document.querySelectorAll('.boutton-num')
const bouttonOperator = document.querySelectorAll('.boutton-operator')


let resultat = ""

bouttonNumerique.forEach(x => x.addEventListener('click', (event) => {
    const textValue = event.srcElement.firstChild.data
    affichageResultat.value = textValue ;
    affichageOperation.value += textValue;
    resultat = affichageOperation.value
    console.log(affichageResultat.value)
    console.log(textValue)
}))

bouttonOperator.forEach(y => y.addEventListener('click', (event) => {
    const textValue = event.srcElement.firstChild.data
    affichageResultat.value = textValue ;
    affichageOperation.value += textValue;
    resultat = affichageOperation.value
    console.log(affichageResultat.value)
    console.log(textValue)
}))

function equal(){

    affichageResultat.value ="";
    affichageResultat.value = eval(resultat);
    console.log(affichageResultat)

}

bntEqual.addEventListener('click', ()=>{

    equal();
    

})

bntReset.addEventListener('click', ()=> {

    affichageResultat.value ="";
    affichageOperation.value ="";
    resultat = 0;

})

btnPoint.addEventListener('click', ()=> {

    
    if(affichageResultat.value =="."){
        affichageOperation.value -="";
        affichageResultat.value ="";
    }else {
        affichageOperation.value +=".";
        affichageResultat.value =".";
    }
})

function affichage(arg){

    affichageResultat.value = arg ;
    affichageOperation.value += arg;
    resultat = affichageOperation.value 
}

document.addEventListener('keydown', (event) => {

        if(event.key === "0"){
            affichage(event.key);
            }
        if(event.key === "1"){
            affichage(event.key);
            }
        if(event.key === "2"){
            affichage(event.key); 
            }
        if(event.key === "3"){
            affichage(event.key);
            }
        if(event.key === "4"){
            affichage(event.key); 
            }
        if(event.key === "5"){
            affichage(event.key); 
            }
        if(event.key === "6"){
            affichage(event.key); 
            }
        if(event.key === "7"){
            affichage(event.key); 
            }
        if(event.key === "8"){
            affichage(event.key); 
            }
        if(event.key === "9"){
            affichage(event.key); 
            }
        if(event.key === "+"){
            affichage(event.key); 
            }
        if(event.key === "-"){
            affichage(event.key); 
            }
        if(event.key === "*"){
            affichage(event.key); 
            }
        if(event.key === "/"){
            affichage(event.key); 
            }
        if(event.key === "Enter"){
            equal();
        
        }

})
//*****************************************************************************************************************************
//                      CODE V1.0
//
//*****************************************************************************************************************************


// const btnZero = document.querySelector('#button-zero');
// const btnOne = document.querySelector('#button-one');
// const btnTwo = document.querySelector('#button-two');
// const btnThree = document.querySelector('#button-three');
// const btnFour = document.querySelector('#button-four');
// const btnFive = document.querySelector('#button-five');
// const btnSix = document.querySelector('#button-six');
// const btnSeven = document.querySelector('#button-seven');
// const btnEight = document.querySelector('#button-eight');
// const btnNine = document.querySelector('#button-nine');
// const btnAdd = document.querySelector('#button-add');
// const btnSubt = document.querySelector('#button-subt');
// const btnMult = document.querySelector('#button-mult');
// const btnDivi = document.querySelector('#button-divi');

// function zero(){

//     affichageResultat.value = 0 ;
//     affichageOperation.value += 0;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function one(){

//     affichageResultat.value = 1 ;
//     affichageOperation.value += 1;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function two(){

//     affichageResultat.value = 2 ;
//     affichageOperation.value += 2;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function three(){

//     affichageResultat.value = 3 ;
//     affichageOperation.value += 3;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function four(){

//     affichageResultat.value = 4 ;
//     affichageOperation.value += 4;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function five(){

//     affichageResultat.value = 5 ;
//     affichageOperation.value += 5;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function six(){

//     affichageResultat.value = 6 ;
//     affichageOperation.value += 6;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function seven(){

//     affichageResultat.value = 7 ;
//     affichageOperation.value += 7;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function eight(){

//     affichageResultat.value = 8 ;
//     affichageOperation.value += 8;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function nine(){

//     affichageResultat.value = 9 ;
//     affichageOperation.value += 9;
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }


// function add(){

//     affichageResultat.value = "+" ;
//     affichageOperation.value += "+";
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function subt(){

//     affichageResultat.value = "-" ;
//     affichageOperation.value += "-";
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function multp(){

//     affichageResultat.value = "*" ;
//     affichageOperation.value += "*";
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function divi(){

//     affichageResultat.value = "/" ;
//     affichageOperation.value += "/";
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function openParenth(){

//     affichageResultat.value = "(" ;
//     affichageOperation.value += "(";
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)

// }

// function closeParenth(){

//     affichageResultat.value = ")" ;
//     affichageOperation.value += ")";
//     resultat = affichageOperation.value
//     console.log(affichageResultat.value)
    
// }


// btnZero.addEventListener('click', ()=>{

//     zero();

// })

// btnOne.addEventListener('click', ()=>{

//     one();

// })

// btnTwo.addEventListener('click', ()=>{

//     two();

// })

// btnThree.addEventListener('click', ()=>{

//     three();

// })

// btnFour.addEventListener('click', ()=>{

//     four();

// })

// btnFive.addEventListener('click', ()=>{

//     five();
// })

// btnSix.addEventListener('click', ()=>{

//     six();

// })

// btnSeven.addEventListener('click', ()=>{

//     seven();

// })

// btnEight.addEventListener('click', ()=>{

//     eight();

// })

// btnNine.addEventListener('click', ()=>{

//     nine();

// })

// btnAdd.addEventListener('click', ()=>{

//     add();

// })

// btnSubt.addEventListener('click', ()=>{

//     subt();

// })

// btnMult.addEventListener('click', ()=>{

//     multp();

// })

// btnDivi.addEventListener('click', ()=>{

//     divi();

// })

// btnOpenParenth.addEventListener('click', ()=>{

//     openParenth();

// })

// btnCloseParenth.addEventListener('click', ()=>{

//     closeParenth();

// })



// document.addEventListener('keydown', (event) => {

//     if(event.key === "0"){
//         zero();
//     }
//     if(event.key === "1"){
//         // one();
//     }
//     if(event.key === "2"){
//         // two();
//     }
//     if(event.key === "3"){
//         three();
//     }
//     if(event.key === "4"){
//         four();
//     }
//     if(event.key === "5"){
//         five();
//     }
//     if(event.key === "6"){
//         six();
//     }
//     if(event.key === "7"){
//         seven();
//     }
//     if(event.key === "8"){
//         eight();
//     }
//     if(event.key === "9"){
//         nine();
//     }
//     if(event.key === "+"){
//         add();
//     }
//     if(event.key === "-"){
//         subt();
//     }
//     if(event.key === "*"){
//         multp();
//     }
//     if(event.key === "/"){
//         divi();
//     }
//     if(event.key === "Enter"){
//         equal();
//     }

// })

