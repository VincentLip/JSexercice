import { Car } from "./classes/car.js";


const getTicketBtn = document.querySelector("#get-ticket-btn");
const paidBtn = document.querySelector("#paid-btn");
const inputMatriculation = document.querySelector("#input-matriculation");
const notExist = document.querySelector("#not-exist");
const ticket = document.querySelector("#ticket");
const paid = document.querySelector("#paid");

let intTime, outTime
let time = 0

const cars =[];
const tabMatriculation =[]



getTicketBtn.addEventListener('click', (event)=>{

    event.preventDefault();
    intTime = new Date();
    let car = new Car("","",inputMatriculation.value,intTime);
    if (!tabMatriculation.includes(inputMatriculation.value)) 
    {
        cars.push(car);
        tabMatriculation.push(inputMatriculation.value);
        ticket.classList.remove("d-none");
        ticket.innerHTML = `Veuillez prendre votre ticket pour le véhicule  ${inputMatriculation.value}.`
        dissapear(ticket);
        console.log(tabMatriculation)
    }
    else {
        notExist.classList.remove("d-none");
        notExist.innerHTML = `Le Véhicule est déjà présent`
        dissapear(notExist);
    }

})

paidBtn.addEventListener('click', (event)=> {

    event.preventDefault();
    
    outTime = new Date();
    for(let voiture of cars){

        if(inputMatriculation.value == voiture.matriculation){
            paid.classList.remove("d-none");
            console.log(inputMatriculation.value);
            time = (outTime-voiture.date)/1000
            if(time<=15){

                paid.innerHTML = `Le prix a payé pour le Véhicule ${inputMatriculation.value} est de 0.8`
                deleteMatriculation(tabMatriculation.indexOf(inputMatriculation.value))
                console.log(tabMatriculation)
                
            }else if (time>15 && time <=30 ){

                paid.innerHTML = `Le prix a payé pour le Véhicule ${inputMatriculation.value} est de 1.3`
                deleteMatriculation(tabMatriculation.indexOf(inputMatriculation.value))
                console.log(tabMatriculation)
                
            }else if (time>30 && time <=45 ){

                paid.innerHTML = `Le prix a payé pour le Véhicule ${inputMatriculation.value} est de 1.7`
                deleteMatriculation(tabMatriculation.indexOf(inputMatriculation.value))
                console.log(tabMatriculation)
                
            }else {

                paid.innerHTML = `Le prix a payé pour le Véhicule ${inputMatriculation.value} est de 6`
                deleteMatriculation(tabMatriculation.indexOf(inputMatriculation.value))
                console.log(tabMatriculation)
                
            }
            dissapear(paid);
            
        }
        else {
            notExist.classList.remove("d-none");
            notExist.innerHTML = `Le véhicule ${inputMatriculation.value} n'existe pas !`
            dissapear(notExist);

        }
    }
} )

const dissapear = (alert)  => {

    setTimeout(() => {

        alert.classList.add("d-none");

    },5000)
}

const deleteMatriculation = (index)  => {

    tabMatriculation.splice(index,1)
}



