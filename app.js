/*const todoList = [{name: 'make dinner', 
dueDate: '2023-10-07'},
{name: 'wash dishes', dueDate: '2022-12-22'}]; */

let todoList = JSON.parse(localStorage.getItem('todoList')) || [{name: 'make dinner', 
dueDate: '2023-10-07'},
{name: 'wash dishes', dueDate: '2022-12-22'}];


renderTodoList();

function renderTodoList() {
    let todoListHTML = "";

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];

        //const name = todoObject.name; 
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject;


        const html = `<div class="hand">${name}</div>
        <div class="hand">${dueDate}</div>
        <button class="hand delete-item-button" onclick="todoList.splice(${i}, 1);
        renderTodoList();">Delete</button>
        `;
    
        todoListHTML += html;
    
    }
    console.log(todoListHTML);
    
    
    document.querySelector(".js-todo-list")
    .innerHTML = todoListHTML;
}


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input')
    const dueDate = dateInputElement.value;

    todoList.push({name: name, 
    dueDate: dueDate});

    //console.log(todoList);
    saveTodoList();

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
}


function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function resetTodoList() {
    // Play the audio for 4 seconds
    const resetSound = document.getElementById('resetSound');
    resetSound.play();

    // Reset the todo list after 4 seconds
    setTimeout(() => {
        // Reset the todo list
        todoList = [];
        saveTodoList();
        renderTodoList();

        // Show the reset overlay
        const resetOverlay = document.querySelector('.reset-overlay');
        resetOverlay.style.display = 'block';

        // Hide the overlay and pause the audio after 1 second
        setTimeout(() => {
            resetOverlay.style.display = 'none';
            resetSound.pause();
            resetSound.currentTime = 0; // Reset audio to the beginning
        }, 900); // 1000 milliseconds = 1 second
    }, 4000); // 4000 milliseconds = 4 seconds
}
