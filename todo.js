/**
 * @param {this.todo} array
 * @param {title} string
 * @param {category} string
 * 
 */

export default class Todo {
    constructor() {
        this.todo = [

        ]
    }

    addTodo(title, category) {
        let addActivity = {
            title: title,
            category: category
        }

        this.todo.push(addActivity)

        return this.todo
    }

    countTodo() {
        return this.todo.length
    }

    getAllTodo() {
        return this.todo
    }

    getWorkTodo() {
        let work = this.todo.filter(item => item.category === 'work')
        return work
    }

    getPersonalTodo() {
        return this.getAllTodo().filter(item => item.category === 'personal')
    }

    getWorkTodoCount() {
        return this.getWorkTodo().length
    }

    getPersonalTodoCount() {
        return this.getPersonalTodo().length
    }

}