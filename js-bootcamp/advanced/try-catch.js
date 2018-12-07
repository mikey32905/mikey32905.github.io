const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25
    } else {
        throw Error('Argument must be a number')
    }
    //return amount * .25
}

/* const result = getTip(5)
console.log(result) */

try{
  const result = getTip('test')
  console.log(result)
} catch (e) {
  console.log('catch block is running')
}

try{
    const result = getTip(20)
    console.log(result)
  } catch (e) {
    console.log('catch block is running')
  }
  