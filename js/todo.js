const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify makes everything to string
}
function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    //li.classList.add("todolist");
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo) {
    const parsedToDo = JSON.parse(savedToDo);
    toDos = parsedToDo;
    parsedToDo.forEach(paintToDo);
}