const products = ['dummy']
const product = products[0]

//truthy - values that resolve to true in boolean context
//falsy - values that resolve to false in boolean context
//falsy values - false, 0, empty string, null, undefined,NaN

if (product) {  //product !== undefined
    console.log('Product found!')
} else {
    console.log('Product not found!')
}