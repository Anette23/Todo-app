// VARIABLES

const form = document.querySelector('#todo-form')
const formInput = document.querySelector('#form-input')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = formInput.value

    if(inputValue === '') {
        return
    }

    const task = {
        name: inputValue,
        id: new Date().getTime(),
        isCompleted: false
    }

    tasks.push(task)
})