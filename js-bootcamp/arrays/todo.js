//Challenge 1: create an array with 5 to dos
//print message  "You have x todos."
//print the first and second to last items --> Todo: walk the dog
//const todos = ['do dishes', 'wash clothes', 'cut grass', 'get groceries', 'drop clothes at cita']
const todos = [{
    task: 'do dishes', 
    completed: true
},{
    task: 'wash clothes', 
    completed: true
},{
    task: 'cut grass', 
    completed: false
},{
    task: 'get groceries', 
    completed: false
},{
    task: 'do workout', 
    completed: true
}]

/* console.log(todos.length)
console.log(todos)
 */
const deleteTodo = function(todos, todoTask) {
   // const findTaskIndex = function (todos, todoTask) {
        const index = todos.findIndex(function (todo){
            return todo.task.toLowerCase() === todoTask.toLowerCase()
        })
        //return note
        //todos.splice(index,1)
     //        return index
    //}

    if (index >-1) {  //checks to see if task searched for exists.  -1 means not found.
        console.log(index)
        todos.splice(index, 1)    
    }
 }

 const getThingsToDo = function(todos) {
    return todos.filter(function (todo, index){
        return !todo.completed //=== false//note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

console.log(getThingsToDo(todos))

const sortTodos = function(todos) {
    todos.sort(function(a,b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else if (!a.completed && !b.completed) {
            return 0
        } else {
            return undefined
        }

        //if (a.completed < b.completed)
        //return b - a
    })
}

sortTodos(todos)
console.log(todos)
 //sortTodos(todos)
 //console.log(todos)

 /* 
  const sortNotes = function(notes) {
     notes.sort(function (a, b) {
        //a should be first, -1; b should first 1; equal 0
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }


     }) 
 }
 */
