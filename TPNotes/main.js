let students = [
    {
        lastname : "MARTIN",
        firstname : "Jean",
        grades : {
            francais :[12,15,5],
            histoire :[8,13,2]

        }
    },

    {
        lastname : "DUPOND",
        firstname : "Marc",
        grades : {
            francais :[18,13,15],
            histoire :[8,5,9]

        }
    }
]

let lessons = ['français', 'histoire'];


const buttonStudentVisibility = document.querySelector('#add-student-visibility');
const buttonFieldVisibility = document.querySelector('#add-field-visibility');
const buttonGradeVisibility = document.querySelector('#add-grade-visibility');

const addStudent = document.querySelector('#add-student');
const addField = document.querySelector('#add-field');
const addGrade = document.querySelector('#add-grade');

const addStudentBtn = document.querySelector('#add-student-btn');
const addFieldBtn = document.querySelector('#add-field-btn');
const addGradeBtn = document.querySelector('#add-grade-btn');

const gradeStudent = document.querySelector('#grade-student');
const studentChoice = document.querySelector('#student-choice');
const gradeField = document.querySelector('#grade-field');
const lessonFieldChoice = document.querySelector('#lessonfield-choice');

const tableGrade = document.querySelector('#table-grade');

let studentVisibility = false;
let fieldVisibility = false;
let gradeVisibility = false;


buttonStudentVisibility.addEventListener('click', ()=>{

    studentVisibility = !studentVisibility
    if (studentVisibility) 
    {
        addStudent.classList.remove('d-none')
        buttonStudentVisibility.textContent ="ON"
    }
    else
    {
        addStudent.classList.add('d-none')
        buttonStudentVisibility.textContent ="OFF"
    }

})

buttonFieldVisibility.addEventListener('click', ()=>{

    fieldVisibility = !fieldVisibility
    if (fieldVisibility) 
    {
        addField.classList.remove('d-none')
        buttonFieldVisibility.textContent ="ON"
    }
    else
    {
        addField.classList.add('d-none')
        buttonFieldVisibility.textContent ="OFF"
    }

})

buttonGradeVisibility.addEventListener('click', ()=>{

    gradeVisibility = !gradeVisibility
    if (gradeVisibility) 
    {
        addGrade.classList.remove('d-none')
        buttonGradeVisibility.textContent ="ON"
    }
    else
    {
        addGrade.classList.add('d-none')
        buttonGradeVisibility.textContent ="OFF"
    }

})


const refreshStudent = () => {

    gradeStudent.innerHTML =`<option value="0">Sélectionnez un élève</option>`;
    for (let student of students)
    {
        gradeStudent.innerHTML += `<option value ="${students.indexOf(student)+1}">${student.lastname} ${student.firstname}</option>`;
            
    };

    gradeField.innerHTML= `<option value='0'>Toutes les matières</option>`;
    for(let lesson of lessons){
            
        gradeField.innerHTML += `<option value ="${lesson}">${lesson}</option>`;

    }

    studentChoice.innerHTML =`<option value="0">Sélectionnez un élève</option>`;
    for (let student of students) {

        studentChoice.innerHTML += `<option value ="${students.indexOf(student)+1}">${student.lastname} ${student.firstname}</option>`;
    
    };

    lessonFieldChoice.innerHTML= `<option value='0'>Toutes les matières</option>`;
    for(let lesson of lessons){
            
        lessonFieldChoice.innerHTML += `<option value ="${lesson}">${lesson}</option>`;

    }
}

studentChoice.addEventListener('change' , () => {

    refreshStudent();
})


addStudentBtn.addEventListener("click", (event) => {

    event.preventDefault();

    
    students.push({

        lastname : document.querySelector("#student-lastname").value,
        firstname : document.querySelector("#student-firstname").value,
        
    })
    console.log(students);
    refreshStudent();
})

addFieldBtn.addEventListener("click", (event) => {

    event.preventDefault();
    let field = document.querySelector("#field").value;
    
    for(let i =0 ; i< students.length ; i++){

        students[i].grades[field]=[]
    }
    refreshStudent();

})

addGradeBtn.addEventListener("click" , (event) => {

    event.preventDefault();



    refreshStudent();
})


const refreshTableGrade = () => {

    tableGrade ="";

}

refreshStudent();

