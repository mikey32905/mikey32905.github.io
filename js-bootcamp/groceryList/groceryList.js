'use strict'

/* 
groceryList object contains the following:
item, quantity needed, gotten
ie.  id: uuidv4 value
     item: "fish"
     quantity: 1
     gotten: false
*/
//document query calling variables
const searchTextElement = document.querySelector('#search-text')
const groceryFormElement = document.querySelector('#grocery-form')
const hideGottenElement = document.querySelector('#hide-gotten')

let groceries = getSavedGroceries()

const filters = {
    searchText: '',
    hideGotton: false
}

renderGroceries(groceries, filters)

searchTextElement.addEventListener('input', (e) => {
   filters.searchText = e.target.value
   renderGroceries(groceries, filters) 
})

groceryFormElement.addEventListener('submit', (e) => {
    e.preventDefault()
    const enteredGrocery = e.target.elements.newGroceryItem.value
    let enteredNumber = ''

    if (e.target.elements.numGroceryItem.value !== null) {
        enteredNumber = e.target.elements.numGroceryItem.value
    } else {
        enteredNumber = 1
    }

    const newObj = {
        id: chance.guid(),
        item: enteredGrocery,
        quantity: enteredNumber,
        gotten: false
    }

    groceries.push(newObj)
    saveGroceries(groceries)
    e.target.elements.newGroceryItem.value = ''
    renderGroceries(groceries, filters)
})

hideGottenElement.addEventListener('change', (e) => {
    filters.hideGotton = e.target.checked
    renderGroceries(groceries, filters)
})
