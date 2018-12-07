//Lexical Scope (static scope)
//Global scope - Defined outside of all code blocks
//Local scope - defined inside a code block.

//In a scope you can access variables in that scope, or in any parent/ancestor scope.

//Global Scope (varOne)
  //Local Scope(varTwo)
    //Local Scope (varFour)
  //Local Scope (varThree)
  
let varOne = 'varOne'

if (true){
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true){
        let varFour = 'varFour'
    }
}

if (true){
    let varThree = 'varThree'
}
