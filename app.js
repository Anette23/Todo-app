// VARIABLES
const form = document.querySelector("#todo-form");
const formInput = document.querySelector("#form-input");
const todos = document.querySelector('.todos')
const remainingTasks = document.querySelector('.remaining-tasks')

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

if (localStorage.getItem('tasks')) {
    tasks.map(task => {
        createTask(task)
    })
}


formInput.addEventListener('focus', () => {
    formInput.placeholder = "Currently typing"
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = formInput.value;

  if (inputValue === "") {
    return;
  }

  const task = {
    name: inputValue,
    id: new Date().getTime(),
    isCompleted: false,
  };

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  createTask(task)

  form.reset()
});

todos.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
  
      e.target.blur();
    }
  });

// CREATE TASK FUNCTION
function createTask(task) {
    const taskElement = document.createElement('li')
    taskElement.setAttribute('id', task.id)

    if(taskElement.isCompleted) {
        taskElement.classList.add('complete')
    }

    const taskElementMarkup = `
    <div>
        <input type="checkbox" name="task-name" id="${task.id}" 
        ${
            task.isCompleted ? "checked" : ""
    }>
        <span ${!task.isCompleted ? "contenteditable" : ""}>${
task.name
}</span>
    </div>
    <button title="Remove ${task.name} task" class="remove-task">
        <svg viewBox="0 0 24 24" fill="none">
        <path d="M17.25 17.25L6.75 6.75" stroke="hsl(234, 11%, 52%)" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
        <path d="M17.25 6.75L6.75 17.25" stroke="hsl(234, 11%, 52%)" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
        </svg>
    </button> 
`;

taskElement.innerHTML = taskElementMarkup
todos.appendChild(taskElement)

countTasks()
}

// COUNT TASKS FUNCTION
function countTasks() {
const completedTasksArray = tasks.filter((task) => task.isCompleted === true)

remainingTasks.textContent = tasks.length - completedTasksArray.length
}