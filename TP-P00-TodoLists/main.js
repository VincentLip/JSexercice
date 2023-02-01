// import { Todo } from "./classes/todo.js";

class Todo {
    static count = 0;
    constructor(title,content){

        this.id = ++Todo.count;
        this.title = title;
        this.content = content;
        this.isDone = true;
    }
}


const title = document.querySelector("#title");
const content = document.querySelector("#content");
const addTodoBtn = document.querySelector("#add-todo-btn");

const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");

const tableTodo = document.querySelector("#table-todo");

const todos = [];

addTodoBtn.addEventListener('click', async () => {

    tableTodo.innerHTML =""
    await addTodo();
    tableDisplay();
})

function addTodo(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            resolve(todos.push(new Todo(title.value,content.value)));
            
        }, 2000)
    })
}

searchBtn.addEventListener('click', ()=> {

    tableTodo.innerHTML =""; 
    const temp = findTodo();
    tableTodo.innerHTML += 
                `<tr>
                    <td>${temp.id}</td>
                    <td>${temp.title}</td>
                    <td>${temp.content}</td>
                    <td><button type="button" class="btn btn-outline-warning" onclick="deleteTodo(${temp.id})">Supprimer</button>
                        <button type="button" class="btn btn-outline-success" onclick="switchTodo(${temp.isDone})">Fait</button></td>
                </tr>
                `
})



function findTodo(){

    
    return todos.find(todo => {
        return todo.title == search.value
    })
}

function tableDisplay(){

    for (let todo of todos){
                tableTodo.innerHTML += 
                `<tr>
                    <td>${todo.id}</td>
                    <td>${todo.title}</td>
                    <td>${todo.content}</td>
                    <td><button type="button" class="btn btn-outline-warning" onclick="deleteTodo(${todo.id})">Supprimer</button>
                        <button type="button" class="btn btn-outline-success" onclick="switchTodo(${todo.isDone})">Fait</button>
                    </td>
                </tr>
                `
    }
}

function switchTodo(event) {
    let todo = todos.find(x => x.id == event)

    if (todo) {
        todo.isDone = !todo.isDone
    }

    
    console.log(todo.isDone)
    
}

function deleteTodo(event){

    let todo = todos.find(x => x.id == event)

    if (todo) {
        let todoIndex = todos.indexOf(event)
        todos.splice(todoIndex, 1)
    }
}
