'use strict'

/* const processData = () => {
    data = '1209749340231740927349'
}
processData()
console.log(data) */

const formNotesElement = document.querySelector('#notes')

//read existing notes from local storage
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes')

    try {
        return notesJSON  ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }
 }

// Save notes to local storage
const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//Remove a note from the list
const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }
}

//generate the DOM structure for a note
const generateNoteDOM = (note) => {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const anchorEl = document.createElement('a')
    const button = document.createElement('button')
    
    //Setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)
    button.addEventListener('click', () =>{
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    //Setup anchor tab for text
    const linkText = `/editNote.html#${note.id}`
    anchorEl.setAttribute('href', linkText)//"/editNote.html"
    
   
    //Setup the note title text
    if (note.title.length > 0) {
      textEl.textContent = note.title
    } else {
      textEl.textContent = 'Unnamed note'
    }

    anchorEl.innerHTML = textEl.textContent

    noteEl.appendChild(anchorEl)//textEl
    
    return noteEl
}

//Sort your notes by one of three options
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a,b) => {
            if (a.updatedAt < b.updatedAt) {
                return -1
            } else if (a.updatedAt > b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a,b) => {
            if (a.createdAt < b.createdAt) {
                return -1
            } else if (a.createdAt > b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else  if (sortBy === 'alphabetical') {
        return notes.sort((a,b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notes
    }

}

//Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => 
        note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
  
    formNotesElement.innerHTML = ''
    //console.log(filteredNotes)
    filteredNotes.forEach((note) =>{
      const noteEl = generateNoteDOM(note)
      formNotesElement.appendChild(noteEl)
    })
  }


//Generate the last edited message
const generateLastEdited = (timeStamp) => `Last edited: ${moment(timeStamp).fromNow()}`