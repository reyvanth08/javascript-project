//Access the DOM required elements
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

//EventListeners
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);

function addTodo(event) {
    //prevents the form from submitting
    event.preventDefault();

    //Todo Input
    if(todoInput.value !== "") {
        console.log("Came inside if loop");

        //created a new div
        const newTodo = document.createElement('div');
        newTodo.className = 'todo';

        //create a list
        const newTodoListItem = document.createElement('li');
        newTodoListItem.className = "todo-item";
        newTodoListItem.innerText = todoInput.value;

        //Append new item to list and add div
        newTodo.appendChild(newTodoListItem);
        todoInput.value = "";

        //completed item in list
        const completedBtn = document.createElement('button');
        completedBtn.innerText = `✔️`;
        completedBtn.classList.add('complete-btn');
        newTodo.appendChild(completedBtn);

        //Delete item in list
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = `❌`;
        deleteBtn.classList.add('delete-btn');
        newTodo.appendChild(deleteBtn);

        //Adding to the UL in html file
        todoList.appendChild(newTodo)
    }
}

function deleteTodo(event) {
    const evt = event.target;

    if(evt.classList[0] == 'delete-btn') {
        const todoToBeDeleted = evt.parentElement;

        todoToBeDeleted.classList.add('fade-away');

        todoToBeDeleted.addEventListener('transitionend', event => {
            todoToBeDeleted.remove();
        })

        console.log(todoList)
    }

    if(evt.classList[0] == 'complete-btn') {
        const todoToBeCompleted = evt.parentElement;
        const todoItem = todoToBeCompleted.querySelector('.todo-item');
        todoItem.classList.toggle('completed');
    }
}