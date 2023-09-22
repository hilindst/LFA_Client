const body = document.body;
const input = document.querySelector('input[type=text]');
const overlay = document.querySelector('.overlay');

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
/* ============== */

const taskList = document.querySelector('.task-list');
const taskForm = document.querySelector('.task-form');

taskForm.addEventListener('submit', createTask);

function createTask(e) {
  e.preventDefault();
  if(!taskInput.value) {
    alert('We need info!');
    return;
  }
  const task = input.value;
  const newTask = document.createElement('li');
  const removeButton = document.createElement("button");
  removeButton.classList.add('btn-outline-warning');
  console.log(removeButton.classList);
  removeButton.innerHTML = "X";
  newTask.innerText = task;
  newTask.appendChild(removeButton);
  taskList.appendChild(newTask);
  taskForm.reset();
  closeFloater();
}

const taskInput = taskForm.querySelector('input[type=text]');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

/*---------To Do----------
1) Local Storage
2) Deleting Tasks
  -prettify those buttons
3)Marking Complete
*/

function removeTask(e) {
  console.log(e);
  if (!e.target.matches('button')) return;
  console.log('Task Removed: ', index);
  //find index
  const index = e.target.parentNode.dataset.id; //console.dir(index)
  //remove from the bookmarks list using splice
  taskList.splice(index, 1); //(index, counter) how many to remove
  //fill list again
  fillBookmarksList(bookmarks);
  //store back in localStorage
  storeBookmarks(bookmarks);
}
