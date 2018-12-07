'use strict'

const searchTextElement = document.querySelector('#search-text')
const todoFormElement = document.querySelector('#todo-form')
const hideCompletedCheckboxElement = document.querySelector('#hide-completed')

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
  }
  
renderTodos(todos, filters)


searchTextElement.addEventListener('input', (e) => {
     filters.searchText = e.target.value
     renderTodos(todos, filters)
   })
   
   todoFormElement.addEventListener('submit', (e) =>{
    e.preventDefault()
    //const enteredTask = e.target.elements.newTodo.value
   
    const newobj = { 
        id: chance.guid(),
        task: e.target.elements.newTodo.value, 
        completed: false
    }
    todos.push(newobj)
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.newTodo.value = ''
  })

  hideCompletedCheckboxElement.addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
  })

  