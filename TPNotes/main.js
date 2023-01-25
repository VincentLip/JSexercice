let students = [
    {
        lastname : "MARTIN",
        firstname : "Jean",
        grades : {
            français :[12,15,5],
            histoire :[8,13,2]

        }
    },

    {
        lastname : "DUPOND",
        firstname : "Marc",
        grades : {
            français :[18,13,15],
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

    gradeStudent.innerHTML =`<option value='0'>Sélectionnez un élève</option>`;
    studentChoice.innerHTML = `<option value='0'>Tous les élèves</option>`;
    for (let student of students)
    {
        gradeStudent.innerHTML += `<option value ="${students.indexOf(student)+1}">${student.lastname} ${student.firstname}</option>`;
        studentChoice.innerHTML += `<option value ="${students.indexOf(student)+1}">${student.lastname} ${student.firstname}</option>`;  
    };

    gradeField.innerHTML= `<option value='0'>Toutes les matières</option>`;
    lessonFieldChoice.innerHTML= `<option value='0'>Toutes les matières</option>`;
    for(let lesson of lessons){
            
        gradeField.innerHTML += `<option value ="${lessons.indexOf(lesson)+1}">${lesson}</option>`;
        lessonFieldChoice.innerHTML += `<option value ="${lessons.indexOf(lesson)+1}">${lesson}</option>`;
    }
}

addStudentBtn.addEventListener("click", (event) => {

    event.preventDefault();

    
    const newStudent = {

        lastname : document.querySelector("#student-lastname").value,
        firstname : document.querySelector("#student-firstname").value,
        
    }

    students.push(newStudent);
    console.log(students);
    refreshStudent();
})

addFieldBtn.addEventListener("click", (event) => {

    event.preventDefault();
    let field = document.querySelector("#field").value;
    
    if (!lessons.includes(field)) 
    {
        lessons.push(field);
        
    }
    for(let i =0 ; i< students.length ; i++){

        students[i].grades[field]=[]
    }
    
    refreshStudent();

})

addGradeBtn.addEventListener("click" , (event) => {

    event.preventDefault();

    const tempStudent = students[gradeStudent.value-1];
    const tempGrade = Number(document.querySelector('#grade').value);
    const tempField = document.querySelector('#grade-field').value;
    tempStudent.grades[lessons[tempField-1]].push(tempGrade)
    
})

studentChoice.addEventListener('change', () => {

    refreshTableGrade();
    refreshAverageGrade();
    
})

lessonFieldChoice.addEventListener("change", () => {

    refreshTableGrade();
    refreshAverageGrade();

})



const refreshTableGrade = () => {

    tableGrade.innerHTML ="";

    if(studentChoice.value == 0 && lessonFieldChoice.value == 0 ){

        for (let student of students){
            for(const lessonfield in student.grades){
                for(const grade of student.grades[lessonfield]){

                    tableGrade.innerHTML += 
                    `<tr>
                        <td>${student.lastname}</td>
                        <td>${student.firstname}</td>
                        <td>${lessonfield}</td>
                        <td>${grade}</td>
                    </tr>
                    `
                }
            }
        }
    }else if(lessonFieldChoice.value == 0){

        const student = students[studentChoice.value-1];
        for (const lessonfield in student.grades) {
            for (const grade of student.grades[lessonfield]) {
                tableGrade.innerHTML +=
                `<tr>
                    <td>${student.lastname}</td>
                    <td>${student.firstname}</td>
                    <td>${lessonfield}</td>
                    <td>${grade}</td>
                </tr>`
            }
        }

    }else if(studentChoice.value == 0){
        const lessonfield = lessonFieldChoice.value;
        let mat = lessons[lessonfield-1];
        for (const student of students) {
                for (const grade of student.grades[mat]) {
                    tableGrade.innerHTML +=
                    `<tr>
                        <td>${student.lastname}</td>
                        <td>${student.firstname}</td>
                        <td>${mat}</td>
                        <td>${grade}</td>
                    </tr>`
                }
        }
    }else{
        const student = students[studentChoice.value-1];
        const lessonfield = lessonFieldChoice.value;
        let mat = lessons[lessonfield-1];

        for (const grade of student.grades[mat]) {
            tableGrade.innerHTML +=
            `<tr>
                <td>${student.lastname}</td>
                <td>${student.firstname}</td>
                <td>${mat}</td>
                <td>${grade}</td>
            </tr>`
        }
    }

};

const averageGradeOutput = document.getElementById('average-grade');

const calculateAverage = (grades) => {

    let sum =0;
    for(const grade of grades) sum += grade;
    return (sum /grades.length).toFixed(1);
}

const refreshAverageGrade = () => {
    let currentGrades = [];
    if(studentChoice.value == 0 && lessonFieldChoice.value == 0) {
        console.log("cas Toute la classe et toutes les matiéres")
        for (const student of students) {
            for (const lessonfield in student.grades) {
                for (const grade of student.grades[lessonfield]) {
                    currentGrades.push(grade);
                    averageGradeOutput.innerHTML =`Moyenne générale de la classe : <b>${calculateAverage(currentGrades)}</b>`;
                }
            }
        }
        
    
    }else if(lessonFieldChoice.value == 0 ){

        const student = students[studentChoice.value-1];
        for (const lessonfield in student.grades) {
            for (const grade of student.grades[lessonfield]) {
                currentGrades.push(grade);
                averageGradeOutput.innerHTML =`Moyenne générale de ${student.lastname} ${student.firstname} : <b>${calculateAverage(currentGrades)}</b>`;
            }
        }
    
    
    }else if(studentChoice.value == 0){
        const lessonfield = lessonFieldChoice.value;
        let mat = lessons[lessonfield-1];
        for (const student of students) {
            for (const grade of student.grades[mat]) {
                currentGrades.push(grade);
                averageGradeOutput.innerHTML =`Moyenne en ${mat} de la classe : <b>${calculateAverage(currentGrades)}</b>`;

            }
        }
        

    }else {
        const student = students[studentChoice.value-1];
        const lessonfield = lessonFieldChoice.value;
        let mat = lessons[lessonfield-1];

        for (const grade of student.grades[mat]) {
            currentGrades.push(grade);
            averageGradeOutput.innerHTML=`Moyenne en ${lessonfield} de <b>${student.lastname} ${student.firstname}</b> : <b>${calculateAverage(currentGrades)}</b>`;
        }
    }
        
}


refreshStudent();
