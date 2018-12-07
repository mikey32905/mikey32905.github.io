'use strict'

//Document calling variables
const todoElement = document.querySelector('#todos-list')

//Fetch existing todos from local storage.
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')  

    try{
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

//Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//Save todos to local storage.
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render application todos based on filters.
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.task.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        //debugger: used as a breakpoint in program run.  will only work if dev tools opened.
      return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoElement.innerHTML = ''
    
    const newSummary = generateSummaryDOM(incompleteTodos.length)
    todoElement.appendChild(newSummary)
    
    console.log(filteredTodos)

    filteredTodos.forEach((todo) => {
        const todoEl = generateTodoDOM(todo)
        todoElement.appendChild(todoEl)
    })
  }

  //Get the DOM elements for an individual todo
  const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div')
    const todoCheck = document.createElement('input')//.setAttribute('type', 'checkbox')
    const todoText = document.createElement('span')
    const button = document.createElement('button')

    //checkbox for todo
    todoCheck.type = "checkbox"
    todoCheck.checked = todo.completed
    todoEl.appendChild(todoCheck)
    todoCheck.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todo)
        renderTodos(todos, filters)
    })

    //todo text displaying
    todoText.textContent = todo.task
    todoEl.appendChild(todoText)

    //todo remove button
    button.textContent = 'x'
    todoEl.appendChild(button)
    button.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todo)
        renderTodos(todos, filters)
    })

    return todoEl
  }

  //Get the DOM elements for list summary
  const generateSummaryDOM = (summary) => {
    const newSummary = document.createElement('h3')
    newSummary.textContent = `You have ${summary} left.`

    return newSummary
  }

  