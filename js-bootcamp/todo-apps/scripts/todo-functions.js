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
    
    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            const todoEl = generateTodoDOM(todo)
            todoElement.appendChild(todoEl)
        })
    } else {
        const emptyMessage = document.createElement('p')
        emptyMessage.classList.add('empty-message')
        emptyMessage.textContent = 'No to-dos to show!!'
        todoElement.appendChild(emptyMessage)
    }
  }

  //Get the DOM elements for an individual todo
  const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const todoCheck = document.createElement('input')//.setAttribute('type', 'checkbox')
    const todoText = document.createElement('span')
    const button = document.createElement('button')

    //checkbox for todo
    todoCheck.type = "checkbox"
    todoCheck.checked = todo.completed
   containerEl.appendChild(todoCheck)
    todoCheck.addEventListener('change', () => {
        toggleTodo(todo.id)
        saveTodos(todo)
        renderTodos(todos, filters)
    })

    //todo text displaying
    todoText.textContent = todo.task
    containerEl.appendChild(todoText)

   //Setup container
   todoEl.classList.add('list-item')
   containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    //todo remove button
    button.textContent = 'remove'
    button.classList.add('button','button--text')
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
    newSummary.classList.add('list-title')
    
    const todoText = summary === 1 ? `You have ${summary} todo left.` : 
                                    `You have ${summary} todos left.`

    newSummary.textContent = todoText

    return newSummary
  }

  