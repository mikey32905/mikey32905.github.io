'use strict'

const groceryElement = document.querySelector('#grocery')

//Fetch existing tools from local storage.
const getSavedGroceries = () =>{
    const groceryJSON = localStorage.getItem('groceries')

    try {
        return groceryJSON ? JSON.parse(groceryJSON) : []
    } catch (e) {
        return []
    }
}

//Save grocery items to local storage.
const saveGroceries = (groceries) => {
    localStorage.setItem('groceries', JSON.stringify(groceries))
}

//Toggle the gotten value for given grocery item.
const toggleGrocery = (id) => {
    const grocery = groceries.find((grocery) => grocery.id === id)

    if (grocery) {
        grocery.gotten = !grocery.gotten
    }
}

//Remove grocery item from list and local storage
const removeGrocery = (id) => {
    const groceryIndex = groceries.findIndex((grocery) => grocery.id === id)

    if (groceryIndex > -1) {
        groceries.splice(groceryIndex, 1)
    }
}

//Render application groceries list based on filter
const renderGroceries = (groceries, filters) => {
    const filteredGroceries = groceries.filter((grocery) => {
        const searchTextMatch = grocery.item.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideGottenMatch = !filters.hideGotton || !grocery.gotten
        return searchTextMatch && hideGottenMatch
    })

    const notGottenGroceries = filteredGroceries.filter((grocery) => !grocery.gotten)

    groceryElement.innerHTML = ''

    const newSummary = generateSummaryDOM(notGottenGroceries.length)
    groceryElement.appendChild(newSummary)

    console.log(filteredGroceries)

    filteredGroceries.forEach((grocery) => {
        const groceryEl = generateGroceryDOM(grocery)
        groceryElement.appendChild(groceryEl)
    })
}

//Get the DOM elements for grocery list summary
const generateSummaryDOM = (summary) => {
    const newSummary = document.createElement('h3')
    newSummary.textContent = `You have ${summary} grocery items to get.`
    return newSummary
}

const generateGroceryDOM = (grocery) => {
    const groceryEl = document.createElement('div')
    const groceryCheck = document.createElement('input')
    const groceryText = document.createElement('span')
    const button = document.createElement('button')

    //checkbox for grocery list
    groceryCheck.type = "checkbox"
    groceryCheck.checked = grocery.gotten
    groceryEl.appendChild(groceryCheck)
    groceryCheck.addEventListener('change', (e) => {
        toggleGrocery(grocery.id)
        saveGroceries(grocery)
        renderGroceries(groceries, filters)
    })

    //grocery text displaying
    groceryText.textContent = `${grocery.quantity} x ${grocery.item}`//grocery.item
    groceryEl.appendChild(groceryText)

    //grocery item remove button
    button.textContent = 'x'
    groceryEl.appendChild(button)
    button.addEventListener('click', () => {
        removeGrocery(grocery.id)
        saveGroceries(grocery)
        renderGroceries(groceries, filters)
    })

    return groceryEl
}

