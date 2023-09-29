/*----Overlay and Floater----*/
const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');
let todos = [];




function showFloater() {
    body.classList.add('show-floater');
  }

function closeFloater() {
    if (body.classList.contains('show-floater')) {
     body.classList.remove('show-floater');
    }
  }

  input.addEventListener('focus', showFloater);
  overlay.addEventListener('click', closeFloater);
  input.addEventListener('focusin', showFloater);
  input.addEventListener('focusout', closeFloater);

/* ======Tasks======== */

const taskList = document.querySelector('.task-list');
const taskForm = document.querySelector('.task-form');

taskForm.addEventListener('submit', function(e) {
  e.preventDefault();
  createTask(input.value);
});

function createTask(input) {
  if(!taskInput.value) {
    alert('What do? WHAT DO?');
    return;
  }
  const task = {
    name: input.value,
    completed: false
  };
  const newTask = document.createElement('li');
  const removeButton = document.createElement("button");
  removeButton.classList.add("btn-warning");
  removeButton.innerHTML = "X";
  newTask.innerText = task;
  newTask.appendChild(removeButton);
  taskList.appendChild(newTask);
  todos.push(task);
  renderTask(task);
  taskForm.reset();
  closeFloater();

  removeButton.addEventListener("click", function () {
    newTask.remove();
    // Save tasks to local storage when a task is deleted
    /* saveTasksToLocalStorage(); */
  }); 
}

const taskInput = taskForm.querySelector('input[type=text]');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

let text = document.getElementsByTagName('li').innerHTML;
console.log(text);
text.innerHTML.addEventListener("click", completed);

function completed() {
  if (document.getElementsByTagName('li').style.textDecoration === "none"){
    document.getElementsByName('li').write(text.strike());
  } else {
    document.getElementsByName('li').style.textDecoration = "none";
  }
};

