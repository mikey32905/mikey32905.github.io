'use strict'

//const createdAt = moment()
const createNoteElement = document.querySelector('#create-note')
const searchTextElement = document.querySelector('#search-text')
const filterByElement = document.querySelector('#filter-by')
let notes = getSavedNotes()

const filters = {
  searchText: '',
  sortBy: 'byEdited'
}

renderNotes(notes, filters)

 //id = a unique identifier for one element on page.  
 //class = can be used for multiple elements
 createNoteElement.addEventListener('click', (e) => {
   const id = chance.guid()
   const timeStamp = moment().valueOf()
    notes.push({
      id: id,
      title: '',
      body: '',
      createdAt: timeStamp,
      updatedAt: timeStamp
    })
    saveNotes(notes)
   // renderNotes(notes, filters)
   const linkText = `/editNote.html#${id}`
   location.assign(linkText)//"/editNote.html"
})

searchTextElement.addEventListener('input', (e) => {
 // console.log(e.target.value)
  filters.searchText = e.target.value
  //console.log(`filter searchTextContent: ${filters.searchText}`)
  renderNotes(notes, filters)
})

filterByElement.addEventListener('change', (e) => {
  console.log(e.target.value)
  filters.sortBy = e.target.value
  renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
  if (e.key === 'notes') {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
  }
})

