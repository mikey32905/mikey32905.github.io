'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const timeStampElement = document.querySelector('#time-stamp')
const removeButtonElement = document.querySelector('#remove-note')
const nodeId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => note.id === nodeId)

if (!note) {
    location.assign('/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
//const timeStamp = moment().valueOf()
timeStampElement.textContent = generateLastEdited(note.updatedAt)//`Last edited: ${moment(note.updatedAt).fromNow()}`

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    timeStampElement.textContent = generateLastEdited(note.updatedAt)
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    saveNotes(notes)
    timeStampElement.textContent = generateLastEdited(note.updatedAt)
})

removeButtonElement.addEventListener('click', (e) => {
    removeNote(nodeId)
    saveNotes(notes)
    location.assign("/index.html")
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === nodeId)
        
        if (!note) {
            location.assign('/index.html')
        }
        
        titleElement.value = note.title
        bodyElement.value = note.body
        timeStampElement.textContent = generateLastEdited(note.updatedAt)
    }
})