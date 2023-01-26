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


const buttonStudentVisibility = $('#add-student-visibility');
const buttonFieldVisibility = $('#add-field-visibility');
const buttonGradeVisibility = $('#add-grade-visibility');

const addStudent = $('#add-student');
const addField = $('#add-field');
const addGrade = $('#add-grade');

const addStudentBtn = $('#add-student-btn');
const addFieldBtn = $('#add-field-btn');
const addGradeBtn = $('#add-grade-btn');


const gradeStudent = $('#grade-student');
const studentChoice = $('#student-choice');
const gradeField = $('#grade-field');
const lessonFieldChoice = $('#lessonfield-choice');

const tableGrade = $('#table-grade');

let studentVisibility = false;
let fieldVisibility = false;
let gradeVisibility = false;


buttonStudentVisibility.click(() =>{

    studentVisibility = !studentVisibility
    if (studentVisibility) 
    {
        addStudent.removeClass('d-none')
        buttonStudentVisibility.text("ON")
    }
    else
    {
        addStudent.addClass('d-none')
        buttonStudentVisibility.text("OFF")
    }

})

buttonFieldVisibility.click(() =>{

    fieldVisibility = !fieldVisibility
    if (fieldVisibility) 
    {
        addField.removeClass('d-none')
        buttonFieldVisibility.text("ON")
    }
    else
    {
        addField.addClass('d-none')
        buttonFieldVisibility.text("OFF")
    }

})

buttonGradeVisibility.click(() =>{

    gradeVisibility = !gradeVisibility
    if (gradeVisibility) 
    {
        addGrade.removeClass('d-none')
        buttonGradeVisibility.text("ON")
    }
    else
    {
        addGrade.addClass('d-none')
        buttonGradeVisibility.text("OFF")
    }

})


const refreshStudent = () => {

    gradeStudent.html(`<option value='0'>Sélectionnez un élève</option>`);
    studentChoice.html(`<option value='0'>Tous les élèves</option>`);
    for (let student of students)
    {
        gradeStudent.append(`<option value ="${students.indexOf(student)+1}">${student.lastname} ${student.firstname}</option>`);
        studentChoice.append(`<option value ="${students.indexOf(student)+1}">${student.lastname} ${student.firstname}</option>`);
    };

    gradeField.html(`<option value='0'>Toutes les matières</option>`);
    lessonFieldChoice.html(`<option value='0'>Toutes les matières</option>`);
    for(let lesson of lessons){
            
        gradeField.append(`<option value ="${lessons.indexOf(lesson)+1}">${lesson}</option>`);
        lessonFieldChoice.append(`<option value ="${lessons.indexOf(lesson)+1}">${lesson}</option>`);
    }
}

addStudentBtn.click((event) =>  {

    event.preventDefault();

    
    const newStudent = {

        lastname :$("#student-lastname").val(),
        firstname :$("#student-firstname").val(),
    }
    
    students.push(newStudent);
    refreshStudent();
})

addFieldBtn.click((event) => {

    event.preventDefault();
    let field =$("#field").val();
    
    if (!lessons.includes(field)) 
    {
        lessons.push(field);
        
    }
    for(let i =0 ; i< students.length ; i++){

        students[i].grades[field]=[]
    }
    console.log(students);
    refreshStudent();

})

addGradeBtn.click((event) => {

    event.preventDefault();

    const tempStudent = students[gradeStudent.val()-1];
    const tempGrade = +$('#grade').val();
    const tempField =$('#grade-field').val();
    tempStudent.grades[lessons[tempField-1]].push(tempGrade)

    
})

studentChoice.change(() => {

    refreshTableGrade();
    refreshAverageGrade();
    
})

lessonFieldChoice.change(() => {

    refreshTableGrade();
    refreshAverageGrade();

})



const refreshTableGrade = () => {

    tableGrade.html("");

    if(studentChoice.val() == 0 && lessonFieldChoice.val() == 0 ){

        for (let student of students){
            for(const lessonfield in student.grades){
                for(const grade of student.grades[lessonfield]){

                    tableGrade.append(
                    `<tr>
                        <td>${student.lastname}</td>
                        <td>${student.firstname}</td>
                        <td>${lessonfield}</td>
                        <td>${grade}</td>
                    </tr>
                    `)
                }
            }
        }
    }else if(lessonFieldChoice.val() == 0){

        const student = students[studentChoice.val()-1];
        for (const lessonfield in student.grades) {
            for (const grade of student.grades[lessonfield]) {
                tableGrade.append(
                `<tr>
                    <td>${student.lastname}</td>
                    <td>${student.firstname}</td>
                    <td>${lessonfield}</td>
                    <td>${grade}</td>
                </tr>`)
            }
        }

    }else if(studentChoice.val() == 0){
        const lessonfield = lessonFieldChoice.val();
        let mat = lessons[lessonfield-1];
        for (const student of students) {
                for (const grade of student.grades[mat]) {
                    tableGrade.append(
                    `<tr>
                        <td>${student.lastname}</td>
                        <td>${student.firstname}</td>
                        <td>${mat}</td>
                        <td>${grade}</td>
                    </tr>`)
                }
        }
    }else{
        const student = students[studentChoice.val()-1];
        const lessonfield = lessonFieldChoice.val();
        let mat = lessons[lessonfield-1];

        for (const grade of student.grades[mat]) {
            tableGrade.append(
            `<tr>
                <td>${student.lastname}</td>
                <td>${student.firstname}</td>
                <td>${mat}</td>
                <td>${grade}</td>
            </tr>`)
        }
    }

};

const averageGradeOutput = $('#average-grade');

const calculateAverage = (grades) => {

    let sum =0;
    for(const grade of grades) sum += grade;
    return (sum /grades.length).toFixed(1);
}

const refreshAverageGrade = () => {
    let currentGrades = [];
    if(studentChoice.val() == 0 && lessonFieldChoice.val() == 0) {
        console.log("cas Toute la classe et toutes les matiéres")
        for (const student of students) {
            for (const lessonfield in student.grades) {
                for (const grade of student.grades[lessonfield]) {
                    currentGrades.push(grade);
                    averageGradeOutput.append(`Moyenne générale de la classe : <b>${calculateAverage(currentGrades)}</b>`);
                }
            }
        }
        
    
    }else if(lessonFieldChoice.val() == 0 ){

        const student = students[studentChoice.val()-1];
        for (const lessonfield in student.grades) {
            for (const grade of student.grades[lessonfield]) {
                currentGrades.push(grade);
                averageGradeOutput.html(`Moyenne générale de ${student.lastname} ${student.firstname} : <b>${calculateAverage(currentGrades)}</b>`);
            }
        }
    
    
    }else if(studentChoice.val() == 0){
        const lessonfield = lessonFieldChoice.val();
        let mat = lessons[lessonfield-1];
        for (const student of students) {
            for (const grade of student.grades[mat]) {
                currentGrades.push(grade);
                averageGradeOutput.html(`Moyenne en ${mat} de la classe : <b>${calculateAverage(currentGrades)}</b>`);

            }
        }
        

    }else {
        const student = students[studentChoice.val()-1];
        const lessonfield = lessonFieldChoice.val();
        let mat = lessons[lessonfield-1];

        for (const grade of student.grades[mat]) {
            currentGrades.push(grade);
            averageGradeOutput.html(`Moyenne en ${mat} de <b>${student.lastname} ${student.firstname}</b> : <b>${calculateAverage(currentGrades)}</b>`);
        }
    }
        
}


refreshStudent();
