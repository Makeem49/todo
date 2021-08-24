import Todo from "./todo.js"

let input = document.querySelector('#todo-title')
let todoCategory = document.querySelector('#todo-category')
let add = document.querySelector('#todo-form')
let output = document.querySelector('#todo-list')
let filter = document.querySelector('#todo-filter')
let todoCount = document.querySelector('#todo-count')

let task = new Todo()

const render = (items, itemsCount) => {
    count.textContent = `(${itemsCount})`;
    list.innerHTML = items.map(todo => `<li>${todo.title} [${todo.category}]</li>`).join("");
}

try {
    render(task.getAllTodo(), task.countTodo())
} catch (error) {
    console.error()
}


add.addEventListener('submit', (event) => {
    event.preventDefault()

    try {
        task.addTodo(input.value, todoCategory.value)
        render(task.getAllTodo(), task.countTodo())
    } catch (error) {
        console.error()
    }

    input.value = ''

})

filter.addEventListener('change', () => {
    try {
        if (filter.value === "work") {
            // filter work
            render(task.getWorkTodo(), task.getWorkTodoCount());
        } else if (filter.value === "personal") {
            // filter personal
            render(task.getPersonalTodo(), task.getPersonalTodoCount());
        } else {
            // show all
            render(task.getAllTodo(), task.getAllTodo());
        }
    } catch (error) {
        console.error();
    }
})

