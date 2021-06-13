/**
 * @param {string} title
 * @param {string} category
 * @param {number} time 
 */
class Todo{
    constructor() {
        this.todos = [

        ]
    }

    getAll() {
        return this.todos
    }

    addTodo(title, category, time) {
        let addObject = {
            title : title.toUpperCase(),
            category : category.toLowerCase(),
            time : time
        }

        this.todos.push(addObject)
    } 

    getCount() {
        return this.todos.length
    }

    getWork() {
        console.log(this.todos)
        return this.getAll().filter(todo => todo.category === "work")
    }

    getPersonal() {
        return this.todos.filter(todo => todo.category === "personal")
    }

    getQuran() {
        return this.todo.filter(todo => todo.category === 'quran')
    }

    countGetWork() {
        return this.getWork().length
    }

    countGetPersonal() {
        return this.getPersonal().length
    }

    countGetQuran() {
        return this.getQuran().length
    }

    




}



let u = new Todo()

u.addTodo("Reading", "Work", 1)
console.log(u.getWork())