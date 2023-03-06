// VARIABLES

const form = document.querySelector('#todo-form')
const formInput = document.querySelector('#form-input')

let tasks = []

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputValue = formInput.value

    if(inputValue === '') {
        return
    }

})