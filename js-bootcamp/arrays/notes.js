//const notes = ['Note 1', 'Note 2', 'Note 3']

//.length = returns length of array
//console.log(notes)

//accessing array done via [index] notation.  index number starts with 0.
//last item of array can be grabbed by .length-1.
//console.log(notes.length)
//console.log(notes[0])

//.push(item) adds to array
//notes.push('Note 4')

//console.log(notes)

//.pop() removes last item from array.
/* notes.pop()
console.log(notes)

//shift() - removes first item from array
notes.shift()
console.log(notes)
//unshift(item) - adds item to beginning of array
notes.unshift('Note 1')
console.log(notes)
//splice(starting index,num of items)
notes.splice(1, 1)
console.log(notes)
notes.splice(1, 0, 'this is a new item')
console.log(notes)
 */
//Bracket notation assignment
//notes[2] = 'This is the new note 3'
//console.log(notes)

//Looping  foreach
// function in Foreach is called a "callback function"
//notes.forEach(function (item, index) {
//    console.log(index + ':' + item)
//})

//For ... loop  

//counting .. 1
// for(let count = 0;count < 3;count++) {
//     console.log(`Counting...${count}`)
// }

// for(let count = 0;count < notes.length; count++) {
//     console.log(`${count+1}. ${notes[count]}`)
// }

// console.log('\r\n\r\n')

//searching items in array
// indexOf: returns index number.  if not there, -1 returned.
//console.log(notes.indexOf('Note 1'))
//console.log(notes.indexOf('note 1'))

//array of objects
const notes = [{
      title: 'My next trip',
   body: 'I would like to go to Tennessee.'
},{
    title: 'workout redo',
    body: 'rewrite workout routine based on BW reddit group.' 
},{
    title: 'coding',
    body: 'continue to learn Javascript.' 
}]

// const findNote = function (notes, noteTitle) {
//     const note = notes.find(function (note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return note
// }
/* 
const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[index]
}




const note = findNote(notes, 'workout redo')
console.log(note)

console.log(notes.length)
console.log(notes) */


//indexing array of objects
// two objects need to be the same objects for them to be truly equal.
//.findIndex

/* const index = notes.findIndex(function(note, index){
    console.log(note)
    return note.title === 'coding'
})

console.log(index)
 */

console.log(notes)

const findNote = function(notes,noteTitle) {
    return notes.find(function (note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

 //filtering.  new array with searched for criteria.
 //.filter() method - returns an array.
 /* const filteredNotes = notes.filter(function(note, index){
    const isTitleMatch = note.title.toLowerCase().includes('re')
    const isBodyMatch = note.body.toLowerCase().includes('re')
    return isTitleMatch || isBodyMatch
 }) */
 
 const findNotes = function(notes, query) {
    return notes.filter(function(note, index){
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
 }

 //console.log(findNotes(notes, 're'))

 //sort array function. for normal arrays.  
 //for objects, will need to use a function for sort order.
 //compare function



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
sortNotes(notes)
console.log(notes)
 //console.log(sortNotes(notes))


